import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { englishClubService } from '../services/englishClubService';
import { EnglishClubSettings } from '../types/englishClub';
import { JoinClubModal } from '../components/englishClub/JoinClubModal';
import { FushaZoneEmblem } from '../components/common/Logo';
import { useAcademySettings } from '../hooks/useAcademySettings';
import { 
  Sparkles, 
  Clock, 
  MessageSquare, 
  BookOpen, 
  Users, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  Volume2, 
  GraduationCap, 
  Smile, 
  Dices, 
  Compass, 
  Info,
  Phone
} from 'lucide-react';

interface EnglishClubPageProps {
  navigate: (route: string) => void;
}

const OFFICIAL_ENGLISH_CLUB_IMAGE = '/brand/fusha-zone-logo.png';

export const EnglishClubPage: React.FC<EnglishClubPageProps> = ({ navigate }) => {
  const contacts = useAcademySettings();
  const { language, t } = useLanguage();
  const c = t.englishClub;

  const [settings, setSettings] = useState<EnglishClubSettings | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrackForModal, setSelectedTrackForModal] = useState<'A1-A2' | 'B1-B2' | 'C1-C2' | 'undecided'>('undecided');

  useEffect(() => {
    const loadSettings = async () => {
      const data = await englishClubService.getSettings();
      setSettings(data);
    };
    loadSettings();
  }, []);

  const openModalWithTrack = (track: 'A1-A2' | 'B1-B2' | 'C1-C2' | 'undecided') => {
    setSelectedTrackForModal(track);
    setIsModalOpen(true);
  };

  const expectationIcons = [
    Calendar,
    Clock,
    MessageSquare,
    BookOpen,
    Users,
    Sparkles,
    Dices,
    Smile
  ];

  return (
    <div className="min-h-screen bg-[#FAF7EF]">
      
      {/* HERO SECTION WITH OFFICIAL ARTWORK */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B3B2C] via-[#0F2244] to-[#0B3B2C] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#C9A04F]/30">
        {/* Subtle decorative radial grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#C9A04F]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14523C] border border-[#C9A04F]/40 text-[#F3E3B8] text-xs sm:text-sm font-semibold shadow-sm">
                <FushaZoneEmblem sizeClass="w-4 h-4" glow={false} showBevelBorder={false} />
                <span>{c.badge}</span>
                <span className="text-gray-400">|</span>
                <span className="text-[#C9A04F] font-bold">100% Online</span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h1 className="font-serif-luxury font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                  {c.mainTitle}
                </h1>
                <p className="mt-2 text-lg sm:text-2xl font-serif-luxury font-semibold text-[#C9A04F] tracking-wide">
                  {c.tagline}
                </p>
                {language === 'ar' && (
                  <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                    {c.taglineSub}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                {c.description}
              </p>

              {/* Quick Pillars */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-1 text-xs">
                <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/10 text-[#F3E3B8] font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C9A04F]" />
                  <span>{language === 'ar' ? 'جلسة 60 دقيقة' : '60-Minute Session'}</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/10 text-[#F3E3B8] font-medium flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-[#C9A04F]" />
                  <span>{language === 'ar' ? 'بالعربية فقط' : 'Arabic-Only Immersion'}</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/10 text-[#F3E3B8] font-medium flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C9A04F]" />
                  <span>{language === 'ar' ? 'مسارات حسب المستوى' : 'Level-Based Tracks'}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => openModalWithTrack('undecided')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-[#C9A04F] via-[#F3E3B8] to-[#C9A04F] text-[#0B3B2C] shadow-xl hover:shadow-[#C9A04F]/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>{c.joinCta}</span>
                </button>

                <a
                  href="#tracks-section"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm sm:text-base border border-white/20 text-gray-200 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <span>{c.viewSessions}</span>
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </a>
              </div>

              {/* Notice */}
              <div className="pt-2 text-xs text-gray-400 flex items-center justify-center lg:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C9A04F] flex-shrink-0" />
                <span>{c.practiceNotReplacementBadge}</span>
              </div>

            </div>

            {/* Official Artwork Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A04F]/40 group bg-[#0B3B2C]">
                <img
                  src={OFFICIAL_ENGLISH_CLUB_IMAGE}
                  alt="Fusha Zone Conversation Club"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B2C]/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#0B3B2C]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2">
                    <FushaZoneEmblem sizeClass="w-6 h-6" glow={false} showBevelBorder={false} />
                    <span className="font-semibold text-[#F3E3B8]">Interactive Virtual Lounge</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#C9A04F] px-2 py-0.5 rounded bg-[#C9A04F]/20 border border-[#C9A04F]/30">
                    Live Breakouts
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT STUDENTS CAN EXPECT SECTION */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A04F]/15 text-[#9A772E] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Sessions</span>
          </div>
          <h2 className="font-serif-luxury font-bold text-3xl sm:text-4xl text-[#0B3B2C]">
            {c.expectSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            {c.expectSectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.expectations.map((item, index) => {
            const Icon = expectationIcons[index % expectationIcons.length];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7EF] border border-[#C9A04F]/30 text-[#0B3B2C] group-hover:bg-[#0B3B2C] group-hover:text-[#F3E3B8] transition-colors flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#0B3B2C] mb-2 group-hover:text-[#9A772E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-[11px] font-semibold text-[#C9A04F]">
                  <span>Pillar {index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLUB STRUCTURE & CEFR TRACKS */}
      <section id="tracks-section" className="py-16 bg-[#F3EDE2]/50 border-y border-[#C9A04F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A772E]">
              {language === 'ar' ? 'حسب المستوى' : 'Organized by Level'}
            </span>
            <h2 className="font-serif-luxury font-bold text-3xl sm:text-4xl text-[#0B3B2C] mt-1">
              {c.structureSectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              {c.structureSectionSubtitle}
            </p>
          </div>

          {/* 4 Core Structural Pillars Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {c.structureHighlights.map((hl, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A04F] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B3B2C]">{hl.title}</h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 mt-1 leading-relaxed">{hl.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CEFR Level Track Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Track 1: A1-A2 */}
            <div className="bg-white rounded-3xl p-7 border-2 border-emerald-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    {language === 'ar' ? 'مبتدئ' : 'Beginner'}
                  </span>
                  <span className="text-xs font-bold text-gray-400">{language === 'ar' ? 'المسار 1' : 'Track 1'}</span>
                </div>
                <h3 className="font-serif-luxury font-bold text-xl text-[#0B3B2C]">
                  {language === 'ar' ? 'مسار المبتدئين' : 'Beginner Conversation Club'}
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {language === 'ar'
                    ? 'مصمم للمبتدئين لبناء عادة التحدث اليومية وكسر حاجز الرهبة في بيئة مريحة وداعمة.'
                    : 'Crafted for beginner and elementary learners building active speaking habits and breaking hesitation in a supportive environment.'}
                </p>

                {/* Session Details (Strictly dynamic or academy placeholder) */}
                <div className="mt-6 p-4 rounded-2xl bg-[#FAF7EF] border border-gray-200 text-xs space-y-2">
                  <div className="flex items-center justify-between text-gray-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      <span>{language === 'ar' ? 'مدة الجلسة:' : 'Duration:'}</span>
                    </span>
                    <span>{language === 'ar' ? '60 دقيقة' : '60 Min'}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      <span>{language === 'ar' ? 'الموعد المجدول:' : 'Schedule:'}</span>
                    </span>
                    <span className="text-[#0B3B2C]">
                      {settings?.tracks['A1-A2']?.isConfigured && settings.tracks['A1-A2'].dayTimeEn
                        ? (language === 'ar' && settings.tracks['A1-A2'].dayTimeAr ? settings.tracks['A1-A2'].dayTimeAr : settings.tracks['A1-A2'].dayTimeEn)
                        : (language === 'ar' ? 'يُحدد عند اكتمال المجموعة' : 'Scheduled per cohort')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gray-500" />
                      <span>{language === 'ar' ? 'المجموعات الفرعية:' : 'Breakout Group:'}</span>
                    </span>
                    <span>10–15 Learners Max</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => openModalWithTrack('A1-A2')}
                  className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>{language === 'ar' ? 'انضم لمسار المبتدئين' : 'Join Beginner Track'}</span>
                </button>
              </div>
            </div>

            {/* Track 2: B1-B2 (Featured) */}
            <div className="bg-white rounded-3xl p-7 border-2 border-[#C9A04F] shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all relative overflow-hidden ring-4 ring-[#C9A04F]/10">
              <div className="absolute top-0 right-0 left-0 h-2.5 bg-gradient-to-r from-[#C9A04F] via-[#F3E3B8] to-[#C9A04F]"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#0B3B2C] text-[#F3E3B8] text-xs font-bold border border-[#C9A04F]/40 shadow-xs">
                    {language === 'ar' ? 'متوسط • الأكثر طلبًا' : 'Intermediate • Most Popular'}
                  </span>
                  <span className="text-xs font-bold text-[#9A772E]">{language === 'ar' ? 'المسار 2' : 'Track 2'}</span>
                </div>
                <h3 className="font-serif-luxury font-bold text-xl text-[#0B3B2C]">
                  {language === 'ar' ? 'مسار المتوسط' : 'Intermediate Conversation Club'}
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {language === 'ar'
                    ? 'للمتحدثين في المستوى المتوسط لمناقشة مواضيع فكرية متنوعة، توسيع التراكيب، والحديث بتدفق طبيعي.'
                    : 'For intermediate speakers expressing nuanced thoughts, debating current topics, and cultivating spontaneous fluency.'}
                </p>

                {/* Session Details */}
                <div className="mt-6 p-4 rounded-2xl bg-[#FAF7EF] border border-[#C9A04F]/30 text-xs space-y-2">
                  <div className="flex items-center justify-between text-gray-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#9A772E]" />
                      <span>{language === 'ar' ? 'مدة الجلسة:' : 'Duration:'}</span>
                    </span>
                    <span>{language === 'ar' ? '60 دقيقة' : '60 Min'}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#9A772E]" />
                      <span>{language === 'ar' ? 'الموعد المجدول:' : 'Schedule:'}</span>
                    </span>
                    <span className="text-[#0B3B2C] font-bold">
                      {settings?.tracks['B1-B2']?.isConfigured && settings.tracks['B1-B2'].dayTimeEn
                        ? (language === 'ar' && settings.tracks['B1-B2'].dayTimeAr ? settings.tracks['B1-B2'].dayTimeAr : settings.tracks['B1-B2'].dayTimeEn)
                        : (language === 'ar' ? 'يُحدد عند اكتمال المجموعة' : 'Scheduled per cohort')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#9A772E]" />
                      <span>{language === 'ar' ? 'المجموعات الفرعية:' : 'Breakout Group:'}</span>
                    </span>
                    <span>10–15 Learners Max</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => openModalWithTrack('B1-B2')}
                  className="w-full py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#0B3B2C] via-[#14523C] to-[#0B3B2C] text-[#F3E3B8] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C9A04F]" />
                  <span>{language === 'ar' ? 'انضم لمسار المتوسط' : 'Join Intermediate Track'}</span>
                </button>
              </div>
            </div>

            {/* Track 3: C1-C2 */}
            <div className="bg-white rounded-3xl p-7 border-2 border-indigo-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                    {language === 'ar' ? 'متقدم' : 'Advanced'}
                  </span>
                  <span className="text-xs font-bold text-gray-400">{language === 'ar' ? 'المسار 3' : 'Track 3'}</span>
                </div>
                <h3 className="font-serif-luxury font-bold text-xl text-[#0B3B2C]">
                  {language === 'ar' ? 'مسار المتقدم' : 'Advanced Conversation Club'}
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {language === 'ar'
                    ? 'للمستويات المتقدمة لإتقان الخطابة، مناقشة القضايا العميقة، والتعبير الدقيق بلا تلعثم.'
                    : 'For advanced learners refining idiomatic subtlety, complex debates, executive communication, and professional discourse.'}
                </p>

                {/* Session Details */}
                <div className="mt-6 p-4 rounded-2xl bg-[#FAF7EF] border border-gray-200 text-xs space-y-2">
                  <div className="flex items-center justify-between text-gray-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      <span>{language === 'ar' ? 'مدة الجلسة:' : 'Duration:'}</span>
                    </span>
                    <span>{language === 'ar' ? '60 دقيقة' : '60 Min'}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      <span>{language === 'ar' ? 'الموعد المجدول:' : 'Schedule:'}</span>
                    </span>
                    <span className="text-[#0B3B2C]">
                      {settings?.tracks['C1-C2']?.isConfigured && settings.tracks['C1-C2'].dayTimeEn
                        ? (language === 'ar' && settings.tracks['C1-C2'].dayTimeAr ? settings.tracks['C1-C2'].dayTimeAr : settings.tracks['C1-C2'].dayTimeEn)
                        : (language === 'ar' ? 'يُحدد عند اكتمال المجموعة' : 'Scheduled per cohort')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gray-500" />
                      <span>{language === 'ar' ? 'المجموعات الفرعية:' : 'Breakout Group:'}</span>
                    </span>
                    <span>10–15 Learners Max</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => openModalWithTrack('C1-C2')}
                  className="w-full py-3 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>{language === 'ar' ? 'انضم لمسار المتقدم' : 'Join Advanced Track'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REGISTRATION INFORMATION */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A04F]/15 text-[#9A772E] text-xs font-bold uppercase tracking-wider">
                <Info className="w-3.5 h-3.5" />
                <span>{c.pricingTitle}</span>
              </div>

              <h3 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#0B3B2C]">
                {language === 'ar'
                  ? 'انضم إلى جلسات نادي المحادثة التفاعلية عبر الإنترنت'
                  : 'High-Impact Online Conversation Practice'}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {c.pricingNotice}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{language === 'ar' ? 'ساعة كاملة لكل جلسة' : 'Full 60-Minute Sessions'}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{language === 'ar' ? 'العربية فقط طوال اللقاء' : 'Arabic-Only Immersion'}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{language === 'ar' ? 'لا يُشترط الاشتراك في برنامج العربية' : 'Open without enrolling in a program'}</span>
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => openModalWithTrack('undecided')}
                className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A04F] to-[#9A772E] text-[#0B3B2C] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>{c.joinCta}</span>
              </button>

              {contacts.whatsapp && (
              <a
                href={`${contacts.whatsapp}?text=${encodeURIComponent(
                  'Hello Fusha Zone! I would like to join the Arabic Conversation Club sessions.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl font-semibold text-xs border border-gray-300 hover:bg-gray-50 text-gray-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>{language === 'ar' ? 'استفسار عبر الواتساب' : 'WhatsApp Inquiry'}</span>
              </a>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* REGISTRATION MODAL */}
      <JoinClubModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTrack={selectedTrackForModal}
      />

    </div>
  );
};
