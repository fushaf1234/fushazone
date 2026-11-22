import React, { useState } from 'react';
import { usePlacementLink } from '../hooks/usePlacementLink';
import { ReferralTeaser } from '../components/student/ReferralOffers';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import {
  PROGRAM_CATEGORIES,
  CEFR_LEVELS_INFO
} from '../data/academyData';
import { OFFICIAL_LOGO_IMAGE_PATH } from '../components/common/Logo';
import { ProgramPrice } from '../components/programs/ProgramPrice';
import { useAcademySettings } from '../hooks/useAcademySettings';
import { useSiteSection } from '../hooks/useSiteContent';
import { CEFRLevel } from '../types';
import {
  Sparkles,
  ArrowRight,
  Award,
  ShieldCheck,
  GraduationCap,
  ClipboardCheck,
  ExternalLink,
  BookOpenCheck,
  CheckCircle2,
  ChevronDown
, Mic } from 'lucide-react';
import { FushaZoneEmblem } from '../components/common/Logo';
import { FeaturesShowcase } from '../components/home/FeaturesShowcase';
import { EnglishClubHomeSection } from '../components/englishClub/EnglishClubHomeSection';
import { StudentReviewsSection } from '../components/reviews/StudentReviewsSection';
import { VerifiedTestimonials } from '../components/reviews/VerifiedTestimonials';

