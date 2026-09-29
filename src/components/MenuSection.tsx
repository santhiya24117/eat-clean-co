import { useState } from 'react';
import { Search, ArrowUpRight, Plus, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu';
import { MenuCategoryId, MenuItem } from '../types';
import { getItemWhatsAppUrl } from '../data/business';
import { MenuItemModal } from './MenuItemModal';

interface MenuSectionProps {
  activeCategory: MenuCategoryId;
  onCategoryChange: (category: MenuCategoryId) => void;
}

export function MenuSection({
  activeCategory,
  onCategoryChange,
}: MenuSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [dietaryTag, setDietaryTag] = useState<string>('all');

  const activeCategoryInfo = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  // Filter items based on active category, search query, and dietary tag
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (searchQuery.trim() !== '') {
      return matchesSearch;
    }

    const matchesCategory = item.category === activeCategory;

    const matchesTag =
      dietaryTag === 'all' ||
      (dietaryTag === 'protein' &&
        (item.name.toLowerCase().includes('protein') ||
          item.addOns?.some((a) => a.toLowerCase().includes('protein')))) ||
      (dietaryTag === 'signature' && item.isSignature);

    return matchesCategory && matchesTag;
  });

  // Animation variants for smooth staggered fade-and-slide
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.97,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 260,
        mass: 0.8,
        delay: Math.min(index * 0.035, 0.28),
      },
    }),
    exit: {
      opacity: 0,
      y: -14,
      scale: 0.95,
      transition: {
        duration: 0.18,
        ease: [0.32, 0, 0.67, 0],
      },
    },
  };

  return (
    <section id="menu" className="py-16 sm:py-24 scroll-mt-20 w-full overflow-hidden">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]">
              <Sparkles className="w-3.5 h-3.5 text-[#B56F43]" />
              <span>Café Menu</span>
            </div>
            <h2 className="font-serif fluid-section-title font-normal tracking-tight text-[#191B18]">
              Good food deserves your attention.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#191B18]/70 font-light leading-relaxed">
            Wholesome choices from breakfast bowls and oats to sandwiches and meals.
          </p>
        </div>

        {/* Search & Quick Tag Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#191B18]/40" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Tempeh, Brownie...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-2.5 rounded-full bg-white border border-[#191B18]/10 text-xs sm:text-sm text-[#191B18] placeholder-[#191B18]/40 focus:outline-none focus:ring-2 focus:ring-[#26382D]/20 focus:border-[#26382D] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#191B18]/50 hover:text-[#191B18] p-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Tag Filter Controls */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'protein', label: 'Protein Options' },
              { id: 'signature', label: 'Signatures' },
            ].map((tag) => {
              const isActive = dietaryTag === tag.id;
              return (
                <button
                  key={tag.id}
                  onClick={() => setDietaryTag(tag.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer touch-target ${
                    isActive
                      ? 'text-white'
                      : 'bg-[#E9E6D8] text-[#191B18]/70 hover:bg-[#D8CBB5]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeDietaryIndicator"
                      className="absolute inset-0 bg-[#26382D] rounded-full shadow-2xs -z-0"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                  <span className="relative z-10">{tag.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Category Selector */}
        {searchQuery.trim() === '' && (
          <div className="relative mb-8 pb-2 overflow-x-auto hide-scrollbar border-b border-[#191B18]/10 w-full">
            <div className="flex items-center gap-2 min-w-max pb-1">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onCategoryChange(cat.id)}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap touch-target ${
                      isActive
                        ? 'text-[#F7F4EC]'
                        : 'bg-white/80 text-[#191B18]/75 hover:bg-white hover:text-[#191B18]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-[#26382D] rounded-full shadow-sm -z-0"
                        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Category Subtitle & Add-on Banner */}
        {searchQuery.trim() === '' && activeCategoryInfo && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 mb-8 p-4 rounded-2xl bg-[#E9E6D8]/40 border border-[#191B18]/5"
            >
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#26382D]">
                  {activeCategoryInfo.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#191B18]/70 font-light">
                  {activeCategoryInfo.shortDesc}
                </p>
              </div>

              {activeCategoryInfo.addOnNote && (
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#B56F43] bg-white px-3 py-1.5 rounded-lg border border-[#191B18]/5 shadow-2xs">
                  {activeCategoryInfo.addOnNote}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Search Results Summary */}
        {searchQuery.trim() !== '' && (
          <div className="mb-6 text-xs sm:text-sm text-[#191B18]/70">
            Showing results for <strong className="text-[#26382D]">"{searchQuery}"</strong> ({filteredItems.length} items found)
          </div>
        )}

        {/* Responsive Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        {filteredItems.length === 0 ? (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-14 text-center rounded-3xl bg-white/50 border border-dashed border-[#191B18]/20"
          >
            <p className="font-serif text-lg sm:text-xl text-[#191B18]">No dishes found matching your selection.</p>
            <p className="text-xs text-[#191B18]/60 mt-1">Try another search term or explore all categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryTag('all');
              }}
              className="mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#26382D] text-white rounded-full hover:bg-[#191B18] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                return (
                  <motion.div
                    layout
                    key={item.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setSelectedItem(item)}
                    className="group relative flex flex-col justify-between h-full rounded-3xl bg-white border border-[#191B18]/6 overflow-hidden shadow-xs hover:shadow-md transition-shadow cursor-pointer will-change-transform"
                  >
                    {/* 1. Food Image (Fixed 16:10 Ratio) */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E9E6D8] shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                      {/* Signature Pill */}
                      {item.isSignature && (
                        <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/95 text-[#B56F43] shadow-xs">
                          Signature
                        </span>
                      )}

                      {/* Detail Quick View Trigger */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#191B18] flex items-center justify-center transition-colors group-hover:bg-[#26382D] group-hover:text-white shadow-xs">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>

                    {/* 2. Content Body (Flex Column) */}
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        {/* Category Label */}
                        <div className="text-[10px] uppercase tracking-wider font-semibold text-[#89957D] mb-1">
                          {item.category.replace('-', ' ')}
                        </div>

                        {/* Dish Name */}
                        <h4 className="font-serif fluid-card-title font-medium text-[#191B18] group-hover:text-[#26382D] transition-colors mb-2 leading-snug">
                          {item.name}
                        </h4>

                        {/* Short Factual Description (line-clamp-2 for equal card height) */}
                        <p className="text-xs sm:text-sm text-[#191B18]/70 font-light leading-relaxed mb-3 line-clamp-2">
                          {item.description}
                        </p>

                        {/* Optional Add-on info */}
                        {item.addOns && item.addOns.length > 0 && (
                          <div className="text-[10px] text-[#B56F43] font-medium mb-3 flex items-center gap-1 bg-[#F7F4EC] px-2.5 py-1 rounded-md">
                            <Check className="w-3 h-3 shrink-0" />
                            <span className="truncate">Add-on: {item.addOns[0]}</span>
                          </div>
                        )}
                      </div>

                      {/* 3. Action Row (Aligned to Bottom) */}
                      <div className="pt-3 border-t border-[#191B18]/6 flex items-center justify-between gap-2 mt-auto">
                        <span className="text-xs text-[#191B18]/50 font-light">
                          View details
                        </span>

                        <a
                          href={getItemWhatsAppUrl(item.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#26382D] text-[#F7F4EC] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#191B18] transition-colors shadow-2xs active:scale-95 whitespace-nowrap"
                        >
                          <span>Order on WhatsApp</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Modal Dialog */}
        <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
}
