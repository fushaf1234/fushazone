import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

// زر كبير: «استخدم المنهج مجانًا» يفتح صفحة الدروس التفاعلية المتاحة مجانًا
export const FreeCurriculumButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  return (
    <div className={`flex justify-center px-4 ${className}`}>
      <a
        href="/quran-kids/"
        className="group relative w-full max-w-3xl overflow-hidden rounded-[2rem] p-[3px] shadow-[0_18px_45px_rgba(201,160,79,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01]"
        style={{ background: 'linear-gradient(120deg, #F3D98B, #C9A04F 35%, #DC2626 65%, #F3D98B)' }}
      >
        <span className="relative flex flex-col sm:flex-row items-center justify-center gap-4 rounded-[1.85rem] bg-gradient-to-br from-[#0B3B2C] via-[#11503A] to-[#0B3B2C] px-6 py-7 sm:py-9 text-center">
          <span className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 15% 20%, #F3D98B 0 3px, transparent 4px), radial-gradient(circle at 85% 70%, #F3D98B 0 3px, transparent 4px), radial-gradient(circle at 60% 15%, #fff 0 2px, transparent 3px)' }} />
          <span className="text-5xl sm:text-6xl drop-shadow-lg animate-bounce">🎁</span>
          <span className="flex flex-col items-center gap-1">
            <span className="font-serif-luxury font-extrabold text-3xl sm:text-5xl leading-tight bg-gradient-to-r from-[#F3D98B] via-[#FFF7DC] to-[#F3D98B] bg-clip-text text-transparent">
              {isAr ? 'استخدم المنهج مجانًا' : 'Use the Curriculum Free'}
            </span>
            <span className="text-sm sm:text-base text-[#F3E3B8]/90 font-semibold">
              {isAr ? 'سور من جزء عمّ ودروس تجويد تفاعلية — ابدأ الآن بلا تسجيل' : "Juz' Amma surahs and interactive tajweed lessons — start now, no sign-up"}
            </span>
          </span>
          <span className="rounded-full bg-[#C9A04F] px-5 py-2 text-sm sm:text-base font-extrabold text-[#0B3B2C] shadow-lg group-hover:bg-[#F3D98B] transition-colors">
            {isAr ? 'ابدأ ←' : 'Start →'}
          </span>
        </span>
      </a>
    </div>
  );
};
