import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Award, 
  Globe, 
  Users, 
  Sparkles, 
  BookOpen, 
  CheckCircle, 
  GraduationCap
} from 'lucide-react';

interface AboutPageProps {
  navigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const { t, language } = useLanguage();

  const values = [
    {
      titleEn: 'Academic Authenticity',
      titleAr: 'أصالة أكاديمية',
      descEn: 'Grammar, syntax and phonetics that give you a clear and strong foundation.',
      descAr: 'قواعد ونحو وصوتيات تمنحك أساسا واضحا وقويا.'
    },
    {
      titleEn: 'Conversational Fluency',
      titleAr: 'طلاقة حوارية',
      descEn: 'Practical practice that helps you speak with confidence from the very beginning.',
      descAr: 'ممارسة عملية تساعدك على التحدث بثقة من البداية.'
    },
    {
      titleEn: 'Your Goals First',
      titleAr: 'أهدافك أولا',
      descEn: 'Plans that suit study, work, getting closer to the culture, or the Holy Quran.',
      descAr: 'خطط تناسب الدراسة أو العمل أو التقرب من الثقافة والقرآن الكريم.'
    },
    {
      titleEn: 'Flexibility That Fits Life',
      titleAr: 'مرونة تناسب الحياة',
      descEn: 'Choose the package that keeps you going, even with a busy schedule. Learn online from anywhere.',
      descAr: 'اختر الباقة التي تمنحك الاستمرارية، حتى مع جدول مزدحم. تعلم أونلاين من أي مكان.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7EF] py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A04F]">
            {t.brand.tagline}
          </span>
          <h1 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#0B3B2C] mt-2">
            {language === 'ar' ? 'عن أكاديمية Fusha Zone' : 'About Fusha Zone Academy'}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            {t.brand.subSlogan}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Mission & Positioning Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C9A04F]/30 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A04F] block">
                {language === 'ar' ? 'رسالتنا التعليمية' : 'Our Educational Mission'}
              </span>
              <h2 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#0B3B2C]">
                {language === 'ar' ? 'نتعلم اللغة لنقترب من عالمها، لا لنحفظها فقط.' : 'We learn the language to come closer to its world, not just to memorize it.'}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {language === 'ar'
                  ? 'في Fusha Zone نؤمن أن تعلم اللغة مفتاح للثقافة. لذلك صممنا منهجا يوازن بذكاء بين الرصانة الأكاديمية، من قواعد ونحو وصوتيات، وبين القدرة على التواصل الفوري والواثق. منهج مخصص لأهداف كل طالب.'
                  : 'At Fusha Zone we believe that learning a language is a key to its culture. That is why we designed a curriculum that smartly balances academic rigor (grammar, syntax and phonetics) with the ability to communicate instantly and confidently, tailored to each student’s goals.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-xl bg-[#0B3B2C] text-[#F3E3B8] text-xs font-semibold">
                  {language === 'ar' ? 'تعليم عبر الإنترنت فقط' : 'Online Only Format'}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#FAF7EF] border border-[#C9A04F]/40 text-[#0B3B2C] text-xs font-semibold">
                  {language === 'ar' ? 'للكبار والأطفال' : 'Adults & Kids'}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#FAF7EF] border border-[#C9A04F]/40 text-[#0B3B2C] text-xs font-semibold">
                  {language === 'ar' ? 'معلمون متحدثون أصليون' : 'Native-speaking teachers'}
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0B3B2C] to-[#11503A] text-white p-8 rounded-2xl border border-[#C9A04F]/30 shadow-inner space-y-4">
              <h3 className="font-serif-luxury font-bold text-xl text-[#F3E3B8]">
                {language === 'ar' ? 'لمن صُممت Fusha Zone؟' : 'Who Fusha Zone Is For'}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C9A04F]" />
                  <span>{language === 'ar' ? 'الناطقون بغير العربية الراغبون في تعلمها من البداية' : 'Non-Arabic speakers who want to learn Arabic from the start'}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C9A04F]" />
                  <span>{language === 'ar' ? 'من يريد قراءة القرآن الكريم وتجويده وحفظه' : 'Those who want to read, recite and memorize the Holy Quran'}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C9A04F]" />
                  <span>{language === 'ar' ? 'الأطفال (العربية والقرآن بأسلوب ممتع)' : 'Children (Arabic and Quran in a fun way)'}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C9A04F]" />
                  <span>{language === 'ar' ? 'المتعلمون الساعون لكسر حاجز الخوف والتحدث بطلاقة' : 'Learners who want to break the fear of speaking'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Leadership / Founder Section (Strictly no personal name) */}
        <div className="bg-[#0B3B2C] text-white rounded-3xl p-8 sm:p-12 border border-[#C9A04F]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Fusha Zone Academy Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border-2 border-[#C9A04F]/50 shadow-xl bg-[#062419]">
                <img
                  src="/brand/fusha-zone-logo.png"
                  alt="Fusha Zone"
                  className="w-full h-auto block p-8"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A04F]">
                {t.founder.sectionTitle}
              </span>
              <h2 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-white">
                {t.founder.roleTitle}
              </h2>
              <blockquote className="border-l-4 border-[#C9A04F] pl-4 italic text-base sm:text-lg text-[#F3E3B8] font-serif-luxury">
                {t.founder.quote}
              </blockquote>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.founder.bio1}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.founder.bio2}
              </p>
              <div className="pt-2 space-y-2">
                {t.founder.credentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <Award className="w-4 h-4 text-[#C9A04F] flex-shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Pillars & Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A04F]">
              Academic Pillars
            </span>
            <h2 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#0B3B2C] mt-1">
              {language === 'ar' ? 'قيم وركائز التدريس بالأكاديمية' : 'Our Educational Philosophy'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:border-[#C9A04F]/50 transition-all">
                <h3 className="font-serif-luxury font-bold text-lg text-[#0B3B2C] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C9A04F]" />
                  <span>{language === 'ar' ? v.titleAr : v.titleEn}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {language === 'ar' ? v.descAr : v.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
