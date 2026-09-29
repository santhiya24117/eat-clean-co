import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppOrderUrl } from '../data/business';

export function WhatsAppFloating() {
  const whatsappUrl = getWhatsAppOrderUrl(
    'Hi Eat Clean Co.! I’d like to know more about your menu and place an order.'
  );

  return (
    <aside aria-label="Quick contact" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order or enquire with Eat Clean Co. on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-2.5 sm:px-4 sm:py-3 bg-[#26382D] text-[#F7F4EC] rounded-full shadow-[0_10px_30px_rgba(25,27,24,0.3)] border border-white/15 hover:bg-[#191B18] active:scale-95 transition-all duration-300 min-h-[46px]"
      >
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-emerald-400 text-emerald-400" />
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="text-[9px] sm:text-[10px] text-[#D8CBB5] uppercase tracking-wider font-semibold">
            Order / Enquire
          </span>
          <span className="text-xs sm:text-xs font-semibold tracking-wide text-white mt-0.5">
            WhatsApp
          </span>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#D8CBB5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
      </a>
    </aside>
  );
}
