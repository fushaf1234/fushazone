import React from 'react';
import { BookOpen, GraduationCap, Mic, Languages, School, ArrowUpRight } from 'lucide-react';

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
      { ar: 'تجويد الأطفال – المستوى الثاني', en: 'Tajweed for Kids – Level 2', href: '/quran-kids/#tajweed', noteAr: '١٢ درسًا', noteEn: '12 lessons' },
      { ar: 'التجويد المختصر', en: 'Tajweed – Short Course', href: '/quran-kids/#tajweed', noteAr: '٧ دروس', noteEn: '7 lessons' },
      { ar: 'التجويد الكامل', en: 'Tajweed – Full Course', href: '/quran-kids/#tajweed', noteAr: '١٩ درسًا', noteEn: '19 lessons' }
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

// الدروس التفاعلية: تُعرض في صفحة المنهج ولوحة الطالب ولوحة الزائر
export const InteractiveLessons: React.FC<{ isAr: boolean; className?: string }> = ({ isAr, className = '' }) => (
  <div className={`space-y-4 ${className}`}>
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
);
