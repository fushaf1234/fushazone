import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, Copy, Link2, RotateCcw, Save, Send } from 'lucide-react';
import { QURAN_KIDS_SURAHS } from '../../data/quranKidsSurahs';
import { quranKidsLink, quranKidsService, SurahRange } from '../../services/quranKidsService';

interface Props {
  isAr: boolean;
  onNotice: (message: string) => void;
}

const inputCls = 'w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white';
const labelCls = 'text-[11px] font-bold text-gray-500 block mb-1';
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, Math.round(v) || min));

// دروس القرآن للأطفال: مقدار تمارين كل سورة لجميع الطلاب، ورابط خاص لطالب بمقدار مختلف
export const QuranKidsManager: React.FC<Props> = ({ isAr, onNotice }) => {
  const tr = (en: string, ar: string) => (isAr ? ar : en);
  const [ranges, setRanges] = useState<Record<number, SurahRange>>({});
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

  // إعداد سورة لجميع الطلاب
  const [surah, setSurah] = useState(78);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(5);

  // رابط لطالب
  const [lSurah, setLSurah] = useState(78);
  const [lFrom, setLFrom] = useState(1);
  const [lTo, setLTo] = useState(5);
  const [lName, setLName] = useState('');

  const info = (n: number) => QURAN_KIDS_SURAHS.find((s) => s[0] === n) || QURAN_KIDS_SURAHS[0];
  const label = (n: number) => {
    const s = info(n);
    return `${s[0]}. ${isAr ? s[1] : s[2]} (${s[3]} ${tr('verses', 'آية')})`;
  };

  const load = async () => {
    setLoading(true);
    try {
      setRanges(await quranKidsService.listRanges());
    } catch {
      onNotice(tr('Could not load the settings.', 'تعذّر تحميل الإعدادات.'));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // عند اختيار سورة: نعرض مقدارها الحالي
  useEffect(() => {
    const r = ranges[surah];
    if (r) {
      setFrom(r.from);
      setTo(r.to);
    } else {
      setFrom(1);
      setTo(info(surah)[3]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surah, ranges]);

  const save = async () => {
    const count = info(surah)[3];
    const f = clamp(from, 1, count);
    const t = clamp(to, f, count);
    setBusy(true);
    try {
      if (f === 1 && t === count) await quranKidsService.clearRange(surah);
      else await quranKidsService.setRange(surah, f, t);
      onNotice(tr('Saved. Students now see these verses.', 'تم الحفظ، والطلاب يرون هذه الآيات الآن.'));
      await load();
    } catch {
      onNotice(tr('Save failed. Check the Firestore rules.', 'تعذّر الحفظ. تأكد من نشر قواعد Firestore.'));
    } finally {
      setBusy(false);
    }
  };

  const reset = async (n: number) => {
    setBusy(true);
    try {
      await quranKidsService.clearRange(n);
      onNotice(tr('The whole surah is shown now.', 'أصبحت السورة كاملة ظاهرة.'));
      await load();
    } catch {
      onNotice(tr('Could not reset.', 'تعذّرت الإعادة.'));
    } finally {
      setBusy(false);
    }
  };

  const lCount = info(lSurah)[3];
  const link = useMemo(() => {
    const f = clamp(lFrom, 1, lCount);
    const t = clamp(lTo, f, lCount);
    return quranKidsLink(lSurah, f, t, lName);
  }, [lSurah, lFrom, lTo, lName, lCount]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      onNotice(tr('Link copied.', 'تم نسخ الرابط.'));
    } catch {
      onNotice(link);
    }
  };
  const whatsapp = () => {
    const s = info(lSurah);
    const text = isAr ? `درسك في سورة ${s[1]}: ${link}` : `Your lesson in Surat ${s[2]}: ${link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  const setList = Object.keys(ranges).map(Number).sort((a, b) => a - b);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-5 border border-[#C9A04F]/30 shadow-sm space-y-2">
        <h2 className="font-bold text-[#0B3B2C] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#C9A04F]" />
          {tr("Kids' Qur'an lessons", 'دروس القرآن للأطفال')}
        </h2>
        <p className="text-xs text-gray-600 leading-relaxed">
          {tr(
            'Exercises cover every verse of the surah. Here you choose how many verses students see. Students can still press "I want all the exercises" to practice the whole surah.',
            'التمارين تشمل كل آيات السورة. هنا يُحدَّد مقدار الآيات الذي يراه الطلاب، ويبقى للطالب زر «أريد كل تمارين السورة» إن أراد التدرّب على السورة كاملة.'
          )}
        </p>
        <a href="/quran-kids/" target="_blank" rel="noopener" className="inline-block text-xs font-bold text-[#9A772E] underline">
          {tr('Open the lessons page', 'فتح صفحة الدروس')}
        </a>
      </div>

      {/* مقدار السورة لجميع الطلاب */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-[#0B3B2C]">{tr('1) Verses for all students (per surah)', '١) الآيات لجميع الطلاب (لكل سورة)')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
          <div className="sm:col-span-2">
            <label className={labelCls}>{tr('Surah', 'السورة')}</label>
            <select className={inputCls} value={surah} onChange={(e) => setSurah(Number(e.target.value))}>
              {QURAN_KIDS_SURAHS.map((s) => (
                <option key={s[0]} value={s[0]}>
                  {label(s[0])}
                  {ranges[s[0]] ? ` ✓` : ''}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>{tr('From verse', 'من الآية')}</label>
            <input type="number" min={1} max={info(surah)[3]} className={inputCls} value={from} onChange={(e) => setFrom(Number(e.target.value))} />
          </div>
          <div>
            <label className={labelCls}>{tr('To verse', 'إلى الآية')}</label>
            <input type="number" min={1} max={info(surah)[3]} className={inputCls} value={to} onChange={(e) => setTo(Number(e.target.value))} />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            disabled={busy}
            onClick={save}
            className="px-4 py-2 rounded-xl bg-[#0B3B2C] text-[#F3E3B8] text-xs font-bold flex items-center gap-1 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {tr('Save', 'حفظ')}
          </button>
          <button
            disabled={busy}
            onClick={() => reset(surah)}
            className="px-4 py-2 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 flex items-center gap-1 disabled:opacity-50"
          >
            <RotateCcw className="w-4 h-4" />
            {tr('Whole surah', 'السورة كاملة')}
          </button>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <p className="text-[11px] font-bold text-gray-500 mb-2">{tr('Surahs with a set range', 'السور التي لها مقدار محدد')}</p>
          {loading ? (
            <p className="text-xs text-gray-400">{tr('Loading…', 'جارٍ التحميل…')}</p>
          ) : setList.length === 0 ? (
            <p className="text-xs text-gray-400">{tr('None: every surah shows all its verses.', 'لا يوجد: كل السور تظهر بكامل آياتها.')}</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {setList.map((n) => (
                <span key={n} className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FAF7EF] border border-[#C9A04F]/40 text-[#0B3B2C] flex items-center gap-2">
                  <button onClick={() => setSurah(n)} className="hover:underline">
                    {isAr ? info(n)[1] : info(n)[2]}: {ranges[n].from}–{ranges[n].to}
                  </button>
                  <button disabled={busy} onClick={() => reset(n)} title={tr('Whole surah', 'السورة كاملة')} className="text-gray-400 hover:text-red-600">
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* رابط خاص لطالب */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-[#0B3B2C] flex items-center gap-2">
          <Link2 className="w-4 h-4 text-[#C9A04F]" />
          {tr('2) Private link for one student', '٢) رابط خاص لطالب')}
        </h3>
        <p className="text-xs text-gray-600">
          {tr(
            'The student opens the link and sees only these verses (this overrides the surah setting).',
            'يفتح الطالب الرابط فيرى هذه الآيات فقط، ويتقدّم هذا على مقدار السورة العام.'
          )}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
          <div className="sm:col-span-2">
            <label className={labelCls}>{tr('Surah', 'السورة')}</label>
            <select
              className={inputCls}
              value={lSurah}
              onChange={(e) => {
                const n = Number(e.target.value);
                setLSurah(n);
                setLFrom(1);
                setLTo(Math.min(5, info(n)[3]));
              }}
            >
              {QURAN_KIDS_SURAHS.map((s) => (
                <option key={s[0]} value={s[0]}>
                  {label(s[0])}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>{tr('From verse', 'من الآية')}</label>
            <input type="number" min={1} max={lCount} className={inputCls} value={lFrom} onChange={(e) => setLFrom(Number(e.target.value))} />
          </div>
          <div>
            <label className={labelCls}>{tr('To verse', 'إلى الآية')}</label>
            <input type="number" min={1} max={lCount} className={inputCls} value={lTo} onChange={(e) => setLTo(Number(e.target.value))} />
          </div>
          <div className="sm:col-span-4">
            <label className={labelCls}>{tr("Student's name (optional)", 'اسم الطالب (اختياري)')}</label>
            <input className={inputCls} value={lName} maxLength={40} onChange={(e) => setLName(e.target.value)} />
          </div>
        </div>
        <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-[11px] text-gray-700 break-all" dir="ltr">
          {link}
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={copy} className="px-4 py-2 rounded-xl bg-[#0B3B2C] text-[#F3E3B8] text-xs font-bold flex items-center gap-1">
            <Copy className="w-4 h-4" />
            {tr('Copy link', 'نسخ الرابط')}
          </button>
          <button onClick={whatsapp} className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-1">
            <Send className="w-4 h-4" />
            {tr('Send on WhatsApp', 'إرسال عبر واتساب')}
          </button>
          <a href={link} target="_blank" rel="noopener" className="px-4 py-2 rounded-xl border border-gray-300 text-xs font-bold text-gray-700">
            {tr('Preview', 'معاينة')}
          </a>
        </div>
      </div>
    </div>
  );
};
