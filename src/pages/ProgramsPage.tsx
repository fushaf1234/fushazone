import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROGRAM_CATEGORIES, CEFR_LEVELS_INFO } from '../data/academyData';
import { ProgramShowcase } from '../components/programs/ProgramShowcase';
import { ProgramPrice } from '../components/programs/ProgramPrice';
import { 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  Filter
} from 'lucide-react';

interface ProgramsPageProps {
  navigate: (route: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ navigate }) => {
  const { t, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'levels' | 'formats'>('all');

  return (
    <div className="min-h-screen bg-[#FAF7EF] py-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A04F]">
            {language === 'ar' ? 'ابدأ من مكانك' : 'Start where you are'}
          </span>
          <h1 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#0B3B2C] mt-2">
            {t.programs.sectionTitle}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            {t.programs.sectionSubtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              selectedFilter === 'all'
                ? 'bg-[#0B3B2C] text-white shadow'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {language === 'ar' ? `جميع المسارات (${PROGRAM_CATEGORIES.length} برامج)` : `All Programs (${PROGRAM_CATEGORIES.length} Tracks)`}
          </button>
          <button
            onClick={() => setSelectedFilter('levels')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              selectedFilter === 'levels'
                ? 'bg-[#0B3B2C] text-white shadow'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {language === 'ar' ? 'المستويات والمسارات' : 'Levels & Tracks'}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CEFR LEVELS BANNER */}
        {selectedFilter !== 'formats' && (
          <div className="mb-16 bg-white rounded-3xl p-8 border border-[#C9A04F]/30 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C9A04F]">
                  {language === 'ar' ? 'مسار التعلم' : 'Learning Path'}
                </span>
                <h2 className="font-serif-luxury font-bold text-2xl text-[#0B3B2C] mt-1">
                  {language === 'ar' ? '3 مستويات للعربية و3 مسارات للقرآن' : '3 Arabic Levels & 3 Quran Tracks'}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {language === 'ar' 
                    ? 'يحدد المعلم سرعة التقدم حسب مستواك، ويبدأ كل طالب من جلسة تقييم مجانية.'
                    : 'Your teacher sets the pace according to your level, and every student starts with a free assessment session.'
                  }
                </p>
              </div>
              <button
                onClick={() => navigate('curriculum')}
                className="mt-4 md:mt-0 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#0B3B2C] text-white hover:bg-[#14523C] transition-colors self-start md:self-auto"
              >
                {t.curriculum.exploreSyllabus}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CEFR_LEVELS_INFO.map((lvl) => (
                <div key={lvl.code} className="p-4 rounded-2xl bg-[#FAF7EF] border border-gray-200 text-center hover:border-[#C9A04F] transition-all">
                  <div className="inline-block px-3 py-1 mx-auto rounded-xl bg-[#0B3B2C] text-[#F3E3B8] font-bold text-[11px] mb-2">
                    {lvl.program === 'arabic' ? (language === 'ar' ? 'العربية' : 'Arabic') : language === 'ar' ? 'القرآن' : 'Quran'}
                  </div>
                  <h3 className="font-bold text-sm text-[#0B3B2C]">
                    {language === 'ar' ? lvl.nameAr : lvl.nameEn}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                    {language === 'ar' ? lvl.descriptionAr : lvl.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROGRAM CATEGORY CARDS */}
        {selectedFilter !== 'levels' && (
          <div className="space-y-10">
            {PROGRAM_CATEGORIES.map((prog, index) => (
              <div 
                key={prog.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C9A04F]/30 shadow-md hover:border-[#C9A04F] transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0B3B2C] text-[#F3E3B8]">
                        {language === 'ar' ? `البرنامج ${index + 1}` : `Program ${index + 1}`}
                      </span>
                      {prog.badgeEn && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C9A04F]/20 text-[#0B3B2C] border border-[#C9A04F]/40">
                          {language === 'ar' ? prog.badgeAr : prog.badgeEn}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#0B3B2C]">
                      {language === 'ar' ? prog.titleAr : prog.titleEn}
                    </h2>


                    <p className="text-base text-gray-700 leading-relaxed">
                      {language === 'ar' ? prog.fullDescAr : prog.fullDescEn}
                    </p>

                    {/* Learning Objectives */}
                    <div className="pt-2">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-[#0B3B2C] mb-3">
                        {language === 'ar' ? 'الأهداف التعليمية الرئيسية:' : 'Core Learning Objectives:'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {(language === 'ar' ? prog.objectivesAr : prog.objectivesEn).map((obj, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#C9A04F] flex-shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Details pill row */}
                    <div className="pt-4 flex flex-wrap gap-4 text-xs text-gray-600 border-t border-gray-100">
                      <div>
                        <span className="font-bold text-[#0B3B2C] block">{t.programs.format}:</span>
                        <span>{language === 'ar' ? prog.formatAr : prog.formatEn}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#0B3B2C] block">{t.programs.duration}:</span>
                        <span>{language === 'ar' ? prog.durationAr : prog.durationEn}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#0B3B2C] block">{t.programs.suitableFor}:</span>
                        <span>{language === 'ar' ? prog.suitableForAr : prog.suitableForEn}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Program Summary & Enrollment Action */}
                  <div className="lg:col-span-4 bg-[#FAF7EF] rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between h-full">
                    <div className="space-y-2.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C9A04F]/15 text-[#9A772E] text-[11px] font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{language === 'ar' ? prog.durationAr : prog.durationEn}</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {language === 'ar' ? prog.formatAr : prog.formatEn}
                      </p>
                      <ProgramPrice prog={prog} language={language} className="mt-2" />
                    </div>

                    <div className="pt-6 space-y-3">
                      <button
                        onClick={() => navigate(`course/${prog.id}`)}
                        className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A04F] to-[#9A772E] text-[#0B3B2C] hover:brightness-110 shadow transition-all flex items-center justify-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>{language === 'ar' ? 'عرض تفاصيل البرنامج' : 'View Program Details'}</span>
                      </button>

                      <button
                        onClick={() => navigate('register')}
                        className="w-full py-2.5 rounded-xl font-bold text-xs bg-[#0B3B2C] text-[#F3E3B8] hover:bg-[#14523C] transition-colors flex items-center justify-center gap-2"
                      >
                        <GraduationCap className="w-4 h-4" />
                        <span>{t.programs.enrollNow}</span>
                      </button>

                      <button
                        onClick={() => navigate('curriculum')}
                        className="w-full py-2.5 rounded-xl font-semibold text-xs border border-gray-300 text-[#0B3B2C] hover:bg-white transition-colors"
                      >
                        {t.curriculum.exploreSyllabus}
                      </button>
                    </div>
                  </div>

                </div>
                {(prog.galleryImages?.length || prog.videoIds?.length) ? (
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <ProgramShowcase prog={prog} language={language} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
