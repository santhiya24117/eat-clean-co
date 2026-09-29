import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { getWhatsAppOrderUrl } from '../data/business';
import { IMAGES } from '../data/images';

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 bg-[#26382D] text-[#F7F4EC] overflow-hidden w-full">
      {/* Background imagery */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={IMAGES.atmosphereWide}
          alt="Atmosphere at Eat Clean Co."
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#26382D] via-[#26382D]/80 to-[#26382D]" />
      </div>

      <div className="relative z-10 site-container text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#D8CBB5]">
          <span>Eat Clean Co. · JP Nagar Bengaluru</span>
        </div>

        {/* Display Headline */}
        <h2 className="font-serif fluid-hero-title font-normal tracking-tight text-[#F7F4EC] mb-4 text-balance">
          Good food. <br />
          Clean choices. <br />
          <span className="italic font-light text-[#D8CBB5]">Better days.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-sm sm:text-base md:text-lg text-[#F7F4EC]/80 font-light leading-relaxed max-w-xl mb-8">
          Walk into our JP Nagar café or order directly on WhatsApp.
        </p>

        {/* Action Buttons: Stacked on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#menu"
            className="min-h-[46px] inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#F7F4EC] text-[#26382D] text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-white active:scale-95 transition-all shadow-md text-center"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={getWhatsAppOrderUrl('Hi Eat Clean Co.! I’d like to place an order from your menu.')}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[46px] inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#B56F43] text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#a05d34] active:scale-95 transition-all shadow-md text-center"
          >
            <span>Order on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
