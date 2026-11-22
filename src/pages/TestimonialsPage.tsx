import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { StudentReviewsSection } from '../components/reviews/StudentReviewsSection';
import { VerifiedTestimonials } from '../components/reviews/VerifiedTestimonials';

interface TestimonialsPageProps {
  navigate: (route: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ navigate }) => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF7EF]">
      <StudentReviewsSection showHeader={true} />

      <VerifiedTestimonials />

      {/* Call to join */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center bg-[#0B3B2C] text-white p-10 rounded-3xl border border-[#C9A04F]/30">
          <h2 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#F3E3B8]">
            {language === 'ar' ? 'ابدأ قصة نجاحك الخاصة مع Fusha Zone' : 'Begin Your Own Success Story Today'}
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto mt-2 mb-6">
            {language === 'ar'
              ? 'انضم إلى زملائك وتعلم بالسرعة التي تريحك مع معلمين معتمدين.'
              : 'Join fellow ambitious learners and advance with certified native-level educators.'}
          </p>
          <button
            onClick={() => navigate('register')}
            className="px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A04F] to-[#9A772E] text-[#0B3B2C] hover:brightness-110 shadow-lg"
          >
            {t.nav.register}
          </button>
        </div>
      </div>
    </div>
  );
};
