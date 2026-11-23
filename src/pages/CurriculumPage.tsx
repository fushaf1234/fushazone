import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CEFR_LEVELS_INFO } from '../data/academyData';
import { CEFRLevel } from '../types';
import { usePublishedCourses } from '../hooks/useSiteContent';
import { BookOpen, CheckCircle, GraduationCap, Users, Mic, Languages, School, ArrowUpRight } from 'lucide-react';

interface CurriculumPageProps {
  navigate: (route: string) => void;
  initialLevel?: CEFRLevel;
}

// الدروس التفاعلية (صفحات ثابتة داخل public/quran-kids). عند توفر ملف درس: ضعي رابطه في href.
type LessonItem = { ar: string; en: string; href?: string; noteAr?: string; noteEn?: string };
type LessonTrack = { id: string; icon: React.ElementType; ar: string; en: string; descAr: string; descEn: string; items: LessonItem[] };

const LESSON_TRACKS: LessonTrack[] = [
  {
    id: 'quran', icon: BookOpen, ar: 'القرآن الكريم', en: 'The Holy Quran',
    descAr: 'دروس تفاعلية للأطفال: السورة كاملة، ومعاني الآيات، وأنشطة واختبار ووسام.',
    descEn: "Interactive lessons for kids: the full surah, ayah meanings, activities, a quiz and a badge.",
    items: [{ ar: 'دروس القرآن للأطفال', en: "Kids' Qur'an Lessons", href: '/quran-kids/#quran', noteAr: 'الفاتحة والأجزاء ٢٨ و٢٩ و٣٠', noteEn: "Al-Fatiha and juz' 28, 29 and 30" }]
  },
  {
    id: 'tajweed', icon: Mic, ar: 'التجويد', en: 'Tajweed',
    descAr: 'دروس تفاعلية بالبطاقات والتمارين.', descEn: 'Interactive lessons with cards and exercises.',
    items: [
      { ar: 'تجويد الأطفال – المستوى الأول', en: 'Tajweed for Kids – Level 1', href: '/quran-kids/#tajweed', noteAr: '١١ درسًا', noteEn: '11 lessons' },
      { ar: 'تجويد الأطفال – المستوى الثاني', en: 'Tajweed for Kids – Level 2' },
      { ar: 'التجويد المختصر', en: 'Tajweed – Short Course' },
      { ar: 'التجويد الكامل', en: 'Tajweed – Full Course' }
    ]
  },
  {
    id: 'arabic', icon: Languages, ar: 'العربية للناطقين بغيرها', en: 'Arabic for Non-Native Speakers',
    descAr: 'مناهج معتمدة لتعليم العربية لغير العرب.', descEn: 'Established curricula for teaching Arabic to non-Arabs.',
    items: [
      { ar: 'منهج أحب العربية', en: "'I Love Arabic' Curriculum" },
      { ar: 'منهج المدينة', en: 'Madinah Arabic Curriculum' },
      { ar: 'منهج العربية بين يديك', en: "'Arabic Between Your Hands' Curriculum" }
    ]
  },
  {
    id: 'native', icon: School, ar: 'مناهج اللغة العربية للعرب', en: 'Arabic School Curricula (Native Speakers)',
    descAr: 'دروس تفاعلية على مناهج المدارس العربية.', descEn: 'Interactive lessons following Arab school curricula.',
    items: [{ ar: 'لغتي الجميلة – الصف الرابع – الفصل الأول (السعودية)', en: 'My Beautiful Language – Grade 4 – Term 1 (Saudi)' }]
  }
];

