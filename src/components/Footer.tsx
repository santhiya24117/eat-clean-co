import { ArrowUpRight } from 'lucide-react';
import {
  BUSINESS_NAME,
  TAGLINE,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  FULL_ADDRESS,
  INSTAGRAM_URL,
  WHATSAPP_BASE_URL,
  STUDIO_CREDIT,
} from '../data/business';

export function Footer() {
  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Why Eat Clean', href: '#why' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <footer className="bg-[#191B18] text-[#F7F4EC] pt-16 pb-20 sm:pb-12 border-t border-white/10 w-full">
      <div className="site-container">
        {/* Main Footer: Mobile single col, Tablet 2 col, Desktop 12 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              {BUSINESS_NAME}
            </span>
            <p className="text-xs sm:text-sm font-serif italic text-[#D8CBB5] max-w-sm">
              {TAGLINE}
            </p>
            <p className="text-xs text-[#F7F4EC]/60 leading-relaxed max-w-sm font-light">
              Everyday wholesome food in JP Nagar, Bengaluru.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#89957D]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F7F4EC]/75">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#89957D]">
              Visit & Connect
            </h4>
            <div className="space-y-1.5 text-xs text-[#F7F4EC]/70 leading-relaxed font-light">
              <p className="text-white font-normal">{FULL_ADDRESS}</p>
              <p>
                Phone / WhatsApp:{' '}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-white underline decoration-white/30 hover:decoration-white transition-all font-mono"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#D8CBB5] hover:text-white transition-colors py-1"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-white/20">·</span>
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#D8CBB5] hover:text-white transition-colors py-1"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F7F4EC]/50 font-light text-center sm:text-left">
          <p>© 2026 {BUSINESS_NAME}. All rights reserved.</p>

          <div className="flex items-center gap-1.5 text-xs text-[#D8CBB5]/80">
            <span>Designed by</span>
            <strong className="text-white font-medium">{STUDIO_CREDIT.name}</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
