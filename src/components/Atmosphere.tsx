import { UtensilsCrossed, ShoppingBag, Bike, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/images';

export function Atmosphere() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#E9E6D8]/40 border-y border-[#191B18]/6 w-full">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]">
            <Sparkles className="w-3.5 h-3.5 text-[#B56F43]" />
            <span>Café Atmosphere</span>
          </div>
          <h2 className="font-serif fluid-section-title font-normal tracking-tight text-[#191B18]">
            A little space to slow down.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#191B18]/75 font-light leading-relaxed">
            A relaxed JP Nagar space for wholesome food, quiet conversations and everyday meals.
          </p>
        </div>

        {/* Atmosphere Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-10">
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden aspect-[16/10] shadow-md bg-[#D8CBB5]">
            <img
              src={IMAGES.atmosphereWide}
              alt="Interior of Eat Clean Co. café in JP Nagar"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[#D8CBB5]">JP Nagar 2nd Phase</span>
              <p className="font-serif text-lg sm:text-xl font-light">Warm wood, natural daylight & peaceful seating.</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xs bg-[#D8CBB5]">
              <img
                src={IMAGES.atmosphereOutdoor}
                alt="Outdoor seating at Eat Clean Co."
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white text-xs uppercase tracking-wider font-medium">
                Street-Side Tables
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#191B18]/6 shadow-xs">
              <h4 className="font-serif text-lg font-medium text-[#26382D] mb-1.5">
                Everyday Nourishment
              </h4>
              <p className="text-xs sm:text-sm text-[#191B18]/70 font-light leading-relaxed">
                Whether you drop in for a quick morning bowl or pick up dinner on your way home, our kitchen is designed to feel welcoming and unhurried.
              </p>
            </div>
          </div>
        </div>

        {/* Confirmed Services Modalities Bar: Dine-In, Takeaway, Delivery */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#191B18]/6 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#191B18]/8">
            <div className="flex items-center gap-3.5 justify-start pt-2 sm:pt-0 sm:pr-4">
              <div className="w-10 h-10 rounded-xl bg-[#E9E6D8] text-[#26382D] flex items-center justify-center shrink-0">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#191B18]">
                  Dine-In
                </h4>
                <p className="text-xs text-[#191B18]/60 mt-0.5">
                  Café seating in JP Nagar
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-start pt-4 sm:pt-0 sm:px-4">
              <div className="w-10 h-10 rounded-xl bg-[#E9E6D8] text-[#26382D] flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#191B18]">
                  Takeaway
                </h4>
                <p className="text-xs text-[#191B18]/60 mt-0.5">
                  Convenient counter pickup
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-start pt-4 sm:pt-0 sm:pl-4">
              <div className="w-10 h-10 rounded-xl bg-[#E9E6D8] text-[#26382D] flex items-center justify-center shrink-0">
                <Bike className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#191B18]">
                  Delivery
                </h4>
                <p className="text-xs text-[#191B18]/60 mt-0.5">
                  Delivered across South Bengaluru
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
