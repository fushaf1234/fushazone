import React, { useEffect, useState } from 'react';
import { Plus, Save, Trash2, Eye, EyeOff, PackagePlus } from 'lucide-react';
import { packagesService, PricePackage, PROGRAMS, ProgramId, unitLabel } from '../../services/packagesService';
import { resetPackagesCache } from '../../hooks/usePackages';
import { useAcademySettings, formatMoney } from '../../hooks/useAcademySettings';

interface Props {
  isAr: boolean;
  onNotice: (message: string) => void;
}

const inputCls = 'w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white';
const labelCls = 'text-[11px] font-bold text-gray-500 block mb-1';
const numOrUndef = (v: string) => (v.trim() === '' ? undefined : Math.max(0, Number(v) || 0));

const emptyPackage = (order: number): PricePackage => ({
  id: `PKG-${Date.now().toString(36).toUpperCase()}`,
  program: 'arabic',
  titleAr: '',
  titleEn: '',
  descAr: '',
  descEn: '',
  unit: 'month',
  order,
  active: true
});

// الباقات والأسعار: إضافة وتعديل وحذف وإخفاء، وتظهر مباشرة في صفحة الأسعار
export const AdminPackagesManager: React.FC<Props> = ({ isAr, onNotice }) => {
  const tr = (en: string, ar: string) => (isAr ? ar : en);
  const { currency } = useAcademySettings();
  const [list, setList] = useState<PricePackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<PricePackage | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      setList(await packagesService.list());
    } catch (err: any) {
      console.error(err);
      onNotice(`${tr('Failed to load packages:', 'تعذر تحميل الباقات:')} ${err?.code || ''}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const run = async (fn: () => Promise<void>, okAr: string, okEn: string) => {
    setBusy(true);
    try {
      await fn();
      resetPackagesCache();
      onNotice(tr(okEn, okAr));
      await load();
    } catch (err: any) {
      console.error(err);
      onNotice(`${tr('Failed:', 'تعذر الحفظ:')} ${err?.code || err?.message || ''}`);
    } finally {
      setBusy(false);
    }
  };

  const save = () => {
    if (!editing) return;
    if (!editing.titleAr.trim() || !editing.titleEn.trim()) {
      onNotice(tr('Write the package name in Arabic and English.', 'اكتبي اسم الباقة بالعربية والإنجليزية.'));
      return;
    }
    const p = editing;
    run(
      async () => {
        await packagesService.save(p);
        setEditing(null);
      },
      'تم حفظ الباقة ونشرها في صفحة الأسعار.',
      'Package saved and published on the prices page.'
    );
  };

  const set = (patch: Partial<PricePackage>) => setEditing((e) => (e ? { ...e, ...patch } : e));

  const priceLine = (p: PricePackage) => {
    if (p.free) return tr('Free', 'مجاني');
    const parts: string[] = [];
    if (p.individualPrice !== undefined) parts.push(`${tr('Individual', 'فردي')} ${formatMoney(p.individualPrice, currency)}`);
    if (p.groupPrice !== undefined) parts.push(`${tr('Group', 'مجموعة')} ${formatMoney(p.groupPrice, currency)} ${tr('per student', 'للطالب')}`);
    return `${parts.join(' • ')} ${parts.length ? unitLabel(p.unit, isAr) : ''}`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-luxury font-bold text-xl text-[#0A192F]">{tr('Packages & prices', 'الباقات والأسعار')}</h2>
          <p className="text-xs text-gray-500">
            {tr(
              'Every change appears on the prices page right after saving.',
              'أي تعديل يظهر في صفحة الأسعار مباشرة بعد الحفظ.'
            )}
          </p>
        </div>
        <button
          onClick={() => setEditing(emptyPackage((list[list.length - 1]?.order || 0) + 1))}
          disabled={busy}
          className="px-4 py-2 rounded-xl bg-[#0A192F] text-[#F3E5AB] text-xs font-bold flex items-center gap-2 disabled:opacity-50"
        >
          <Plus className="w-4 h-4" />
          {tr('New package', 'باقة جديدة')}
        </button>
      </div>

      {!loading && list.length === 0 && !editing && (
        <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37]/40 space-y-3 text-center">
          <p className="text-xs text-gray-600">{tr('No packages yet.', 'لا توجد باقات بعد.')}</p>
          <button
            onClick={() => run(() => packagesService.addApproved(), 'أُضيفت الباقات المعتمدة.', 'Approved packages added.')}
            disabled={busy}
            className="px-4 py-2 rounded-xl bg-[#D4AF37] text-[#0A192F] text-xs font-bold inline-flex items-center gap-2 disabled:opacity-50"
          >
            <PackagePlus className="w-4 h-4" />
            {tr('Add the approved packages', 'إضافة الباقات المعتمدة')}
          </button>
        </div>
      )}

      {editing && (
        <div className="p-5 rounded-2xl border-2 border-[#D4AF37]/50 bg-[#FAF8F5] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>{tr('Program', 'البرنامج')}</label>
              <select className={inputCls} value={editing.program} onChange={(e) => set({ program: e.target.value as ProgramId })}>
                {PROGRAMS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {isAr ? p.ar : p.en}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls}>{tr('Price is', 'السعر')}</label>
              <select className={inputCls} value={editing.unit} onChange={(e) => set({ unit: e.target.value as PricePackage['unit'] })}>
                <option value="month">{tr('per month', 'شهريًا')}</option>
                <option value="session">{tr('per session', 'للجلسة')}</option>
                <option value="hour">{tr('per hour', 'للساعة')}</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>{tr('Name (Arabic)', 'الاسم بالعربية')}</label>
              <input className={inputCls} dir="rtl" value={editing.titleAr} onChange={(e) => set({ titleAr: e.target.value })} />
            </div>
            <div>
              <label className={labelCls}>{tr('Name (English)', 'الاسم بالإنجليزية')}</label>
              <input className={inputCls} dir="ltr" value={editing.titleEn} onChange={(e) => set({ titleEn: e.target.value })} />
            </div>
            <div>
              <label className={labelCls}>{tr('Description (Arabic)', 'الوصف بالعربية')}</label>
              <textarea className={inputCls} rows={2} dir="rtl" value={editing.descAr || ''} onChange={(e) => set({ descAr: e.target.value })} />
            </div>
            <div>
              <label className={labelCls}>{tr('Description (English)', 'الوصف بالإنجليزية')}</label>
              <textarea className={inputCls} rows={2} dir="ltr" value={editing.descEn || ''} onChange={(e) => set({ descEn: e.target.value })} />
            </div>
            <div>
              <label className={labelCls}>{tr('Lessons per month (empty = single session)', 'عدد الحصص شهريًا (فارغ = جلسة منفردة)')}</label>
              <input type="number" min="0" className={inputCls} value={editing.sessionsPerMonth ?? ''} onChange={(e) => set({ sessionsPerMonth: numOrUndef(e.target.value) })} />
            </div>
            <div>
              <label className={labelCls}>{tr('Lesson length (minutes)', 'مدة الحصة (دقيقة)')}</label>
              <input type="number" min="0" className={inputCls} value={editing.minutes ?? ''} onChange={(e) => set({ minutes: numOrUndef(e.target.value) })} />
            </div>
            <div>
              <label className={labelCls}>{tr('Individual price (empty = not offered)', 'السعر الفردي (فارغ = غير متاح)')}</label>
              <input type="number" min="0" className={inputCls} value={editing.individualPrice ?? ''} onChange={(e) => set({ individualPrice: numOrUndef(e.target.value) })} />
            </div>
            <div>
              <label className={labelCls}>{tr('Group price per student (empty = not offered)', 'سعر المجموعة للطالب (فارغ = غير متاح)')}</label>
              <input type="number" min="0" className={inputCls} value={editing.groupPrice ?? ''} onChange={(e) => set({ groupPrice: numOrUndef(e.target.value) })} />
            </div>
            <div>
              <label className={labelCls}>{tr('Order on the page', 'الترتيب في الصفحة')}</label>
              <input type="number" className={inputCls} value={editing.order} onChange={(e) => set({ order: Number(e.target.value) || 0 })} />
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-5 text-xs font-bold text-[#0A192F]">
              <label className="flex items-center gap-1.5">
                <input type="checkbox" checked={!!editing.free} onChange={(e) => set({ free: e.target.checked })} />
                {tr('Free', 'مجانية')}
              </label>
              <label className="flex items-center gap-1.5">
                <input type="checkbox" checked={!!editing.featured} onChange={(e) => set({ featured: e.target.checked })} />
                {tr('Most chosen', 'الأكثر اختيارًا')}
              </label>
              <label className="flex items-center gap-1.5">
                <input type="checkbox" checked={editing.active} onChange={(e) => set({ active: e.target.checked })} />
                {tr('Shown on the site', 'ظاهرة في الموقع')}
              </label>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setEditing(null)} disabled={busy} className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-xs font-bold">
              {tr('Cancel', 'إلغاء')}
            </button>
            <button onClick={save} disabled={busy} className="px-4 py-2 rounded-xl bg-[#0A192F] text-[#F3E5AB] text-xs font-bold flex items-center gap-2 disabled:opacity-50">
              <Save className="w-4 h-4" />
              {busy ? tr('Saving...', 'جارٍ الحفظ...') : tr('Save', 'حفظ')}
            </button>
          </div>
        </div>
      )}

      {PROGRAMS.map((prog) => {
        const items = list.filter((p) => p.program === prog.id);
        if (!items.length) return null;
        return (
          <div key={prog.id} className="space-y-2">
            <h3 className="font-bold text-sm text-[#0A192F]">{isAr ? prog.ar : prog.en}</h3>
            {items.map((p) => (
              <div key={p.id} className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${p.active ? 'border-gray-200 bg-white' : 'border-dashed border-gray-300 bg-gray-50 opacity-70'}`}>
                <div className="min-w-0">
                  <div className="font-bold text-sm text-[#0A192F]">
                    {isAr ? p.titleAr : p.titleEn}
                    {p.featured && <span className="ms-2 text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#0A192F]">{tr('Most chosen', 'الأكثر اختيارًا')}</span>}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {[
                      p.sessionsPerMonth ? tr(`${p.sessionsPerMonth} lessons/month`, `${p.sessionsPerMonth} حصص/شهر`) : '',
                      p.minutes ? tr(`${p.minutes} min`, `${p.minutes} دقيقة`) : ''
                    ]
                      .filter(Boolean)
                      .join(' • ')}
                  </div>
                  <div className="text-xs font-bold text-[#AA820A] mt-1">{priceLine(p)}</div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => setEditing({ ...p })} disabled={busy} className="px-3 py-1.5 rounded-lg border border-gray-300 text-xs font-bold">
                    {tr('Edit', 'تعديل')}
                  </button>
                  <button
                    onClick={() => run(() => packagesService.save({ ...p, active: !p.active }), p.active ? 'أُخفيت الباقة.' : 'ظهرت الباقة.', p.active ? 'Package hidden.' : 'Package shown.')}
                    disabled={busy}
                    className="p-1.5 rounded-lg border border-gray-300"
                    title={p.active ? tr('Hide', 'إخفاء') : tr('Show', 'إظهار')}
                  >
                    {p.active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => run(() => packagesService.remove(p.id), 'حُذفت الباقة.', 'Package deleted.')}
                    disabled={busy}
                    className="p-1.5 rounded-lg border border-red-200 text-red-600"
                    title={tr('Delete', 'حذف')}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
