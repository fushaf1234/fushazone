import React from 'react';
import { usePlacementLink } from '../../hooks/usePlacementLink';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../common/Logo';
import { useAcademySettings, whatsappDisplay } from '../../hooks/useAcademySettings';
import { useSiteSection } from '../../hooks/useSiteContent';
import { 
  Mail, 
  Phone, 
  Youtube, 
  Instagram, 
  MessageSquare, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  navigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const contacts = useAcademySettings();
  const pt = usePlacementLink();
  const { t, language } = useLanguage();
  const accreditation = useSiteSection('footer_accreditation', language);

  const handleNav = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#062419] text-gray-300 border-t border-[#C9A04F]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="footer" onClick={() => handleNav('home')} />
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B3B2C] border border-[#C9A04F]/30 text-xs text-[#F3E3B8]">
              <ShieldCheck className="w-4 h-4 text-[#C9A04F]" />
              <span>{t.brand.cefrStandard}</span>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                {language === 'ar' ? 'تابع منصات الأكاديمية الرسمية' : 'Official Academy Channels'}
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {contacts.whatsapp && (
                <a
                  href={contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0B3B2C] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#25D366] hover:border-[#25D366] transition-all"
                  title="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
                )}
                {contacts.email && (
                <a
                  href={`mailto:${contacts.email}`}
                  className="w-9 h-9 rounded-lg bg-[#0B3B2C] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#C9A04F] hover:border-[#C9A04F] transition-all"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                )}
                {contacts.youtube && (
                <a
                  href={contacts.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0B3B2C] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FF0000] hover:border-[#FF0000] transition-all"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                )}
                {contacts.instagram && (
                <a
                  href={contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0B3B2C] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#E4405F] hover:border-[#E4405F] transition-all"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                )}
                {contacts.discord && (
                <a
                  href={contacts.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0B3B2C] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#5865F2] hover:border-[#5865F2] transition-all"
                  title="Discord"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Academic Programs */}
          <div>
            <h4 className="font-serif-luxury font-bold text-white tracking-wider text-base mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C9A04F]" />
              {t.footer.academicPrograms}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('course/arabic-language')} className="hover:text-[#F3E3B8] transition-colors">
                  {language === 'ar' ? 'اللغة العربية (فُصحى)' : 'Arabic Language (Fusha)'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('course/interactive-conversation')} className="hover:text-[#F3E3B8] transition-colors">
                  {language === 'ar' ? 'المحادثات التفاعلية بالفصحى' : 'Fusha Arabic Conversation'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('course/quran-tajweed')} className="hover:text-[#F3E3B8] transition-colors">
                  {language === 'ar' ? 'القرآن الكريم والتجويد' : 'Quran & Tajweed'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('course/kids-arabic-quran')} className="hover:text-[#F3E3B8] transition-colors">
                  {language === 'ar' ? 'العربية والقرآن للأطفال' : 'Arabic & Quran for Kids'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('curriculum')} className="hover:text-[#F3E3B8] transition-colors">
                  {language === 'ar' ? 'المستويات والمسارات' : 'Levels & Tracks'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif-luxury font-bold text-white tracking-wider text-base mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C9A04F]" />
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('english-club')} className="hover:text-[#F3E3B8] text-[#C9A04F] font-semibold transition-colors flex items-center gap-1">
                  <span>{t.nav.englishClub}</span>
                  <span className="text-[10px] bg-[#C9A04F] text-[#0B3B2C] px-1 rounded font-bold">New</span>
                </button>
              </li>
              {(
              <li>
                <a
                  href={pt.href}
                  target={pt.target}
                  rel={pt.rel}
                  className="hover:text-[#F3E3B8] text-gray-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>{t.nav.placementTest}</span>
                  <span className="text-[10px] bg-white/20 text-white px-1 rounded font-bold">Free</span>
                </a>
              </li>
              )}
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-[#F3E3B8] transition-colors">
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('offers')} className="hover:text-[#F3E3B8] transition-colors">
                  {t.nav.offers}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#F3E3B8] transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-[#F3E3B8] transition-colors">
                  {t.nav.faq}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-[#F3E3B8] transition-colors">
                  {t.nav.blog}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('library')} className="hover:text-[#F3E3B8] transition-colors">
                  {language === 'ar' ? 'المكتبة' : 'Library'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    try {
                      sessionStorage.setItem('ez-go-magazine', '1');
                    } catch {
                      /* ignore */
                    }
                    handleNav('library');
                  }}
                  className="hover:text-[#F3E3B8] transition-colors"
                >
                  {language === 'ar' ? 'مجلة الأكاديمية' : 'Academy magazine'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Verification */}
          <div>
            <h4 className="font-serif-luxury font-bold text-white tracking-wider text-base mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C9A04F]" />
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              {contacts.whatsapp && (
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04F] font-semibold">WhatsApp:</span>
                <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  {whatsappDisplay(contacts.whatsapp)}
                </a>
              </li>
              )}
              {contacts.email && (
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04F] font-semibold">Email:</span>
                <a href={`mailto:${contacts.email}`} className="hover:text-white break-all">
                  {contacts.email}
                </a>
              </li>
              )}
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04F] font-semibold">Format:</span>
                <span>Online Live Classes (Zoom / Classroom)</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('join-us')}
                  className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#C9A04F] to-[#9A772E] text-[#0B3B2C] font-bold text-center text-xs shadow hover:brightness-110"
                >
                  {t.nav.register}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {accreditation && (
          <p className="pt-6 text-xs text-gray-400 text-center leading-relaxed whitespace-pre-line">{accreditation}</p>
        )}

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>{t.footer.disclaimer}</span>
            <span>•</span>
            <button onClick={() => handleNav('login')} className="hover:text-[#F3E3B8] underline">
              {t.nav.studentPortal}
            </button>
            <span>•</span>
            <button onClick={() => handleNav('admin-login')} className="hover:text-[#C9A04F] flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A04F]" />
              <span>{language === 'ar' ? 'بوابة الإدارة' : 'Admin Console'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