interface HomePageProps {
  navigate: (
    route: string,
    state?: { preselectedLevel?: CEFRLevel; curriculumLevel?: CEFRLevel }
  ) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const contacts = useAcademySettings();
  const pt = usePlacementLink();
  const { t, language, dir } = useLanguage();
  const { isAuthenticated } = useAuth();
  const heroAnnouncement = useSiteSection('hero_announcement', language);
  const methodologyIntro = useSiteSection('methodology_intro', language);
  const placementNotice = useSiteSection('placement_notice', language);
  const ar = language === 'ar';
  const [isPackageExpanded, setIsPackageExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7EF]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B3B2C] via-[#0E4734] to-[#0B3B2C] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#C9A04F]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A04F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {heroAnnouncement && (
              <div className="mx-auto max-w-2xl px-4 py-2.5 rounded-2xl bg-[#C9A04F] text-[#0B3B2C] text-sm font-bold shadow-lg whitespace-pre-line">
                {heroAnnouncement}
              </div>
            )}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14523C] border border-[#C9A04F]/40 text-[#F3E3B8] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <FushaZoneEmblem sizeClass="w-4 h-4" glow={false} showBevelBorder={false} />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="font-serif-luxury font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              {t.hero.title1}
              <span className="block mt-2 gold-gradient-text">
                {t.hero.title2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.hero.desc}
            </p>

            <div className="max-w-xl mx-auto pt-2">
              <ReferralTeaser isAr={language === 'ar'} onClick={() => navigate(isAuthenticated ? 'portal' : 'join-offer')} />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('join-us')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-[#C9A04F] via-[#F3E3B8] to-[#C9A04F] text-[#0B3B2C] shadow-xl hover:shadow-[#C9A04F]/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>{t.hero.ctaJoin}</span>
              </button>

              {(
              <a
                href={pt.href}
                target={pt.target}
                rel={pt.rel}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base border-2 border-[#C9A04F]/60 text-[#F3E3B8] hover:bg-[#C9A04F]/15 hover:border-[#C9A04F] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-[#C9A04F]" />
                <span>{pt.label(language === 'ar')}</span>
              </a>
              )}

              <button
                onClick={() => navigate('programs')}
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-medium text-base text-gray-300 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-1.5"
              >
                <span>{t.hero.ctaExplore}</span>
                <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 1. ACADEMY FEATURES & BENEFITS: نظرة عامة ثم شرائح دائرية */}
      <FeaturesShowcase ar={ar} isAuthenticated={isAuthenticated} navigate={navigate} />

      {/* 2. PROGRAMS (SUMMARY CARDS ONLY) */}
      <section className="py-16 sm:py-20 bg-[#F3EDE2]/60 border-y border-[#C9A04F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A04F]">
              {language === 'ar' ? 'ابدأ من مكانك' : 'Start where you are'}
            </span>
            <h2 className="font-serif-luxury font-bold text-3xl sm:text-4xl text-[#0B3B2C] mt-2">
              {language === 'ar' ? 'برامج مصممة لتتحرك بك بثقة' : 'Programs designed to move you forward with confidence'}
            </h2>
            <p className="text-gray-600 mt-3 text-base">
              {t.programs.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PROGRAM_CATEGORIES.map((prog, idx) => {
              const isFeatured = idx === 0;

              if (isFeatured) {
                return (
                  <div
                    key={prog.id}
                    dir={dir}
                    className="md:col-span-2 relative bg-gradient-to-br from-[#0B3B2C] via-[#0E4734] to-[#11503A] text-white rounded-3xl p-7 sm:p-10 border-2 border-[#C9A04F] shadow-2xl overflow-hidden flex flex-col justify-between"
                  >
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C9A04F] via-[#F3E3B8] to-[#C9A04F]" />

                    <div>
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-gradient-to-r from-[#C9A04F] via-[#F3E3B8] to-[#C9A04F] text-[#0B3B2C] text-xs font-extrabold tracking-wider uppercase shadow-sm">
                          {language === 'ar' ? prog.badgeAr : prog.badgeEn}
                        </span>
                      </div>

                      <h3 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#F3E3B8] leading-snug mb-4">
                        {language === 'ar' ? prog.titleAr : prog.titleEn}
                      </h3>


                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-4xl mb-7">
                        {language === 'ar' ? prog.shortDescAr : prog.shortDescEn}
                      </p>
                    </div>

                    <div>
                      <button
                        onClick={() => navigate(`course/${prog.id}`)}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-[#C9A04F] via-[#F3E3B8] to-[#C9A04F] text-[#0B3B2C] hover:brightness-105 active:scale-95 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                      >
                        <span>{language === 'ar' ? 'عرض تفاصيل البرنامج' : 'View Program Details'}</span>
                        <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={prog.id}
                  dir={dir}
                  className={`${(PROGRAM_CATEGORIES.length - 1) % 2 === 1 && idx === PROGRAM_CATEGORIES.length - 1 ? 'md:col-span-2 ' : ''}bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#C9A04F]/25 shadow-md hover:border-[#C9A04F] hover:shadow-lg transition-all flex flex-col justify-between`}
                >
                  <div>
                    <h3 className="font-serif-luxury font-bold text-xl text-[#0B3B2C] mb-3">
                      {language === 'ar' ? prog.titleAr : prog.titleEn}
                    </h3>
                    <ProgramPrice prog={prog} language={language} className="mb-4" />
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {language === 'ar' ? prog.shortDescAr : prog.shortDescEn}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`course/${prog.id}`)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-[#0B3B2C] text-[#F3E3B8] hover:bg-[#C9A04F] hover:text-[#0B3B2C] transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>{language === 'ar' ? 'عرض تفاصيل البرنامج' : 'View Program Details'}</span>
                    <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CONVERSATION CLUB */}
      <EnglishClubHomeSection navigate={navigate} onJoinClick={() => navigate('english-club')} />

      {/* 4. ABOUT THE ACADEMY */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0B3B2C] via-[#0E4734] to-[#0B3B2C] text-white border-t border-[#C9A04F]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Fusha Zone Academy Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-[#C9A04F]/60 shadow-2xl bg-[#062419]">
                <img
                  src={OFFICIAL_LOGO_IMAGE_PATH}
                  alt="Fusha Zone"
                  className="w-full h-auto block p-8"
                />
              </div>
            </div>

            {/* Concise Introduction to Fusha Zone Academy */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C9A04F]/30 text-xs text-[#F3E3B8]">
                <ShieldCheck className="w-4 h-4 text-[#C9A04F]" />
                <span>{language === 'ar' ? 'عن الأكاديمية' : 'About the Academy'}</span>
              </div>

              <h2 className="font-serif-luxury font-bold text-3xl sm:text-4xl text-white">
                {language === 'ar' ? 'أكاديمية Fusha Zone' : 'Fusha Zone Academy'}
              </h2>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {t.brand.subSlogan}
              </p>

              {methodologyIntro && (
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{methodologyIntro}</p>
              )}

              <blockquote className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#C9A04F] pl-4 rtl:pl-0 rtl:pr-4 italic text-base sm:text-lg text-[#F3E3B8] font-serif-luxury leading-relaxed">
                {t.founder.quote}
              </blockquote>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => navigate('about')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A04F] to-[#9A772E] text-[#0B3B2C] hover:brightness-110 transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <span>{language === 'ar' ? 'اقرأ المزيد عن الأكاديمية' : 'Learn More About Us'}</span>
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={() => navigate('pricing')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm border border-[#C9A04F]/50 text-[#F3E3B8] hover:bg-[#C9A04F]/10 transition-colors"
                >
                  {t.nav.pricing}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE OUR CURRICULUM (A1-C2 LEVELS) */}
      <section className="py-16 bg-[#FAF7EF] border-t border-[#C9A04F]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A04F]">
            {t.brand.cefrStandard}
          </span>
          <h2 className="font-serif-luxury font-bold text-3xl text-[#0B3B2C] mt-2">
            {language === 'ar' ? 'استكشف مستوياتنا ومساراتنا' : 'Explore Our Levels & Tracks'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            {t.curriculum.sectionSubtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
            {CEFR_LEVELS_INFO.map((lvl) => (
              <button
                key={lvl.code}
                onClick={() => navigate('curriculum', { curriculumLevel: lvl.code })}
                className="bg-white rounded-2xl p-4 border border-[#C9A04F]/30 hover:border-[#C9A04F] shadow-sm hover:shadow-md transition-all text-center group"
              >
                <span className="inline-block px-3 py-1 mx-auto rounded-xl bg-[#0B3B2C] text-[#F3E3B8] font-bold text-[11px] mb-2 group-hover:bg-[#C9A04F] group-hover:text-[#0B3B2C] transition-colors">
                  {lvl.program === 'arabic' ? (language === 'ar' ? 'العربية' : 'Arabic') : language === 'ar' ? 'القرآن' : 'Quran'}
                </span>
                <span className="block font-bold text-xs text-[#0B3B2C]">
                  {language === 'ar' ? lvl.nameAr : lvl.nameEn}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate('curriculum')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#0B3B2C] text-[#F3E3B8] hover:bg-[#14523C] transition-all shadow-md"
            >
              <span>{t.curriculum.exploreSyllabus}</span>
              <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            {(
            <a
              href={pt.href}
              target={pt.target}
              rel={pt.rel}
              aria-label={t.features.placementAriaLabel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A04F] via-[#F3E3B8] to-[#C9A04F] text-[#0B3B2C] hover:brightness-105 active:scale-95 transition-all shadow-md"
            >
              <ClipboardCheck className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span>{pt.label(language === 'ar')}</span>
            </a>
            )}
          </div>
        </div>
      </section>

      {/* STUDENT REVIEWS & FEEDBACK GALLERY */}
      <StudentReviewsSection previewLimit={6} />
      <VerifiedTestimonials limit={3} title />
    </div>
  );
};
