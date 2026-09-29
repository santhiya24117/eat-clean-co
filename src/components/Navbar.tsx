import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_NAME, getWhatsAppOrderUrl } from '../data/business';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Why Eat Clean', href: '#why' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EC]/95 backdrop-blur-md border-b border-[#191B18]/8 py-3 shadow-[0_4px_20px_rgba(25,27,24,0.03)]'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#26382D] hover:opacity-90 transition-opacity"
          >
            {BUSINESS_NAME}
          </a>

          {/* Desktop Navigation (Hidden on < 768px) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#191B18]/75">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#26382D] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Order Button */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppOrderUrl('Hi Eat Clean Co.! I’d like to place an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F7F4EC] bg-[#26382D] rounded-full hover:bg-[#191B18] transition-all shadow-xs active:scale-95 whitespace-nowrap"
            >
              <span>Order on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full text-[#191B18] hover:bg-[#E9E6D8] active:scale-95 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-xs"
          aria-hidden="true"
        />

        {/* Drawer Sheet */}
        <div
          className={`absolute top-0 right-0 left-0 bg-[#F7F4EC] border-b border-[#191B18]/12 px-6 pt-5 pb-8 shadow-2xl transition-transform duration-300 ease-out max-h-[90vh] overflow-y-auto ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#191B18]/10">
            <span className="text-xl font-serif font-bold text-[#26382D]">
              {BUSINESS_NAME}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E9E6D8] text-[#191B18] active:scale-95 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col py-4 divide-y divide-[#191B18]/6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-lg font-serif text-[#191B18] hover:text-[#26382D] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4">
            <a
              href={getWhatsAppOrderUrl('Hi Eat Clean Co.! I’d like to place an order from your menu.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold uppercase tracking-widest text-[#F7F4EC] bg-[#26382D] rounded-full hover:bg-[#191B18] transition-colors shadow-md active:scale-98"
            >
              <span>Order on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="mt-3 text-center text-xs text-[#191B18]/60">
              JP Nagar 2nd Phase · Bengaluru
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
