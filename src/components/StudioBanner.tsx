import { useState } from 'react';
import { Sparkles, X, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/business';

export function StudioBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Client presentation banner"
      className="relative z-50 bg-[#171A16] text-[#F7F4E8] text-xs py-2 px-4 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#B7D334] text-[#171A16] shrink-0 font-bold">
            <Sparkles className="w-2.5 h-2.5 fill-current" />
          </span>
          <span className="font-medium tracking-wide">
            <strong className="font-semibold text-white">SAZEON Digital Studio</strong>
            <span className="hidden sm:inline">
              {' '}· Brand & Digital Experience Presentation for{' '}
              <strong className="text-[#B7D334]">Eat Clean Co.</strong> (JP Nagar, Bengaluru)
            </span>
          </span>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`${WHATSAPP_BASE_URL}?text=Hi%20Eat%20Clean%20Co.!%20I'm%20viewing%20your%20website%20presentation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-[#DDE8A8] hover:text-[#B7D334] transition-colors font-medium"
          >
            <span>Live Concept Demo</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss studio banner"
            className="text-[#F7F4E8]/60 hover:text-white transition-colors p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