// المنهج: ثلاثة مستويات للعربية وثلاثة مسارات للقرآن، والمناهج التفصيلية تُضاف من لوحة الإدارة
export const CurriculumPage: React.FC<CurriculumPageProps> = ({ navigate, initialLevel }) => {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const [activeLevel, setActiveLevel] = useState<CEFRLevel>(initialLevel || 'beginner');

  useEffect(() => {
    if (initialLevel) setActiveLevel(initialLevel);
  }, [initialLevel]);

  const info = CEFR_LEVELS_INFO.find((l) => l.code === activeLevel) || CEFR_LEVELS_INFO[0];
  const publishedCourses = usePublishedCourses();
  const levelCourses = publishedCourses.filter((c) => !c.level || c.level === activeLevel);

  const groups: { id: 'arabic' | 'quran'; ar: string; en: string }[] = [
    { id: 'arabic', ar: 'اللغة العربية', en: 'Arabic Language' },
    { id: 'quran', ar: 'القرآن الكريم', en: 'The Holy Quran' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7EF] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#0B3B2C]">{t.curriculum.sectionTitle}</h1>
          <p className="text-base text-gray-600 mt-4 leading-relaxed">{t.curriculum.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {groups.map((g) => (
            <div key={g.id} className="bg-white rounded-3xl p-5 border border-[#C9A04F]/30 shadow-sm">
              <h2 className="font-bold text-sm text-[#9A772E] mb-3">{isAr ? g.ar : g.en}</h2>
              <div className="grid grid-cols-3 gap-2">
                {CEFR_LEVELS_INFO.filter((l) => l.program === g.id).map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setActiveLevel(l.code)}
                    className={`p-3 rounded-2xl text-xs font-bold border transition-all ${
                      activeLevel === l.code ? 'bg-[#0B3B2C] text-[#F3E3B8] border-[#0B3B2C]' : 'bg-[#FAF7EF] text-[#0B3B2C] border-gray-200 hover:border-[#C9A04F]'
                    }`}
                  >
                    {isAr ? l.nameAr : l.nameEn}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#0B3B2C] to-[#11503A] text-white rounded-3xl p-7 sm:p-10 border-2 border-[#C9A04F]/40 shadow-xl mb-10 space-y-4">
          <span className="text-xs font-bold text-[#C9A04F]">
            {info.program === 'arabic' ? (isAr ? 'اللغة العربية' : 'Arabic Language') : isAr ? 'القرآن الكريم' : 'The Holy Quran'}
          </span>
          <h2 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#F3E3B8]">{isAr ? info.nameAr : info.nameEn}</h2>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{isAr ? info.descriptionAr : info.descriptionEn}</p>
          <div className="flex items-start gap-2 text-sm text-gray-300">
            <Users className="w-4 h-4 text-[#C9A04F] mt-0.5 shrink-0" />
            <span>{isAr ? info.targetAudienceAr : info.targetAudienceEn}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-[#C9A04F] mt-0.5 shrink-0" />
            <span>{t.curriculum.twoMonthsNote}</span>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('register')}
              className="px-6 py-3 rounded-xl font-bold text-sm bg-[#C9A04F] text-[#0B3B2C] flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              {t.programs.enrollNow}
            </button>
            <button
              onClick={() => navigate('register')}
              className="px-6 py-3 rounded-xl font-semibold text-sm border border-[#C9A04F]/50 text-[#F3E3B8]"
            >
              {isAr ? '{احجز|احجزي} جلسة تقييم مجانية' : 'Book a free level assessment'}
            </button>
          </div>
        </div>

        <div className="mb-10 space-y-4">
          <h2 className="font-serif-luxury font-bold text-2xl text-[#0B3B2C] flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[#C9A04F]" />
            <span>{isAr ? 'الدروس التفاعلية' : 'Interactive Lessons'}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LESSON_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <div key={track.id} className="bg-white rounded-3xl p-5 border border-[#C9A04F]/30 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-[#0B3B2C] text-[#C9A04F] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-[#0B3B2C]">{isAr ? track.ar : track.en}</h3>
                      <p className="text-xs text-gray-500">{isAr ? track.descAr : track.descEn}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {track.items.map((item) =>
                      item.href ? (
                        <a
                          key={item.en}
                          href={item.href}
                          className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#FAF7EF] border border-[#C9A04F]/40 hover:border-[#C9A04F] transition-all"
                        >
                          <span>
                            <span className="block text-sm font-bold text-[#0B3B2C]">{isAr ? item.ar : item.en}</span>
                            {item.noteAr && <span className="block text-[11px] text-gray-500">{isAr ? item.noteAr : item.noteEn}</span>}
                          </span>
                          <span className="text-xs font-bold text-[#9A772E] flex items-center gap-1 whitespace-nowrap">
                            {isAr ? 'ابدأ' : 'Start'}
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </a>
                      ) : (
                        <div key={item.en} className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-200 opacity-70">
                          <span className="text-sm font-bold text-[#0B3B2C]">{isAr ? item.ar : item.en}</span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white text-gray-500 border border-gray-200 whitespace-nowrap">
                            {isAr ? 'قريبًا' : 'Coming soon'}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {levelCourses.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-serif-luxury font-bold text-xl text-[#0B3B2C] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#C9A04F]" />
              <span>{isAr ? 'المناهج المتاحة' : 'Available Curricula'}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {levelCourses.map((c) => (
                <div key={c.id} className="bg-white rounded-2xl p-5 border border-[#C9A04F]/30 shadow-sm space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold text-[#0B3B2C]">{(isAr ? c.titleAr : c.titleEn) || c.titleAr || c.titleEn}</span>
                    {c.durationMonths ? (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FAF7EF] text-[#9A772E] border border-[#C9A04F]/40 whitespace-nowrap">
                        {c.durationMonths} {isAr ? 'أشهر' : 'months'}
                      </span>
                    ) : null}
                  </div>
                  {((isAr ? c.descriptionAr : c.descriptionEn) || c.descriptionAr || c.descriptionEn) && (
                    <p className="text-xs text-gray-600 leading-relaxed">{(isAr ? c.descriptionAr : c.descriptionEn) || c.descriptionAr || c.descriptionEn}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
