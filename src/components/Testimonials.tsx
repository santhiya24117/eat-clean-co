import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviews';
import { GOOGLE_RATING, REVIEW_COUNT } from '../data/business';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeReview = REVIEWS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-16 sm:py-24 w-full overflow-hidden">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]">
              <Sparkles className="w-3.5 h-3.5 text-[#B56F43]" />
              <span>Customer Reviews</span>
            </div>
            <h2 className="font-serif fluid-section-title font-normal tracking-tight text-[#191B18]">
              Loved by people who love eating well.
            </h2>
          </div>

          {/* Clean Google Rating Pill */}
          <div className="flex items-center gap-3 p-3 px-5 rounded-2xl bg-[#E9E6D8]/60 border border-[#191B18]/5 w-fit">
            <span className="font-serif text-2xl font-bold text-[#26382D] tabular-nums">
              {GOOGLE_RATING}
            </span>
            <div className="border-l border-[#191B18]/10 pl-3">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="text-[11px] text-[#191B18]/65 font-medium">
                {REVIEW_COUNT} Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Quote Card */}
        <div className="relative rounded-3xl bg-white border border-[#191B18]/8 p-6 sm:p-10 md:p-12 shadow-xs">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-[#E9E6D8]/50 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-1 text-amber-500 mb-4">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#191B18] leading-snug mb-6">
              “{activeReview.text}”
            </blockquote>

            <div className="flex items-center justify-between gap-4 pt-5 border-t border-[#191B18]/8">
              <div>
                <div className="font-medium text-sm text-[#191B18]">
                  {activeReview.author}
                </div>
                <div className="text-xs text-[#89957D]">
                  {activeReview.source}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-full border border-[#191B18]/15 flex items-center justify-center text-[#191B18] hover:bg-[#26382D] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-full border border-[#191B18]/15 flex items-center justify-center text-[#191B18] hover:bg-[#26382D] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
