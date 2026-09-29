import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CRAVINGS_DATA } from '../data/cravings';
import { MenuCategoryId } from '../types';

interface CravingSectionProps {
  onSelectCategory: (categoryId: MenuCategoryId) => void;
}

export function CravingSection({ onSelectCategory }: CravingSectionProps) {
  const [activeCravingId, setActiveCravingId] = useState<string>(CRAVINGS_DATA[0].id);

  const activeCraving =
    CRAVINGS_DATA.find((c) => c.id === activeCravingId) || CRAVINGS_DATA[0];

  const handleSelect = (categoryId: MenuCategoryId) => {
    onSelectCategory(categoryId);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#E9E6D8]/40 border-y border-[#191B18]/6 w-full">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]">
            <Sparkles className="w-3.5 h-3.5 text-[#B56F43]" />
            <span>Food Finder</span>
          </div>
          <h2 className="font-serif fluid-section-title font-normal tracking-tight text-[#191B18]">
            What are you craving today?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#191B18]/70 font-light">
            Choose what fits your mood right now.
          </p>
        </div>

        {/* Layout: Options on Left, Preview Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Options: Vertical list on tablet/desktop, clean tabs on mobile */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {CRAVINGS_DATA.map((craving) => {
              const isActive = craving.id === activeCravingId;
              return (
                <div
                  key={craving.id}
                  onClick={() => setActiveCravingId(craving.id)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-white border-[#26382D]/20 shadow-sm'
                      : 'bg-white/60 hover:bg-white/80 border-[#191B18]/5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#89957D] block mb-0.5">
                        {craving.subtitle}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-[#191B18]">
                        {craving.title}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${
                        isActive
                          ? 'bg-[#26382D] text-white'
                          : 'bg-[#E9E6D8] text-[#191B18]'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* 2-4 Relevant Dishes */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {craving.items.map((dishName, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-[#191B18]/70 bg-[#F7F4EC] px-2.5 py-0.5 rounded-md"
                      >
                        {dishName}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Visual Preview Card */}
          <div className="lg:col-span-6 relative flex flex-col justify-end rounded-3xl overflow-hidden shadow-sm border border-[#191B18]/5 min-h-[320px] sm:min-h-[380px] bg-[#D8CBB5]">
            <img
              src={activeCraving.image}
              alt={activeCraving.title}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            <div className="relative p-6 sm:p-8 text-white z-10">
              <span className="text-[10px] uppercase tracking-widest text-[#D8CBB5] font-semibold block mb-1">
                Suggested Category
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-light mb-2">
                {activeCraving.title}
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-5 max-w-md">
                {activeCraving.description}
              </p>

              <button
                onClick={() => handleSelect(activeCraving.categoryFilter)}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-[#191B18] text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#F7F4EC] active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
