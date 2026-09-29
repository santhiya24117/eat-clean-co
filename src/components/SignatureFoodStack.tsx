import { useState, useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  useReducedMotion,
  PanInfo,
} from 'motion/react';
import { ArrowUpRight, Sparkles, X, ChevronRight, RefreshCw } from 'lucide-react';
import { MENU_ITEM_IMAGES } from '../data/menuImages';
import { getItemWhatsAppUrl } from '../data/business';

interface StackDish {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tag: string;
}

const STACK_DISHES: StackDish[] = [
  {
    id: 'dish-1',
    name: 'Blueberry Smoothie Bowl',
    category: 'Smoothie Bowl',
    description: 'A refreshing blueberry smoothie bowl made for a wholesome start to the day.',
    image: MENU_ITEM_IMAGES['sb-blueberry'],
    tag: 'Cold & Energizing',
  },
  {
    id: 'dish-2',
    name: 'Quinoa Paneer Power Meal',
    category: 'Power Meal',
    description: 'Quinoa paired with paneer and garden vegetables for a wholesome, satisfying meal.',
    image: MENU_ITEM_IMAGES['qm-paneer'],
    tag: 'High Protein',
  },
  {
    id: 'dish-3',
    name: 'Tempeh Whole Wheat Sandwich',
    category: 'Sandwich',
    description: 'Seasoned grilled tempeh inside toasted whole wheat bread with fresh greens.',
    image: MENU_ITEM_IMAGES['sw-tempeh'],
    tag: 'Whole Wheat',
  },
  {
    id: 'dish-4',
    name: 'Peanut Banana Overnight Oats Jar',
    category: 'Overnight Oats',
    description: 'Peanut butter swirled with chilled rolled oats, banana slices and chia seeds.',
    image: MENU_ITEM_IMAGES['oo-peanut-banana'],
    tag: 'Slow Soaked',
  },
  {
    id: 'dish-5',
    name: 'Dark Choco Brownie',
    category: 'Guilt-Free Dessert',
    description: 'Fudgy dark chocolate brownie baked with oat flour and cocoa, without refined flour.',
    image: MENU_ITEM_IMAGES['gfd-dark-choco'],
    tag: 'Refined Flour Free',
  },
];

// Resting rotation angles for non-symmetrical natural stacking
const RESTING_ROTATIONS = [-3.5, 2.8, -1.8, 3.2, -2.5];

