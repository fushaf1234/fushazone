import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROGRAM_CATEGORIES } from '../data/academyData';
import { ProgramShowcase } from '../components/programs/ProgramShowcase';
import { ProgramPrice } from '../components/programs/ProgramPrice';
import { usePackages } from '../hooks/usePackages';
import { unitLabel, billingLabel, ProgramId } from '../services/packagesService';
import { useAcademySettings, formatMoney } from '../hooks/useAcademySettings';
import { CEFRLevel } from '../types';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarCheck,
  CheckCircle,
  Clock,
  GraduationCap,
  Users
} from 'lucide-react';

interface CourseDetailsPageProps {
  courseId: string;
  navigate: (route: string, state?: { preselectedLevel?: CEFRLevel }) => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({ courseId, navigate }) => {
  const { t, language, dir } = useLanguage();
  const { packages, locked: pricesLocked } = usePackages();
  const { currency } = useAcademySettings();
  const course = PROGRAM_CATEGORIES.find((item) => item.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#FAF7EF] py-16 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-[#C9A04F]/30 shadow-lg text-center space-y-5">
          <h1 className="font-serif-luxury font-bold text-2xl text-[#0B3B2C]">
            {language === 'ar' ? 'البرنامج غير موجود' : 'Program Not Found'}
          </h1>
          <p className="text-sm text-gray-600">
            {language === 'ar'
              ? 'يرجى اختيار إحدى الدورات المتاحة من قائمة البرامج الأكاديمية.'
              : 'Please choose one of our available courses from the academic catalog.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate('programs')}
              className="px-6 py-3 rounded-xl font-bold text-sm bg-[#0B3B2C] text-[#F3E3B8] hover:bg-[#14523C] transition-colors"
            >
              {t.programs.viewAll}
            </button>
            <button
              onClick={() => navigate('home')}
              className="px-6 py-3 rounded-xl font-semibold text-sm border border-gray-300 text-[#0B3B2C] hover:bg-gray-50 transition-colors"
            >
              {t.nav.home}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const PROGRAM_OF: Record<string, ProgramId> = { 'arabic-language': 'arabic', 'interactive-conversation': 'conversation', 'quran-tajweed': 'quran', 'kids-arabic-quran': 'kids' };
  const programPackages = packages.filter((p) => p.program === PROGRAM_OF[course.id]);
  const otherCourses = PROGRAM_CATEGORIES.filter((item) => item.id !== course.id);

  return (
    <div className="min-h-screen bg-[#FAF7EF] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => navigate('home')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3B2C] hover:text-[#9A772E] transition-colors"
          >
            <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            <span>{language === 'ar' ? 'العودة إلى الرئيسية' : 'Back to Home'}</span>
          </button>

          <button
            onClick={() => navigate('programs')}
            className="text-xs font-bold text-[#9A772E] hover:underline"
          >
            {t.programs.viewAll}
          </button>
        </div>

        {/* Hero Summary Banner */}
        <div className="bg-gradient-to-br from-[#0B3B2C] to-[#11503A] text-white rounded-3xl p-7 sm:p-10 lg:p-12 border-2 border-[#C9A04F]/40 shadow-2xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A04F] text-[#0B3B2C] text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.brand.name}</span>
            </span>
            {course.badgeEn && (
              <span className="px-3 py-1 rounded-full bg-white/10 border border-[#C9A04F]/40 text-[#F3E3B8] text-xs font-semibold">
                {language === 'ar' ? course.badgeAr : course.badgeEn}
              </span>
            )}
          </div>

          <h1 className="font-serif-luxury font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {language === 'ar' ? course.titleAr : course.titleEn}
          </h1>

          <ProgramPrice prog={course} language={language} dark className="mb-6 max-w-sm" />

          <p className="text-base sm:text-lg text-gray-200 max-w-3xl leading-relaxed mb-8">
            {language === 'ar' ? course.fullDescAr : course.fullDescEn}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[#C9A04F] font-bold mb-1">
                <Users className="w-4 h-4" />
                <span>{t.programs.format}</span>
              </div>
              <p className="text-gray-200">{language === 'ar' ? course.formatAr : course.formatEn}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[#C9A04F] font-bold mb-1">
                <Clock className="w-4 h-4" />
                <span>{t.programs.duration}</span>
              </div>
              <p className="text-gray-200">{language === 'ar' ? course.durationAr : course.durationEn}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[#C9A04F] font-bold mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>{t.programs.suitableFor}</span>
              </div>
              <p className="text-gray-200">{language === 'ar' ? course.suitableForAr : course.suitableForEn}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => navigate('register')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A04F] via-[#F3E3B8] to-[#C9A04F] text-[#0B3B2C] shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.programs.enrollNow}</span>
            </button>

            <button
              onClick={() => navigate('curriculum')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm border border-[#C9A04F]/50 text-[#F3E3B8] hover:bg-[#C9A04F]/10 transition-colors"
            >
              {t.curriculum.exploreSyllabus}
            </button>
          </div>
        </div>

        {(course.galleryImages?.length || course.videoIds?.length) ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C9A04F]/30 shadow-md">
            <ProgramShowcase prog={course} language={language} />
          </div>
        ) : null}

        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#C9A04F]/30 shadow-md">
          <h2 className="font-serif-luxury font-bold text-2xl text-[#0B3B2C] mb-5">
            {language === 'ar' ? 'الأهداف والمخرجات التعليمية' : 'Core Learning Objectives'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(language === 'ar' ? course.objectivesAr : course.objectivesEn).map((obj, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF7EF] border border-gray-200/80"
              >
                <CheckCircle className="w-5 h-5 text-[#C9A04F] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-relaxed">{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* باقات هذا البرنامج (من لوحة الإدارة) */}
        {(programPackages.length > 0 || pricesLocked) && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#0B3B2C]">{t.pricing.sectionTitle}</h2>
              <p className="text-sm text-gray-600 mt-2">{t.pricing.studyPaymentDesc}</p>
            </div>
            {pricesLocked && (
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0B3B2C] to-[#11503A] text-center space-y-3 border-2 border-[#C9A04F]/50 shadow-lg">
                <div className="text-3xl">🔒</div>
                <h3 className="font-serif-luxury font-bold text-xl text-[#F3E3B8]">{language === 'ar' ? 'الأسعار متاحة للمسجّلين' : 'Prices are for registered members'}</h3>
                <button onClick={() => navigate('join-us')} className="ez-float-glow px-8 py-3 rounded-xl bg-[#C9A04F] text-[#0B3B2C] font-bold text-sm">
                  {language === 'ar' ? '{سجّل|سجّلي} مجانًا لرؤية الأسعار' : 'Sign up free to see prices'}
                </button>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {programPackages.map((p) => (
                <div key={p.id} className="bg-white rounded-3xl p-6 border-2 border-[#C9A04F]/30 shadow-md space-y-3">
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#0B3B2C]/30 text-[#0B3B2C] bg-[#FAF7EF]">{billingLabel(p, language === 'ar')}</span>
                  <h3 className="font-serif-luxury font-bold text-lg text-[#0B3B2C]">{language === 'ar' ? p.titleAr : p.titleEn}</h3>
                  <div className="text-xs font-bold text-[#9A772E]">
                    {[
                      p.sessionsPerMonth ? (language === 'ar' ? `${p.sessionsPerMonth} حصص / شهر` : `${p.sessionsPerMonth} lessons / month`) : '',
                      p.minutes ? (language === 'ar' ? `${p.minutes} دقيقة للحصة` : `${p.minutes} min per lesson`) : ''
                    ].filter(Boolean).join(' • ')}
                  </div>
                  <div className="space-y-1 text-sm">
                    {p.free && <div className="font-bold text-[#0B3B2C]">{language === 'ar' ? 'مجانًا' : 'Free'}</div>}
                    {!p.free && p.individualPrice !== undefined && (
                      <div className="flex justify-between"><span className="text-gray-500">{language === 'ar' ? 'فردي' : 'Individual'}</span><b dir="ltr">{formatMoney(p.individualPrice, currency)} <span className="text-xs font-normal text-gray-500">{unitLabel(p.unit, language === 'ar')}</span></b></div>
                    )}
                    {!p.free && p.groupPrice !== undefined && (
                      <div className="flex justify-between"><span className="text-gray-500">{language === 'ar' ? 'مجموعة (للطالب)' : 'Group (per student)'}</span><b dir="ltr">{formatMoney(p.groupPrice, currency)} <span className="text-xs font-normal text-gray-500">{unitLabel(p.unit, language === 'ar')}</span></b></div>
                    )}
                  </div>
                  <button onClick={() => navigate('register')} className="w-full py-2.5 rounded-xl font-bold text-sm bg-[#0B3B2C] text-[#F3E3B8] flex items-center justify-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    {t.programs.enrollNow}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Explore Other Courses */}
        <div className="pt-4">
          <h3 className="font-serif-luxury font-bold text-xl text-[#0B3B2C] mb-4">
            {language === 'ar' ? 'برامج أخرى في الأكاديمية' : 'Explore Other Programs'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCourses.map((other) => (
              <button
                key={other.id}
                onClick={() => navigate(`course/${other.id}`)}
                className="text-start bg-white rounded-2xl p-5 border border-[#C9A04F]/25 hover:border-[#C9A04F] shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3"
              >
                <div>
                  <div className="font-serif-luxury font-bold text-base text-[#0B3B2C]">
                    {language === 'ar' ? other.titleAr : other.titleEn}
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {language === 'ar' ? other.shortDescAr : other.shortDescEn}
                  </p>
                </div>
                <ArrowRight className={`w-4 h-4 text-[#C9A04F] flex-shrink-0 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
