import { ArrowRight, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/images';

export function Intro() {
  return (
    <section id="intro" className="py-16 sm:py-24 bg-[#E9E6D8]/40 border-y border-[#191B18]/6 w-full">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md bg-[#D8CBB5]">
              <img
                src={IMAGES.introPlate}
                alt="Fresh wholesome dining at Eat Clean Co."
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#D8CBB5] block mb-1">
                  Kitchen Focus
                </span>
                <p className="font-serif text-lg sm:text-xl font-light">
                  Freshly assembled everyday food.
                </p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 w-full">
            <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]">
              <Sparkles className="w-3.5 h-3.5 text-[#B56F43]" />
              <span>A Better Way To Eat</span>
            </div>

            <h2 className="font-serif fluid-section-title font-normal tracking-tight text-[#191B18] mb-6 text-balance">
              Healthy doesn’t have to mean boring.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#191B18]/80 leading-relaxed font-light">
              <p>
                At Eat Clean Co., wholesome food is made to be enjoyed — from smoothie bowls and overnight oats to quinoa meals, drinks and desserts.
              </p>
              <p className="text-sm sm:text-base text-[#191B18]/70">
                Located on 24th Main Road in JP Nagar 2nd Phase, our café serves fresh, balanced food for everyday living.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#191B18]/10 flex items-center justify-between gap-4">
              <span className="font-serif italic text-xl text-[#26382D]">
                “Good food, clean choices.”
              </span>
              <a
                href="#menu"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#B56F43] hover:text-[#191B18] transition-colors"
              >
                <span>View menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
