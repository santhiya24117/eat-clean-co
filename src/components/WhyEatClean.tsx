import { Heart, Clock, Dumbbell, PackageCheck, Sparkles } from 'lucide-react';

export function WhyEatClean() {
  const pillars = [
    {
      label: 'Wholesome',
      title: 'Everyday Eating',
      description: 'Thoughtfully prepared food for everyday eating.',
      icon: Heart,
    },
    {
      label: 'Fresh',
      title: 'Prepared Daily',
      description: 'Freshly prepared choices for a satisfying meal.',
      icon: Clock,
    },
    {
      label: 'Protein Options',
      title: 'Balanced Choices',
      description: 'Choose from protein-focused meals and available add-ons.',
      icon: Dumbbell,
    },
    {
      label: 'Conscious',
      title: 'Mindful Practices',
      description: 'Eco-friendly packaging choices wherever possible.',
      icon: PackageCheck,
    },
  ];

  return (
    <section id="why" className="py-16 sm:py-24 bg-[#E9E6D8]/30 border-y border-[#191B18]/6 w-full">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]">
            <Sparkles className="w-3.5 h-3.5 text-[#B56F43]" />
            <span>Why Eat Clean</span>
          </div>
          <h2 className="font-serif fluid-section-title font-normal tracking-tight text-[#191B18]">
            Simple choices. Thoughtfully made.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#191B18]/70 font-light">
            We focus on wholesome food that fits comfortably into your everyday routine.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex flex-col p-6 rounded-3xl bg-white border border-[#191B18]/6 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E9E6D8] text-[#26382D] flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-[#B56F43] mb-1">
                  {pillar.label}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#191B18] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#191B18]/70 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
