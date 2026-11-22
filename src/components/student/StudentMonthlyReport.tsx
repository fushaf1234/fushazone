import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarCheck, GraduationCap, Sparkles, Star } from 'lucide-react';
import { studentHubService, AttendanceRecord } from '../../services/studentHubService';
import { PASS_MARK, startOfWeek } from '../../services/groupService';

interface Props {
  uid: string;
  isAr: boolean;
  grades: any[];
  pointsLog: any[];
  // لحساب نجم/نجمة الأسبوع والشهر في المجموعة
  groupMembers?: { id: string; fullName?: string }[];
  groupLog?: { studentId: string; amount: any; timestamp: string }[];
}

// "2026-11-20" تُقرأ بالتوقيت المحلي، وغيرها كتاريخ كامل
const toDate = (v: any): Date | null => {
  if (!v) return null;
  const s = String(v);
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(s);
  return isNaN(d.getTime()) ? null : d;
};

// التقرير الأسبوعي والشهري: كل الأرقام من سجلات الطالب الحقيقية، ولا يظهر رقم لا توجد له بيانات
export const StudentMonthlyReport: React.FC<Props> = ({ uid, isAr, grades, pointsLog, groupMembers = [], groupLog = [] }) => {
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [mode, setMode] = useState<'week' | 'month'>('week');
  const [offset, setOffset] = useState(0); // 0 = الحالي، -1 = السابق...

  useEffect(() => {
    studentHubService
      .getAttendanceFor(uid)
      .then(setAttendance)
      .catch((err) => console.error('Error loading attendance:', err));
  }, [uid]);

  const now = new Date();
  let from: Date;
  let to: Date;
  let label: string;
  if (mode === 'month') {
    from = new Date(now.getFullYear(), now.getMonth() + offset, 1);
    to = new Date(from.getFullYear(), from.getMonth() + 1, 1);
    label = from.toLocaleDateString(isAr ? 'ar' : 'en', { month: 'long', year: 'numeric' });
  } else {
    from = startOfWeek(now);
    from.setDate(from.getDate() + offset * 7);
    to = new Date(from);
    to.setDate(to.getDate() + 7);
    const last = new Date(to);
    last.setDate(last.getDate() - 1);
    const f = (d: Date) => d.toLocaleDateString(isAr ? 'ar' : 'en', { day: 'numeric', month: 'short' });
    label = `${f(from)} – ${f(last)}`;
  }
  const inRange = (v: any) => {
    const d = toDate(v);
    return !!d && d >= from && d < to;
  };

  const att = attendance.filter((a) => inRange(a.date));
  const attPresent = att.filter((a) => a.present).length;

  // الاختبارات = درجات المعلم (بالنسبة المئوية)
  const scores = grades.filter((g) => inRange(g.date)).map((g) => Number(g.score) || 0);
  const grAvg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : undefined;
  const grPassed = scores.filter((x) => x >= PASS_MARK).length;

  const pts = pointsLog.filter((p) => inRange(p.timestamp));
  const ptsTotal = pts.reduce((a, p) => a + (Number(p.amount) || 0), 0);

  // نجم/نجمة المجموعة في هذه الفترة: الأعلى نقاطًا
  const totals = new Map<string, number>();
  groupLog.filter((l) => inRange(l.timestamp)).forEach((l) => totals.set(l.studentId, (totals.get(l.studentId) || 0) + (Number(l.amount) || 0)));
  let star: { name: string; pts: number; me: boolean } | null = null;
  totals.forEach((v, id) => {
    const m = groupMembers.find((x) => x.id === id);
    if (m && v > 0 && (!star || v > star.pts)) star = { name: m.fullName || '', pts: v, me: id === uid };
  });
  const starRow = star as { name: string; pts: number; me: boolean } | null;

  const pct = (a: number, b: number) => (b > 0 ? Math.round((a / b) * 100) : undefined);
  const noData = att.length === 0 && scores.length === 0 && pts.length === 0;

  const Card = ({ icon: Icon, title, main, sub }: { icon: any; title: string; main: string; sub?: string }) => (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
      <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
        <Icon className="w-3.5 h-3.5 text-[#C9A04F]" />
        <span>{title}</span>
      </div>
      <div className="font-bold text-lg text-[#F3E3B8]">{main}</div>
      {sub && <div className="text-[11px] text-gray-400">{sub}</div>}
    </div>
  );

  const dash = '—';
  const isWeek = mode === 'week';
  const switchTo = (m: 'week' | 'month') => {
    setMode(m);
    setOffset(0);
  };

  return (
    <div className="bg-gradient-to-br from-[#0B3B2C] via-[#11503A] to-[#0B3B2C] text-white rounded-3xl p-6 border border-[#C9A04F]/50 shadow-xl space-y-4">
      <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-white/10">
        {(['week', 'month'] as const).map((m) => (
          <button
            key={m}
            onClick={() => switchTo(m)}
            className={`py-1.5 rounded-lg text-xs font-bold ${mode === m ? 'bg-[#C9A04F] text-[#0B3B2C]' : 'text-gray-300'}`}
          >
            {m === 'week' ? (isAr ? 'التقرير الأسبوعي' : 'Weekly') : isAr ? 'التقرير الشهري' : 'Monthly'}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2">
        <button onClick={() => setOffset((o) => o - 1)} className="p-1.5 rounded-lg hover:bg-white/10" title={isAr ? 'السابق' : 'Previous'}>
          {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
        <div className="text-center">
          <h3 className="font-serif-luxury font-bold text-lg text-[#F3E3B8]">
            {isWeek ? (offset === 0 ? (isAr ? 'هذا الأسبوع' : 'This week') : isAr ? 'أسبوع سابق' : 'Past week') : isAr ? 'تقرير الشهر' : 'Month report'}
          </h3>
          <span className="text-xs text-gray-300">{label}</span>
        </div>
        <button
          onClick={() => setOffset((o) => Math.min(0, o + 1))}
          disabled={offset === 0}
          className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30"
          title={isAr ? 'التالي' : 'Next'}
        >
          {isAr ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </div>

      {/* نجم/نجمة الأسبوع أو الشهر */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-[#C9A04F]/25 to-transparent border border-[#C9A04F]/50 flex items-center gap-3">
        <Star className="w-7 h-7 text-[#C9A04F] fill-[#C9A04F] shrink-0" />
        <div className="min-w-0">
          <span className="text-[11px] text-gray-300 block">
            {isWeek ? (isAr ? '{نجم|نجمة} الأسبوع في المجموعة' : 'Star of the week') : isAr ? '{نجم|نجمة} الشهر في المجموعة' : 'Star of the month'}
          </span>
          <span className="font-bold text-sm text-[#F3E3B8] block truncate">
            {starRow ? `${starRow.name}${starRow.me ? (isAr ? ' (أنت) 🎉' : ' (you) 🎉') : ''}` : dash}
          </span>
        </div>
        {starRow && (
          <span className="ms-auto text-xs font-bold text-[#C9A04F] whitespace-nowrap">
            {starRow.pts} {isAr ? 'نقطة' : 'pts'}
          </span>
        )}
      </div>

      {noData ? (
        <p className="text-xs text-gray-300 text-center py-4">
          {isWeek ? (isAr ? 'لا توجد بيانات مسجلة لهذا الأسبوع بعد.' : 'Nothing recorded for this week yet.') : isAr ? 'لا توجد بيانات مسجلة لهذا الشهر بعد.' : 'Nothing recorded for this month yet.'}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <Card
            icon={CalendarCheck}
            title={isAr ? 'الالتزام بالحضور' : 'Attendance'}
            main={att.length ? `${pct(attPresent, att.length)}%` : dash}
            sub={att.length ? (isAr ? `${attPresent} من ${att.length} حصة` : `${attPresent} of ${att.length} lessons`) : undefined}
          />
          <Card
            icon={GraduationCap}
            title={isAr ? 'درجات الاختبارات' : 'Test scores'}
            main={grAvg !== undefined ? `${grAvg}%` : dash}
            sub={
              scores.length
                ? isAr ? `نجاح في ${grPassed} من ${scores.length}` : `Passed ${grPassed} of ${scores.length}`
                : undefined
            }
          />
          <Card
            icon={Sparkles}
            title={isWeek ? (isAr ? 'نقاط الأسبوع' : 'Week points') : isAr ? 'نقاط الشهر' : 'Month points'}
            main={pts.length ? String(ptsTotal) : dash}
            sub={pts.length ? (isAr ? `${pts.length} تقييم` : `${pts.length} ratings`) : undefined}
          />
        </div>
      )}
    </div>
  );
};
