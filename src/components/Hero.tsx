import { ArrowDown, ArrowUpRight, Star, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { getWhatsAppOrderUrl, GOOGLE_RATING, REVIEW_COUNT } from '../data/business';
import { IMAGES } from '../data/images';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const titleLines = [
    { text: 'Eat Clean.', isItalic: false },
    { text: 'Feel Good.', isItalic: true },
  ];

  return (
    <section className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 w-full overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Hierarchy with Editorial Motion */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 w-full">
            {/* Small metadata badge with soft entrance */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#E9E6D8]/60 border border-[#191B18]/6 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B56F43]" />
              <span>Wholesome Food</span>
              <span aria-hidden="true">·</span>
              <span>JP Nagar · Bengaluru</span>
            </motion.div>

            {/* Main Headline with Staggered Blur Text Reveal */}
            <h1 className="font-serif fluid-hero-title font-normal text-[#191B18] text-balance mb-4">
              {titleLines.map((line, idx) => (
                <span key={line.text} className="block overflow-hidden">
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : 45,
                      filter: prefersReducedMotion ? 'none' : 'blur(8px)',
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                    }}
                    transition={{
                      duration: 0.85,
                      delay: 0.15 + idx * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={line.isItalic ? 'italic font-light text-[#26382D] inline-block' : 'inline-block'}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl font-serif italic text-[#B56F43] mb-3"
            >
              Wholesome food made for everyday living.
            </motion.p>

            {/* Secondary text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-[#191B18]/75 max-w-xl leading-relaxed mb-6 sm:mb-8 font-light"
            >
              Fresh, satisfying food for days when you want to eat well without giving up on flavour.
            </motion.p>

            {/* Action Buttons: Stacked on mobile, row on tablet/desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#menu"
                className="min-h-[46px] inline-flex items-center justify-center px-7 py-3 bg-[#26382D] text-[#F7F4EC] text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#191B18] transition-all shadow-sm active:scale-95 text-center"
              >
                Explore Menu
              </a>
              <a
                href={getWhatsAppOrderUrl('Hi Eat Clean Co.! I’d like to place an order from your menu.')}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#E9E6D8] text-[#191B18] text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#D8CBB5] transition-all active:scale-95 text-center"
              >
                <span>Order on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Food Visual Composition with Subtle Motion */}
          <div className="lg:col-span-5 relative flex justify-center items-center w-full">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-[#E9E6D8]/50 rounded-[2.5rem] -rotate-1 pointer-events-none -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#191B18]/6 bg-[#E9E6D8] group"
            >
              <img
                src={IMAGES.heroBowl}
                alt="Blueberry Smoothie Bowl at Eat Clean Co."
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] uppercase tracking-wider text-[#D8CBB5] font-semibold block mb-0.5">
                  Featured Dish
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  Blueberry Smoothie Bowl
                </h3>
                <p className="text-xs text-white/80 font-light mt-1 line-clamp-2">
                  A refreshing blueberry smoothie bowl made for a wholesome start to the day.
                </p>
              </div>

              {/* Floating Rating Badge with Spring Entrance */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-sm border border-[#191B18]/5 flex items-center gap-1.5 text-xs"
              >
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="font-semibold text-[#191B18]">{GOOGLE_RATING}</span>
                <span className="text-[#191B18]/60 text-[11px]">({REVIEW_COUNT})</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Subtle scroll down indicator (Desktop only) */}
        <div className="hidden lg:flex justify-center mt-12">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            href="#intro"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#191B18]/50 hover:text-[#26382D] transition-colors"
          >
            <span>Scroll down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
