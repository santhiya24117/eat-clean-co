import { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  Compass,
  Navigation,
  UtensilsCrossed,
  ShoppingBag,
  Bike,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import {
  ADDRESS_LINES,
  FULL_ADDRESS,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  GOOGLE_MAPS_URL,
  HOURS_NOTE,
  getWhatsAppOrderUrl,
} from '../data/business';

export function Location() {
  const [copied, setCopied] = useState(false);

  const mapEmbedUrl =
    'https://maps.google.com/maps?q=Eat+Clean+Co+14th+Cross+Rd+24th+Main+Rd+2nd+Phase+JP+Nagar+Bengaluru+Karnataka+560078&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Eat+Clean+Co+JP+Nagar+Bengaluru+560078';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(FULL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#E9E6D8]/30 border-y border-[#191B18]/6 scroll-mt-20 w-full overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Location Details (approx 50%) */}
          <div className="lg:col-span-6 flex flex-col justify-center w-full">
            <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#89957D]">
              <Compass className="w-3.5 h-3.5 text-[#B56F43]" />
              <span>Location</span>
            </div>

            <h2 className="font-serif fluid-section-title font-normal tracking-tight text-[#191B18] mb-4">
              Come say hello.
            </h2>

            <p className="text-sm sm:text-base text-[#191B18]/75 leading-relaxed font-light mb-6 max-w-lg">
              Located on 24th Main Road in JP Nagar 2nd Phase, our café is easy to find for a quick meal or pickup.
            </p>

            {/* Address & Hours Cards */}
            <div className="space-y-3.5 mb-8 w-full">
              {/* Address with Copy Button */}
              <div className="flex items-start justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-[#191B18]/6 shadow-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E9E6D8] text-[#26382D] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#89957D] mb-1">
                      Café Address
                    </h4>
                    <div className="text-xs sm:text-sm font-medium text-[#191B18] space-y-0.5">
                      {ADDRESS_LINES.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  title="Copy full address"
                  className="w-9 h-9 flex items-center justify-center rounded-xl text-[#191B18]/60 hover:text-[#26382D] hover:bg-[#E9E6D8] active:scale-95 transition-all shrink-0"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone & Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-[#191B18]/6 shadow-xs">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E9E6D8] text-[#26382D] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#89957D] mb-1">
                      Phone / WhatsApp
                    </h4>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="text-xs sm:text-sm font-medium text-[#191B18] hover:text-[#26382D] transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-[#191B18]/6 shadow-xs">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E9E6D8] text-[#26382D] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#89957D] mb-1">
                      Operating Hours
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-[#191B18]">
                      {HOURS_NOTE}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#26382D] text-[#F7F4EC] text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#191B18] transition-all shadow-xs active:scale-95 text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={getWhatsAppOrderUrl('Hi Eat Clean Co.! I’d like to place an order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#191B18] text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#F7F4EC] border border-[#191B18]/10 transition-all active:scale-95 text-center"
              >
                <span>Order on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Responsive Interactive Map (approx 50%) */}
          <div className="lg:col-span-6 relative w-full">
            <div className="rounded-3xl overflow-hidden bg-white border border-[#191B18]/10 shadow-xs p-5 sm:p-6 w-full">
              {/* Header inside Map Card */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#191B18]/8">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#191B18]">
                    Eat Clean Co. (JP Nagar)
                  </h3>
                  <p className="text-[11px] text-[#89957D] font-medium">
                    24th Main Road · 14th Cross Bengaluru 560078
                  </p>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#26382D] font-semibold hover:text-[#B56F43] transition-colors p-1"
                >
                  <span className="hidden sm:inline">Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe: strictly constrained height (280-320px mobile, 400-440px desktop) */}
              <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden bg-[#E9E6D8] border border-[#191B18]/10">
                <iframe
                  title="Eat Clean Co. JP Nagar Bengaluru Google Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Confirmed Services: Dine-in, Takeaway, Delivery */}
              <div className="mt-4 pt-4 border-t border-[#191B18]/8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#26382D] block mb-2">
                  Services Available
                </span>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-[#E9E6D8]/50 border border-[#191B18]/5">
                    <UtensilsCrossed className="w-4 h-4 text-[#26382D] mx-auto mb-1" />
                    <span className="text-xs font-semibold text-[#191B18] block">Dine-in</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#E9E6D8]/50 border border-[#191B18]/5">
                    <ShoppingBag className="w-4 h-4 text-[#26382D] mx-auto mb-1" />
                    <span className="text-xs font-semibold text-[#191B18] block">Takeaway</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#E9E6D8]/50 border border-[#191B18]/5">
                    <Bike className="w-4 h-4 text-[#26382D] mx-auto mb-1" />
                    <span className="text-xs font-semibold text-[#191B18] block">Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
