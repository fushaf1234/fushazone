import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePackages } from '../hooks/usePackages';
import { useAcademySettings, formatMoney } from '../hooks/useAcademySettings';
import { PROGRAMS, ProgramId, PricePackage, unitLabel, billingLabel } from '../services/packagesService';
import { Clock, CalendarDays, User, Users, GraduationCap, Gift } from 'lucide-react';

interface PricingPageProps {
  navigate: (route: string, state?: any) => void;
}

// صفحة الأسعار: كل الباقات من لوحة الإدارة (لا أسعار ثابتة في الكود)
export const PricingPage: React.FC<PricingPageProps> = ({ navigate }) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const tr = (en: string, ar: string) => (isAr ? ar : en);
  const { packages, loading, locked } = usePackages();
  const { currency } = useAcademySettings();
  const [filter, setFilter] = useState<'ALL' | ProgramId>('ALL');

  const programs = PROGRAMS.filter((p) => packages.some((x) => x.program === p.id));
  const shown = packages.filter((p) => filter === 'ALL' || p.program === filter);

  const PriceRow = ({ icon: Icon, label, amount, original, unit, dark }: { icon: any; label: string; amount: number; original?: number; unit: string; dark: boolean }) => (
    <div className="flex items-center justify-between gap-3">
      <span className={`flex items-center gap-1.5 text-xs ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
        <Icon className="w-4 h-4 text-[#C9A04F]" />
        {label}
      </span>
      <span className="flex items-baseline gap-1">
        {original !== undefined && original > amount && (
          <span className={`text-sm line-through ${dark ? 'text-gray-400' : 'text-gray-400'}`} dir="ltr">
            {formatMoney(original, currency)}
          </span>
        )}
        <span className={`font-bold text-2xl ${dark ? 'text-white' : 'text-[#0B3B2C]'}`} dir="ltr">
          {formatMoney(amount, currency)}
        </span>
        <span className={`text-[11px] ${dark ? 'text-gray-300' : 'text-gray-500'}`}>{unit}</span>
      </span>
    </div>
  );

  // بطاقة العرض الحالي: ذهبية بكتابة خضراء وبيضاء وحمراء، وعليها هدية
  const OfferCard = ({ p }: { p: PricePackage }) => {
    const unit = unitLabel(p.unit, isAr);
    const badge = isAr ? p.offerBadgeAr : p.offerBadgeEn;
    const Row = ({ icon: Icon, label, now, was }: { icon: any; label: string; now: number; was?: number }) => (
      <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-white/45">
        <span className="flex items-center gap-1.5 text-xs font-bold text-[#0B3B2C]">
          <Icon className="w-4 h-4 text-[#0B3B2C]" />
          {label}
        </span>
        <span className="flex items-baseline gap-1.5" dir="ltr">
          {was !== undefined && was > now && <span className="text-sm font-bold line-through text-red-600">{formatMoney(was, currency)}</span>}
          <span className="font-extrabold text-2xl text-[#0B3B2C]">{formatMoney(now, currency)}</span>
          <span className="text-[11px] text-[#0B3B2C]/80">{unit}</span>
        </span>
      </div>
    );
    return (
      <div className="relative rounded-3xl p-7 flex flex-col justify-between shadow-2xl border-2 border-[#0B3B2C]/30 bg-gradient-to-br from-[#E6C67E] via-[#C9A04F] to-[#B08A3A] ring-4 ring-[#C9A04F]/30">
        <div className="absolute -top-5 end-6 w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg rotate-6">
          <Gift className="w-6 h-6" />
        </div>
        {badge && (
          <span className="absolute -top-3 start-6 px-3 py-1 rounded-lg bg-red-600 text-white text-xs font-extrabold shadow">{badge}</span>
        )}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0B3B2C] text-white text-[11px] font-bold">
              <Gift className="w-3.5 h-3.5 text-[#E6C67E]" />
              {tr('Current offer', 'العرض الحالي')}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#0B3B2C]/40 text-[#0B3B2C]">{billingLabel(p, isAr)}</span>
          </div>
          <h2 className="font-serif-luxury font-bold text-2xl text-[#0B3B2C]">{isAr ? p.titleAr : p.titleEn}</h2>
          <div className="flex flex-wrap gap-3 text-xs font-bold text-[#0B3B2C]">
            {!!p.sessionsPerMonth && (
              <span className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                {tr(`${p.sessionsPerMonth} lessons / month`, `${p.sessionsPerMonth} حصص / شهر`)}
              </span>
            )}
            {!!p.minutes && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {tr(`${p.minutes} min per lesson`, `${p.minutes} دقيقة للحصة`)}
              </span>
            )}
          </div>
          {(isAr ? p.descAr : p.descEn) && <p className="text-sm leading-relaxed text-[#0B3B2C] font-medium">{isAr ? p.descAr : p.descEn}</p>}
        </div>
        <div className="mt-6 pt-5 border-t border-[#0B3B2C]/20 space-y-2">
          {p.individualPrice !== undefined && <Row icon={User} label={tr('Individual', 'فردي')} now={p.individualPrice} was={p.individualOriginal} />}
          {p.groupPrice !== undefined && <Row icon={Users} label={tr('Group (per student)', 'مجموعة (للطالب)')} now={p.groupPrice} was={p.groupOriginal} />}
          <button
            onClick={() => navigate('register')}
            className="w-full mt-2 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all bg-[#0B3B2C] text-white shadow-lg"
          >
            <Gift className="w-4 h-4 text-[#E6C67E]" />
            {tr('Get the offer', 'احصل على العرض')}
          </button>
        </div>
      </div>
    );
  };

  const Card = ({ p }: { p: PricePackage }) => {
    const dark = !!p.featured;
    const unit = unitLabel(p.unit, isAr);
    return (
      <div className={`relative rounded-3xl p-7 flex flex-col justify-between shadow-lg border-2 ${dark ? 'bg-[#0B3B2C] border-[#C9A04F] text-white' : 'bg-white border-[#C9A04F]/30'}`}>
        {(p.featured || (isAr ? p.offerBadgeAr : p.offerBadgeEn)) && (
          <div className="absolute -top-3 start-6 flex gap-2">
            {(isAr ? p.offerBadgeAr : p.offerBadgeEn) && (
              <span className="px-3 py-1 rounded-lg bg-red-600 text-white text-[11px] font-extrabold shadow">{isAr ? p.offerBadgeAr : p.offerBadgeEn}</span>
            )}
            {p.featured && !(isAr ? p.offerBadgeAr : p.offerBadgeEn) && (
              <span className="px-3 py-1 rounded-lg bg-[#C9A04F] text-[#0B3B2C] text-[11px] font-bold">{tr('Most chosen', 'الأكثر اختيارًا')}</span>
            )}
          </div>
        )}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[11px] font-bold ${dark ? 'text-[#F3E3B8]' : 'text-[#9A772E]'}`}>
              {isAr ? PROGRAMS.find((x) => x.id === p.program)?.ar : PROGRAMS.find((x) => x.id === p.program)?.en}
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${dark ? 'border-[#C9A04F]/60 text-[#C9A04F]' : 'border-[#0B3B2C]/30 text-[#0B3B2C] bg-[#FAF7EF]'}`}>
              {billingLabel(p, isAr)}
            </span>
          </div>
          <h2 className={`font-serif-luxury font-bold text-xl ${dark ? 'text-[#F3E3B8]' : 'text-[#0B3B2C]'}`}>{isAr ? p.titleAr : p.titleEn}</h2>
          <div className={`flex flex-wrap gap-3 text-xs font-bold ${dark ? 'text-[#C9A04F]' : 'text-[#9A772E]'}`}>
            {!!p.sessionsPerMonth && (
              <span className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                {tr(`${p.sessionsPerMonth} lessons / month`, `${p.sessionsPerMonth} حصص / شهر`)}
              </span>
            )}
            {!!p.minutes && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {tr(`${p.minutes} min per lesson`, `${p.minutes} دقيقة للحصة`)}
              </span>
            )}
          </div>
          {(isAr ? p.descAr : p.descEn) && (
            <p className={`text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{isAr ? p.descAr : p.descEn}</p>
          )}
        </div>

        <div className={`mt-6 pt-5 border-t space-y-3 ${dark ? 'border-white/15' : 'border-gray-200'}`}>
          {p.free ? (
            <div className={`font-bold text-2xl ${dark ? 'text-white' : 'text-[#0B3B2C]'}`}>{tr('Free', 'مجانًا')}</div>
          ) : (
            <>
              {p.individualPrice !== undefined && (
                <PriceRow icon={User} label={tr('Individual', 'فردي')} amount={p.individualPrice} original={p.individualOriginal} unit={unit} dark={dark} />
              )}
              {p.groupPrice !== undefined && (
                <PriceRow icon={Users} label={tr('Group (per student)', 'مجموعة (للطالب)')} amount={p.groupPrice} original={p.groupOriginal} unit={unit} dark={dark} />
              )}
            </>
          )}
          <button
            onClick={() => navigate('register')}
            className={`w-full mt-2 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all ${
              dark ? 'bg-[#C9A04F] text-[#0B3B2C]' : 'bg-[#0B3B2C] text-[#F3E3B8]'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            {p.free ? tr('Book now', 'احجز الآن') : tr('Enroll now', 'سجّل الآن')}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF7EF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#0B3B2C]">{tr('Packages & prices', 'الباقات والأسعار')}</h1>
          <p className="text-base text-gray-600 mt-4 leading-relaxed">
            {tr(
              'Live lessons with native Arabic-speaking teachers, individually or in groups.',
              'حصص مباشرة مع معلمين ناطقين بالعربية، فردية أو في مجموعات.'
            )}
          </p>
        </div>

        {locked && (
          <div className="mb-6 p-8 rounded-3xl bg-gradient-to-br from-[#0B3B2C] to-[#11503A] text-center space-y-3 border-2 border-[#C9A04F]/50 shadow-lg">
            <div className="text-3xl">🔒</div>
            <h3 className="font-serif-luxury font-bold text-xl text-[#F3E3B8]">{tr('Prices are for registered members', 'الأسعار متاحة للمسجّلين')}</h3>
            <p className="text-sm text-gray-300">{tr('Sign up free in one click to see tuition and offers.', '{سجّل|سجّلي} مجانًا بضغطة واحدة {لترى|لتري} الرسوم والعروض.')}</p>
            <button onClick={() => navigate('join-us')} className="ez-float-glow px-8 py-3 rounded-xl bg-[#C9A04F] text-[#0B3B2C] font-bold text-sm">
              {tr('Sign up free to see prices', '{سجّل|سجّلي} مجانًا لرؤية الأسعار')}
            </button>
          </div>
        )}

        {!locked && !loading && packages.length === 0 && (
          <div className="mb-6 p-8 rounded-3xl bg-white border border-gray-200 text-center text-sm text-gray-500">
            {tr('Prices are not published at the moment. Please contact us.', 'الأسعار غير منشورة حاليًا. تواصل معنا لمعرفة الرسوم.')}
          </div>
        )}

        {programs.length > 1 && (
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {(['ALL', ...programs.map((p) => p.id)] as ('ALL' | ProgramId)[]).map((id) => (
              <button
                key={id}
                onClick={() => setFilter(id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === id ? 'bg-[#C9A04F] text-[#0B3B2C] shadow-sm' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {id === 'ALL' ? tr('All', 'الكل') : isAr ? PROGRAMS.find((p) => p.id === id)?.ar : PROGRAMS.find((p) => p.id === id)?.en}
              </button>
            ))}
          </div>
        )}

        <div className={`grid gap-8 ${shown.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {shown.map((p) => (p.offer ? <OfferCard key={p.id} p={p} /> : <Card key={p.id} p={p} />))}
        </div>
      </div>
    </div>
  );
};
