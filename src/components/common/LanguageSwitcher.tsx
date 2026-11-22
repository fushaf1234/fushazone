import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#C9A04F]/40 bg-[#FAF7EF]/80 hover:bg-[#C9A04F]/15 hover:border-[#C9A04F] text-[#0B3B2C] transition-all shadow-sm active:scale-95 ${className}`}
      title={language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
    >
      <Globe className="w-3.5 h-3.5 text-[#C9A04F]" />
      <span className="font-medium">
        {language === 'en' ? (
          <span className="font-arabic font-bold text-sm">العربية</span>
        ) : (
          <span className="font-semibold tracking-wider">English</span>
        )}
      </span>
      <span className="text-[10px] uppercase px-1.5 py-0.5 rounded-full bg-[#0B3B2C] text-[#F3E3B8]">
        {language.toUpperCase()}
      </span>
    </button>
  );
};
