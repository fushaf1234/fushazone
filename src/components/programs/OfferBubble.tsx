import React, { useEffect, useState } from 'react';
import { Gift, X, ArrowLeft, User, Users } from 'lucide-react';
import { usePackages } from '../../hooks/usePackages';
import { useAcademySettings, formatMoney } from '../../hooks/useAcademySettings';
import { unitLabel } from '../../services/packagesService';

interface Props {
  language: string;
  navigate: (route: string) => void;
}

const KEY = 'ez_offer_bubble_closed';

/** فقاعة «العرض الحالي» الجانبية: تعرض الباقة المعلَّمة «عرض حالي» من لوحة الإدارة */
export const OfferBubble: React.FC<Props> = ({ language, navigate }) => {
  const { packages } = usePackages();
  const { currency } = useAcademySettings();
  const offer = packages.find((p) => p.offer);
  const ar = language === 'ar';
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let closed = false;
    try { closed = sessionStorage.getItem(KEY) === '1'; } catch { /* ignore */ }
    if (closed) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!offer) return null;

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem(KEY, '1'); } catch { /* ignore */ }
  };
  const side = ar ? 'right-0' : 'left-0';
  const badge = ar ? offer.offerBadgeAr : offer.offerBadgeEn;
  const unit = unitLabel(offer.unit, ar);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className={`fixed ${side} top-1/3 z-[55] bg-gradient-to-b from-[#C9A04F] to-[#9A772E] text-[#0B3B2C] font-extrabold text-xs px-2 py-3 shadow-xl border border-[#0B3B2C]/20 flex flex-col items-center gap-1 ${ar ? 'rounded-l-xl' : 'rounded-r-xl'}`}
        style={{ writingMode: 'vertical-rl' }}
      >
        <Gift className="w-4 h-4" style={{ writingMode: 'horizontal-tb' }} />
        {ar ? 'العرض الحالي' : 'Current offer'}
      </button>
    );
  }

  const Row = ({ icon: Icon, label, now, was }: { icon: any; label: string; now: number; was?: number }) => (
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-1 text-xs text-gray-300">
        <Icon className="w-3.5 h-3.5 text-[#C9A04F]" />
        {label}
      </span>
      <span className="flex items-baseline gap-1.5" dir="ltr">
        {was !== undefined && was > now && <span className="text-xs line-through text-gray-400">{formatMoney(was, currency)}</span>}
        <span className="text-lg font-extrabold text-[#F3E3B8]">{formatMoney(now, currency)}</span>
      </span>
    </div>
  );

  return (
    <div
      dir={ar ? 'rtl' : 'ltr'}
      className={`fixed ${ar ? 'right-3' : 'left-3'} top-1/4 z-[55] w-64 bg-[#0B3B2C] text-white rounded-2xl border-2 border-[#C9A04F] shadow-2xl p-4`}
    >
      <button onClick={close} className={`absolute top-2 ${ar ? 'left-2' : 'right-2'} text-gray-300 hover:text-white`} aria-label="close">
        <X className="w-4 h-4" />
      </button>
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C9A04F] text-[#0B3B2C] text-[11px] font-extrabold">
          <Gift className="w-3.5 h-3.5" />
          {ar ? 'العرض الحالي' : 'Current offer'}
        </span>
        {badge && <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[11px] font-extrabold">{badge}</span>}
      </div>
      <h4 className="font-bold text-base text-[#F3E3B8] leading-snug">{ar ? offer.titleAr : offer.titleEn}</h4>
      {(ar ? offer.descAr : offer.descEn) && <p className="text-xs text-gray-200 mt-1 leading-relaxed">{ar ? offer.descAr : offer.descEn}</p>}
      <div className="mt-3 space-y-1.5">
        {offer.individualPrice !== undefined && <Row icon={User} label={ar ? 'فردي' : 'Individual'} now={offer.individualPrice} was={offer.individualOriginal} />}
        {offer.groupPrice !== undefined && <Row icon={Users} label={ar ? 'مجموعة (للطالب)' : 'Group (per student)'} now={offer.groupPrice} was={offer.groupOriginal} />}
        <p className="text-[10px] text-gray-400 text-end">{unit}</p>
      </div>
      <button
        onClick={() => { close(); navigate('pricing'); }}
        className="mt-2 w-full py-2 rounded-xl bg-gradient-to-r from-[#C9A04F] to-[#F3E3B8] text-[#0B3B2C] font-bold text-sm flex items-center justify-center gap-1.5"
      >
        {ar ? 'تفاصيل العرض' : 'Offer details'}
        <ArrowLeft className={`w-4 h-4 ${ar ? '' : 'rotate-180'}`} />
      </button>
    </div>
  );
};
