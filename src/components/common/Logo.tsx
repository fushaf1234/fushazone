import React from 'react';

export const OFFICIAL_LOGO_IMAGE_PATH = '/brand/fusha-zone-logo.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  onClick?: () => void;
}

/** الشعار الرسمي لـ Fusha Zone (الدائري الأخضر والذهبي) */
export const FushaZoneEmblem: React.FC<{
  sizeClass?: string;
  glow?: boolean;
  className?: string;
  showBevelBorder?: boolean;
}> = ({ sizeClass = 'w-11 h-11', glow = true, className = '' }) => (
  <div className={`relative ${sizeClass} flex-shrink-0 flex items-center justify-center ${className}`}>
    {glow && <div className="absolute inset-0 rounded-full bg-[#C9A24D]/25 blur-md scale-110 pointer-events-none" />}
    <img
      src={OFFICIAL_LOGO_IMAGE_PATH}
      alt="Fusha Zone"
      className="relative w-full h-full object-contain select-none pointer-events-none"
      loading="eager"
    />
  </div>
);

const SLOGAN = 'LEARN ARABIC. SPEAK CONFIDENTLY.';

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', size = 'md', showSlogan = true, onClick }) => {
  const isDarkBg = variant === 'dark' || variant === 'footer';

  const sizeMap = {
    sm: { emblem: 'w-9 h-9', title: 'text-lg', slogan: 'text-[7.5px]', gap: 'gap-2.5' },
    md: { emblem: 'w-11 h-11 sm:w-12 sm:h-12', title: 'text-xl', slogan: 'text-[8px]', gap: 'gap-3' },
    lg: { emblem: 'w-16 h-16', title: 'text-2xl', slogan: 'text-[10px]', gap: 'gap-3.5' },
    xl: { emblem: 'w-24 h-24', title: 'text-3xl', slogan: 'text-xs', gap: 'gap-4' }
  }[size];

  if (variant === 'badge') {
    return (
      <div onClick={onClick} className={`inline-flex flex-col items-center text-center select-none group ${onClick ? 'cursor-pointer' : ''} ${className}`}>
        <div className="transform group-hover:scale-105 transition-all duration-300">
          <FushaZoneEmblem sizeClass={sizeMap.emblem} glow />
        </div>
        <div className="mt-2 flex flex-col items-center">
          <span className="font-serif-luxury font-bold tracking-widest text-[#0B3B2C] group-hover:text-[#9A772E] transition-colors">FUSHA ZONE</span>
          <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C9A04F]">{SLOGAN}</span>
        </div>
      </div>
    );
  }

  return (
    <div onClick={onClick} className={`inline-flex items-center ${sizeMap.gap} select-none group ${onClick ? 'cursor-pointer' : ''} ${className}`} dir="ltr">
      <div className="transform group-hover:scale-105 transition-transform duration-300">
        <FushaZoneEmblem sizeClass={sizeMap.emblem} glow={isDarkBg} />
      </div>
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif-luxury font-bold tracking-wider ${sizeMap.title} leading-none transition-colors duration-200 ${
            isDarkBg ? 'text-white group-hover:text-[#F3E3B8]' : 'text-[#0B3B2C] group-hover:text-[#9A772E]'
          }`}
        >
          FUSHA ZONE
        </span>
        {showSlogan && (
          <span className={`${sizeMap.slogan} mt-1 leading-none uppercase tracking-[0.18em] font-semibold text-[#C9A04F]`}>{SLOGAN}</span>
        )}
      </div>
    </div>
  );
};
