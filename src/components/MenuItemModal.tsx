import { X, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { getItemWhatsAppUrl } from '../data/business';

interface MenuItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function MenuItemModal({ item, onClose }: MenuItemModalProps) {
  if (!item) return null;

  const whatsappUrl = getItemWhatsAppUrl(item.name);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[95%] sm:w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#F7F4EC] rounded-3xl shadow-2xl border border-[#191B18]/10 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button (Min 44x44px touch target) */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-11 h-11 rounded-full bg-white/95 text-[#191B18] flex items-center justify-center hover:bg-white active:scale-95 transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Item Image */}
        {item.image && (
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#E9E6D8] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            {item.highlight && (
              <span className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-white bg-[#26382D]/85 backdrop-blur-xs px-3 py-1 rounded-full">
                {item.highlight}
              </span>
            )}
          </div>
        )}

        {/* Item Details */}
        <div className="p-5 sm:p-8 space-y-4 sm:space-y-5">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-[#89957D]">
              {item.category.replace('-', ' ')}
            </span>
            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-semibold text-[#191B18] mt-1">
              {item.name}
            </h3>
          </div>

          <p className="text-xs sm:text-base text-[#191B18]/80 leading-relaxed font-light">
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#26382D] bg-[#E9E6D8] px-2.5 sm:px-3 py-1 rounded-md"
                >
                  <Sparkles className="w-3 h-3 text-[#B56F43]" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          )}

          {/* Add-ons note if present */}
          {item.addOns && item.addOns.length > 0 && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#191B18]/5 text-xs text-[#191B18]/80 space-y-1">
              <span className="font-semibold uppercase tracking-wider text-[#26382D]">
                Customization Options:
              </span>
              <ul className="space-y-1 pt-1">
                {item.addOns.map((add, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-xs text-[#191B18]/70">
                    <Check className="w-3.5 h-3.5 text-[#B56F43] shrink-0" />
                    <span>{add}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Bar with Thumb-Friendly Button (Min 48px height) */}
          <div className="pt-3 sm:pt-4 border-t border-[#191B18]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] sm:text-xs text-[#191B18]/60 text-center sm:text-left">
              Direct order with our JP Nagar café team
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#26382D] text-[#F7F4EC] text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#191B18] active:scale-95 transition-all shadow-md whitespace-nowrap"
            >
              <span>Order on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
