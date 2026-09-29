import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useReducedMotion,
} from 'motion/react';

// Seamless wrap utility
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export function SignatureMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Scroll tracking for velocity & skew
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth out velocity for acceleration
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  // Calculate dynamic velocity factor based on scroll speed
  const velocityFactor = useTransform(smoothVelocity, [-2000, 0, 2000], [-3, 0, 3], {
    clamp: false,
  });

  // Dynamic subtle skew effect (-3deg to 3deg)
  const skewRaw = useTransform(smoothVelocity, [-1800, 0, 1800], [3.5, 0, -3.5]);
  const skew = useSpring(skewRaw, { damping: 30, stiffness: 240 });

  // Base motion value for infinite translation
  const baseX = useMotionValue(0);

  // Default speed (pixels/percentage per second)
  const baseSpeed = 4.5; // percentage per second
  const directionRef = useRef<number>(-1); // default right -> left

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion) return;

    const currentVelocity = velocityFactor.get();

    // Responsive direction influence: downward scroll accelerates leftward, upward can reverse
    if (currentVelocity > 0.2) {
      directionRef.current = -1;
    } else if (currentVelocity < -0.2) {
      directionRef.current = 1;
    }

    // Velocity multiplier (1x at rest, scales up smoothly during active scrolling)
    const speedMultiplier = 1 + Math.min(Math.abs(currentVelocity) * 1.8, 4.5);
    const hoverDampener = isHovered ? 0.65 : 1;

    // Advance position by delta time
    const moveDelta =
      directionRef.current * baseSpeed * speedMultiplier * hoverDampener * (delta / 1000);

    const newX = baseX.get() + moveDelta;
    // Seamless wrap between -50% and 0% across 4 identical content segments
    baseX.set(wrap(-50, 0, newX));
  });

  // Convert percentage motion value to CSS transform string
  const x = useTransform(baseX, (v) => `${v}%`);
  const skewX = useTransform(skew, (v) => `${prefersReducedMotion ? 0 : v}deg`);

  // Marquee item repeated phrase block
  const phrase = (
    <span className="inline-flex items-center whitespace-nowrap">
      <span>EAT CLEAN CO.</span>
      <span className="inline-block text-[0.62em] align-middle mx-3 sm:mx-5 md:mx-7 text-[#B56F43] transition-transform duration-300 group-hover:scale-110">
        ✦
      </span>
      <span>FRESH FOOD</span>
      <span className="inline-block text-[0.62em] align-middle mx-3 sm:mx-5 md:mx-7 text-[#B56F43] transition-transform duration-300 group-hover:scale-110">
        ✦
      </span>
      <span>GOOD ENERGY</span>
      <span className="inline-block text-[0.62em] align-middle mx-3 sm:mx-5 md:mx-7 text-[#B56F43] transition-transform duration-300 group-hover:scale-110">
        ✦
      </span>
      <span>EVERYDAY</span>
      <span className="inline-block text-[0.62em] align-middle mx-3 sm:mx-5 md:mx-7 text-[#B56F43] transition-transform duration-300 group-hover:scale-110">
        ✦
      </span>
    </span>
  );

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Eat Clean Co. Brand Statement"
      className="relative w-full overflow-hidden bg-[#26382D] text-[#F7F4EC] select-none py-3 sm:py-4 md:py-6 flex items-center border-y border-[#191B18]/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] h-[75px] sm:h-[100px] lg:h-[120px] will-change-transform z-20 group"
    >
      {/* Moving track with transform-based GPU acceleration & dynamic skew */}
      <motion.div
        style={{
          x: prefersReducedMotion ? '0%' : x,
          skewX,
        }}
        className="flex items-center min-w-max text-[32px] sm:text-[48px] md:text-[68px] lg:text-[88px] xl:text-[96px] font-black uppercase tracking-[-0.035em] leading-none transition-opacity duration-300 group-hover:opacity-100"
      >
        {/* 4 duplicated sets ensure seamless infinite loop without gaps */}
        <div className="flex items-center shrink-0 pr-4 sm:pr-8">{phrase}</div>
        <div className="flex items-center shrink-0 pr-4 sm:pr-8">{phrase}</div>
        <div className="flex items-center shrink-0 pr-4 sm:pr-8">{phrase}</div>
        <div className="flex items-center shrink-0 pr-4 sm:pr-8">{phrase}</div>
      </motion.div>
    </section>
  );
}
