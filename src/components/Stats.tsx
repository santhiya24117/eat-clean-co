import { Star, MapPin, Award, IndianRupee } from 'lucide-react';
import { motion } from 'motion/react';
import { GOOGLE_RATING, REVIEW_COUNT, PRICE_RANGE } from '../data/business';

export function Stats() {
  const stats = [
    {
      value: `${GOOGLE_RATING} ★`,
      label: 'Google Rating',
      subtext: 'High customer satisfaction',
      icon: Star,
    },
    {
      value: `${REVIEW_COUNT}+`,
      label: 'Google Reviews',
      subtext: 'Local diners in Bengaluru',
      icon: Award,
    },
    {
      value: PRICE_RANGE,
      label: 'Typical Spend',
      subtext: 'Per person everyday dining',
      icon: IndianRupee,
    },
    {
      value: 'JP Nagar',
      label: 'Bengaluru',
      subtext: '24th Main Road location',
      icon: MapPin,
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-[#191B18]/8 w-full">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#191B18]/6 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E9E6D8] text-[#26382D] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#89957D]">
                      {item.label}
                    </span>
                  </div>

                  <div className="font-serif fluid-stat-number font-medium text-[#26382D] tracking-tight tabular-nums mb-1 whitespace-nowrap">
                    {item.value}
                  </div>
                </div>

                <div className="text-xs text-[#191B18]/60 font-light mt-2 pt-2 border-t border-[#191B18]/5">
                  {item.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
