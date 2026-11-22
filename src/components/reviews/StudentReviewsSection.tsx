import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { feedbackReviewsService } from '../../services/feedbackReviewsService';
import { FeedbackScreenshot, ReviewCategory } from '../../types/reviews';
import {
  MessageSquareQuote,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface StudentReviewsSectionProps {
  /** Maximum cards shown initially before clicking "View All Reviews". Omit to show all. */
  previewLimit?: number;
  /** Optional click handler if "View All Reviews" should navigate to a dedicated page instead of expanding inline */
  onViewAllNavigate?: () => void;
  showHeader?: boolean;
  className?: string;
}

export const StudentReviewsSection: React.FC<StudentReviewsSectionProps> = ({
  previewLimit,
  onViewAllNavigate,
  showHeader = true,
  className = ''
}) => {
  const { t, language, dir } = useLanguage();
  const [reviews, setReviews] = useState<FeedbackScreenshot[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | ReviewCategory>('all');
  const [showAll, setShowAll] = useState(!previewLimit);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const published = await feedbackReviewsService.getPublishedScreenshots();
      if (mounted && published.length > 0) {
        setReviews(published);
        setIsLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const presentCategories = useMemo(() => {
    const cats = new Set<ReviewCategory>();
    reviews.forEach((r) => {
      if (r.category && r.category !== 'none') {
        cats.add(r.category);
      }
    });
    return Array.from(cats);
  }, [reviews]);

  const filteredReviews = useMemo(() => {
    if (selectedCategory === 'all') return reviews;
    return reviews.filter((r) => r.category === selectedCategory);
  }, [reviews, selectedCategory]);

  const visibleReviews = useMemo(() => {
    if (showAll || !previewLimit) return filteredReviews;
    return filteredReviews.slice(0, previewLimit);
  }, [filteredReviews, showAll, previewLimit]);

  const hasMoreToShow = Boolean(previewLimit && filteredReviews.length > previewLimit);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => {
          if (prev === null) return null;
          if (dir === 'rtl') {
            return prev > 0 ? prev - 1 : filteredReviews.length - 1;
          }
          return prev < filteredReviews.length - 1 ? prev + 1 : 0;
        });
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => {
          if (prev === null) return null;
          if (dir === 'rtl') {
            return prev < filteredReviews.length - 1 ? prev + 1 : 0;
          }
          return prev > 0 ? prev - 1 : filteredReviews.length - 1;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredReviews.length, dir]);

  const getCategoryLabel = (cat: ReviewCategory) => {
    return t.reviewsSection.categories[cat] || '';
  };

  const activeLightboxItem =
    lightboxIndex !== null && filteredReviews[lightboxIndex]
      ? filteredReviews[lightboxIndex]
      : null;

  const goToPrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : filteredReviews.length - 1;
    });
  };

  const goToNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev < filteredReviews.length - 1 ? prev + 1 : 0;
    });
  };

  return (
    <section
      id="student-reviews"
      dir={dir}
      className={`py-16 sm:py-20 bg-gradient-to-b from-white via-[#FAF7EF] to-[#F3EDE2]/60 border-t border-[#C9A04F]/25 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B3B2C] text-[#F3E3B8] border border-[#C9A04F]/40 text-xs font-bold tracking-wide mb-3 shadow-sm">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#C9A04F]" aria-hidden="true" />
              <span>{t.reviewsSection.eyebrow}</span>
            </div>
            <h2 className="font-serif-luxury font-bold text-3xl sm:text-4xl text-[#0B3B2C]">
              {t.reviewsSection.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              {t.reviewsSection.subtitle}
            </p>
          </div>
        )}

        {/* Category Filter Tabs (shown only when published items use categories) */}
        {presentCategories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#0B3B2C] text-[#F3E3B8] shadow-md border border-[#C9A04F]/50'
                  : 'bg-white text-gray-700 border border-[#C9A04F]/30 hover:border-[#C9A04F]'
              }`}
            >
              {t.reviewsSection.categories.all} ({reviews.length})
            </button>
            {presentCategories.map((cat) => {
              const count = reviews.filter((r) => r.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0B3B2C] text-[#F3E3B8] shadow-md border border-[#C9A04F]/50'
                      : 'bg-white text-gray-700 border border-[#C9A04F]/30 hover:border-[#C9A04F]'
                  }`}
                >
                  {getCategoryLabel(cat)} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Loading skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-80 rounded-3xl bg-white border border-[#C9A04F]/20 animate-pulse p-4 flex flex-col justify-between"
              >
                <div className="w-full h-full rounded-2xl bg-[#F3EDE2]/60" />
              </div>
            ))}
          </div>
        ) : filteredReviews.length === 0 ? (
          /* Dignified Empty State (until administrator explicitly publishes screenshots) */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#C9A04F]/30 shadow-md text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#0B3B2C] text-[#C9A04F] border border-[#C9A04F]/40 flex items-center justify-center shadow">
              <Images className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="font-serif-luxury font-bold text-xl text-[#0B3B2C]">
              {t.reviewsSection.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t.reviewsSection.emptyNotice}
            </p>
          </div>
        ) : (
          <>
            {/* Screenshot Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleReviews.map((item, idx) => {
                const caption =
                  language === 'ar'
                    ? item.captionAr?.trim() || item.captionEn?.trim()
                    : item.captionEn?.trim() || item.captionAr?.trim();
                const hasCategory = item.category && item.category !== 'none';

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`${t.reviewsSection.clickToZoom}${caption ? `: ${caption}` : ''}`}
                    className="group text-start bg-white rounded-3xl p-3.5 sm:p-4 border-2 border-[#C9A04F]/30 shadow-md hover:border-[#C9A04F] hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#C9A04F]"
                  >
                    <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-[#F8F6F1] border border-[#C9A04F]/15 overflow-hidden flex items-center justify-center p-2">
                      <img
                        src={item.imageDataUrl}
                        alt={caption || getCategoryLabel(item.category) || t.reviewsSection.title}
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                      />

                      {/* Hover Zoom Overlay */}
                      <div className="absolute inset-0 bg-[#0B3B2C]/0 group-hover:bg-[#0B3B2C]/25 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3.5 py-2 rounded-xl bg-[#0B3B2C]/90 text-[#F3E3B8] border border-[#C9A04F]/50 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                          <ZoomIn className="w-4 h-4 text-[#C9A04F]" aria-hidden="true" />
                          <span>{t.reviewsSection.clickToZoom}</span>
                        </span>
                      </div>
                    </div>

                    {(hasCategory || caption) && (
                      <div className="pt-3.5 px-1.5 space-y-1.5">
                        {hasCategory && (
                          <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#0B3B2C]/5 border border-[#C9A04F]/30 text-[#9A772E] text-[11px] font-bold">
                            {getCategoryLabel(item.category)}
                          </span>
                        )}
                        {caption && (
                          <p className="text-xs sm:text-sm font-medium text-[#0B3B2C] leading-snug line-clamp-2">
                            {caption}
                          </p>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* View All Reviews / Show Less Toggle */}
            {hasMoreToShow && (
              <div className="mt-10 text-center">
                {onViewAllNavigate && !showAll ? (
                  <button
                    type="button"
                    onClick={onViewAllNavigate}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#0B3B2C] text-[#F3E3B8] border border-[#C9A04F]/50 hover:bg-[#14523C] shadow-lg transition-all"
                  >
                    <Images className="w-4 h-4 text-[#C9A04F]" aria-hidden="true" />
                    <span>
                      {t.reviewsSection.viewAll} ({filteredReviews.length})
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowAll((prev) => !prev)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#0B3B2C] text-[#F3E3B8] border border-[#C9A04F]/50 hover:bg-[#14523C] shadow-lg transition-all"
                  >
                    <Images className="w-4 h-4 text-[#C9A04F]" aria-hidden="true" />
                    <span>
                      {showAll
                        ? t.reviewsSection.showLess
                        : `${t.reviewsSection.viewAll} (${filteredReviews.length})`}
                    </span>
                    {showAll ? (
                      <ChevronUp className="w-4 h-4 text-[#C9A04F]" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#C9A04F]" aria-hidden="true" />
                    )}
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Accessible Lightbox Modal */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.reviewsSection.title}
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-[#062419]/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center"
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between gap-4 mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-[#0B3B2C] text-[#F3E3B8] border border-[#C9A04F]/40 text-xs font-bold font-mono">
                  {lightboxIndex + 1} / {filteredReviews.length}
                </span>
                {activeLightboxItem.category && activeLightboxItem.category !== 'none' && (
                  <span className="px-3 py-1 rounded-lg bg-[#C9A04F] text-[#0B3B2C] text-xs font-bold">
                    {getCategoryLabel(activeLightboxItem.category)}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label={t.reviewsSection.lightboxClose}
                className="w-10 h-10 rounded-xl bg-[#0B3B2C] text-[#F3E3B8] border border-[#C9A04F]/50 hover:bg-[#C9A04F] hover:text-[#0B3B2C] transition-colors flex items-center justify-center shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Stage with Prev/Next */}
            <div className="relative w-full flex items-center justify-center">
              {filteredReviews.length > 1 && (
                <button
                  type="button"
                  onClick={dir === 'rtl' ? goToNextLightbox : goToPrevLightbox}
                  aria-label={dir === 'rtl' ? t.reviewsSection.lightboxNext : t.reviewsSection.lightboxPrev}
                  className="absolute start-1 sm:-start-4 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B3B2C]/90 text-[#F3E3B8] border border-[#C9A04F]/60 hover:bg-[#C9A04F] hover:text-[#0B3B2C] transition-colors flex items-center justify-center shadow-xl"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              <div className="bg-white rounded-2xl p-2 sm:p-3 border-2 border-[#C9A04F]/50 shadow-2xl max-h-[78vh] flex items-center justify-center overflow-auto">
                <img
                  src={activeLightboxItem.imageDataUrl}
                  alt={
                    (language === 'ar'
                      ? activeLightboxItem.captionAr || activeLightboxItem.captionEn
                      : activeLightboxItem.captionEn || activeLightboxItem.captionAr) ||
                    t.reviewsSection.title
                  }
                  className="max-w-full max-h-[74vh] w-auto h-auto object-contain rounded-xl"
                />
              </div>

              {filteredReviews.length > 1 && (
                <button
                  type="button"
                  onClick={dir === 'rtl' ? goToPrevLightbox : goToNextLightbox}
                  aria-label={dir === 'rtl' ? t.reviewsSection.lightboxPrev : t.reviewsSection.lightboxNext}
                  className="absolute end-1 sm:-end-4 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B3B2C]/90 text-[#F3E3B8] border border-[#C9A04F]/60 hover:bg-[#C9A04F] hover:text-[#0B3B2C] transition-colors flex items-center justify-center shadow-xl"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Optional Caption */}
            {(activeLightboxItem.captionEn?.trim() || activeLightboxItem.captionAr?.trim()) && (
              <div className="mt-3 px-5 py-2.5 rounded-xl bg-[#0B3B2C]/95 border border-[#C9A04F]/35 text-center max-w-2xl">
                <p className="text-sm text-[#F3E3B8] font-medium">
                  {language === 'ar'
                    ? activeLightboxItem.captionAr?.trim() || activeLightboxItem.captionEn?.trim()
                    : activeLightboxItem.captionEn?.trim() || activeLightboxItem.captionAr?.trim()}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
