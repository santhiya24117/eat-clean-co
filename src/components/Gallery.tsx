import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/business';

export function Gallery() {
  return (
    <section className="py-16 sm:py-24 w-full overflow-hidden">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]">
              <Sparkles className="w-3.5 h-3.5 text-[#B56F43]" />
              <span>Visual Journal</span>
            </div>
            <h2 className="font-serif fluid-section-title font-normal tracking-tight text-[#191B18]">
              Everyday Moments at the Café.
            </h2>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E9E6D8] text-[#191B18] text-xs uppercase tracking-wider font-semibold hover:bg-[#D8CBB5] active:scale-95 transition-all shadow-2xs w-fit"
          >
            <Instagram className="w-4 h-4 text-[#B56F43]" />
            <span>Follow {INSTAGRAM_HANDLE}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 auto-rows-[160px] sm:auto-rows-[220px]">
          {GALLERY_ITEMS.map((item) => (
            <a
              key={item.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${item.title} on Instagram`}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#E9E6D8] ${item.span || 'col-span-1 row-span-1'}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-3 sm:p-5 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D8CBB5] font-semibold mb-0.5">
                  {item.tag}
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm text-white font-medium leading-snug drop-shadow-xs line-clamp-2">
                  {item.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