export function SignatureFoodStack() {
  const [cards, setCards] = useState<StackDish[]>(STACK_DISHES);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [selectedDish, setSelectedDish] = useState<StackDish | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Motion values for horizontal drag & rotation
  const dragX = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-200, 200], [-14, 14]);

  // Rotate top card to the back of the stack
  const cycleCardToBack = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    dragX.set(0);
  };

  // Autoplay cycle every 4200ms (pauses on hover or active drag)
  useEffect(() => {
    if (prefersReducedMotion || isHovered || isDragging) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      cycleCardToBack();
    }, 4200);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isHovered, isDragging, prefersReducedMotion]);

  // Handle Drag End with 140px threshold (110px mobile)
  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = window.innerWidth < 768 ? 110 : 140;

    if (Math.abs(info.offset.x) > threshold) {
      cycleCardToBack();
    } else {
      dragX.set(0);
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDish(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const topDish = cards[0];

  return (
    <section className="relative py-20 sm:py-28 md:py-36 w-full overflow-hidden bg-[#F7F4EC] border-t border-[#191B18]/8">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Heading & Content */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]">
              <Sparkles className="w-3.5 h-3.5 text-[#B56F43]" />
              <span>Signature Picks</span>
            </div>

            <h2 className="font-serif fluid-section-title font-normal tracking-tight text-[#191B18] mb-4 text-balance">
              Fresh favourites, <br />
              <span className="italic font-light text-[#26382D]">made for everyday cravings.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#191B18]/75 leading-relaxed font-light mb-6 max-w-lg">
              Swipe, drag or tap the stack to discover our most loved wholesome preparations. Freshly crafted in JP Nagar for sustained energy and clean satisfaction.
            </p>

            {/* Interactive Stack Indicators & Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={cycleCardToBack}
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E9E6D8] text-[#191B18] text-xs font-semibold uppercase tracking-wider hover:bg-[#D8CBB5] active:scale-95 transition-all cursor-pointer shadow-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Next Dish</span>
              </button>

              <button
                onClick={() => setSelectedDish(topDish)}
                className="min-h-[44px] inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#26382D] text-[#F7F4EC] text-xs font-semibold uppercase tracking-wider hover:bg-[#191B18] active:scale-95 transition-all cursor-pointer shadow-xs"
              >
                <span>View Recipe Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-xs text-[#89957D] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Drag card left/right or click to cycle</span>
            </div>
          </div>

          {/* Right Column: Cards Stack with Perfectly Centered Rotating Orbit */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="lg:col-span-6 relative flex justify-center items-center min-h-[420px] sm:min-h-[500px] select-none py-8"
          >
            {/* Perfectly Centered Rotating Freshness Orbit directly behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 flex items-center justify-center">
              <motion.div
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
                className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[540px] md:h-[540px] rounded-full border border-[#26382D]/20 flex items-center justify-center"
              >
                {/* Secondary Dashed Orbit Ring */}
                <div className="w-[82%] h-[82%] rounded-full border border-dashed border-[#B56F43]/35 flex items-center justify-center">
                  {/* Inner Accent Ring */}
                  <div className="w-[64%] h-[64%] rounded-full border border-[#26382D]/15 flex items-center justify-center">
                    {/* Soft Core Glow */}
                    <div className="w-24 h-24 rounded-full bg-[#E9E6D8]/50 blur-md" />
                  </div>
                </div>

                {/* Rotating Orbit Labels & Markers */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#26382D] font-semibold uppercase flex items-center gap-1.5 bg-[#F7F4EC] px-2.5 py-0.5 rounded-full border border-[#26382D]/15 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B56F43]" />
                  <span>FRESH</span>
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#26382D] font-semibold uppercase flex items-center gap-1.5 bg-[#F7F4EC] px-2.5 py-0.5 rounded-full border border-[#26382D]/15 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#26382D]" />
                  <span>EVERYDAY</span>
                </div>

                <div className="absolute left-1 top-1/2 -translate-y-1/2 -translate-x-1 text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#26382D] font-semibold uppercase flex items-center gap-1.5 bg-[#F7F4EC] px-2.5 py-0.5 rounded-full border border-[#26382D]/15 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#89957D]" />
                  <span>WHOLESOME</span>
                </div>

                <div className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-1 text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#26382D] font-semibold uppercase flex items-center gap-1.5 bg-[#F7F4EC] px-2.5 py-0.5 rounded-full border border-[#26382D]/15 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B56F43]" />
                  <span>BALANCED</span>
                </div>

                {/* Orbiting Satellite Accents */}
                <div className="absolute top-1/4 right-[12%] w-2.5 h-2.5 rounded-full bg-[#B56F43] shadow-xs" />
                <div className="absolute bottom-1/4 left-[12%] w-2.5 h-2.5 rounded-full bg-[#26382D] shadow-xs" />
              </motion.div>
            </div>

            {/* Floating Microcopy Annotations */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:block absolute -top-1 left-4 z-20 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#26382D] shadow-xs border border-[#191B18]/6"
            >
              ✦ Fresh Daily
            </motion.div>

            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:block absolute -bottom-1 right-4 z-20 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#89957D] shadow-xs border border-[#191B18]/6"
            >
              JP Nagar · Bengaluru
            </motion.div>

            {/* The Physical Card Stack Container (Layered above the rotating orbit) */}
            <div className="relative z-10 w-[280px] sm:w-[340px] md:w-[380px] h-[360px] sm:h-[420px] flex items-center justify-center">
              {cards.map((dish, depth) => {
                const isTop = depth === 0;
                // Depth calculations per formula:
                // scale = 1 - (depth * 0.045)
                // translateY = depth * 14px
                // zIndex = totalCards - depth
                // opacity: depth 0 -> 100%, 1 -> 100%, 2 -> 80%, 3+ -> 40%
                const scale = 1 - depth * 0.045;
                const translateY = depth * 14;
                const zIndex = cards.length - depth;
                const opacity = depth === 0 ? 1 : depth === 1 ? 1 : depth === 2 ? 0.8 : 0.4;
                const restingRot = RESTING_ROTATIONS[depth % RESTING_ROTATIONS.length];

                return (
                  <motion.div
                    key={dish.id}
                    layout
                    style={{
                      zIndex,
                      x: isTop ? dragX : 0,
                      rotate: isTop ? dragRotate : restingRot,
                    }}
                    animate={{
                      scale,
                      y: translateY,
                      opacity,
                      rotate: isTop ? 0 : restingRot,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                    drag={isTop ? 'x' : false}
                    dragElastic={0.65}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={handleDragEnd}
                    onClick={() => {
                      if (!isDragging) {
                        cycleCardToBack();
                      }
                    }}
                    className={`absolute inset-0 rounded-3xl overflow-hidden bg-white border border-[#191B18]/10 shadow-[0_16px_36px_rgba(25,27,24,0.10)] flex flex-col justify-between ${
                      isTop ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
                    }`}
                  >
                    {/* Food Photograph */}
                    <div className="relative w-full h-[62%] sm:h-[65%] overflow-hidden bg-[#E9E6D8]">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover pointer-events-none"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                      <span className="absolute top-3.5 left-3.5 text-[10px] font-semibold uppercase tracking-wider text-[#191B18] bg-white/95 px-3 py-1 rounded-full shadow-2xs">
                        {dish.tag}
                      </span>

                      <div className="absolute bottom-3 left-4 text-white text-[11px] uppercase tracking-wider font-semibold">
                        {dish.category}
                      </div>
                    </div>

                    {/* Card Content & Action Trigger */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-[#191B18] leading-snug line-clamp-1 mb-1">
                          {dish.name}
                        </h3>
                        <p className="text-xs text-[#191B18]/70 font-light line-clamp-2 leading-relaxed">
                          {dish.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#191B18]/6 flex items-center justify-between text-xs">
                        <span className="text-[#89957D] font-medium text-[11px]">
                          Tap to flip stack
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDish(dish);
                          }}
                          className="inline-flex items-center gap-1 text-[#26382D] font-semibold hover:text-[#B56F43] transition-colors p-1 cursor-pointer"
                        >
                          <span>Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Recipe / Food Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div
            onClick={() => setSelectedDish(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#F7F4EC] rounded-3xl overflow-hidden shadow-2xl border border-[#191B18]/10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDish(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 text-[#191B18] flex items-center justify-center hover:bg-white active:scale-95 shadow-md transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/10] w-full bg-[#E9E6D8] overflow-hidden">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-5 text-[11px] font-semibold uppercase tracking-wider text-white bg-[#26382D]/85 backdrop-blur-xs px-3 py-1 rounded-full">
                  {selectedDish.category}
                </span>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-[#89957D] block mb-1">
                    Signature Pick
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#191B18]">
                    {selectedDish.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#191B18]/80 leading-relaxed font-light">
                  {selectedDish.description}
                </p>

                <div className="pt-4 border-t border-[#191B18]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-[#191B18]/60">
                    Prepared fresh to order in JP Nagar
                  </div>

                  <a
                    href={getItemWhatsAppUrl(selectedDish.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#26382D] text-[#F7F4EC] text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#191B18] active:scale-95 transition-all shadow-md whitespace-nowrap"
                  >
                    <span>Order on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
