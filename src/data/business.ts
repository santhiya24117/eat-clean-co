export const BUSINESS_NAME = 'Eat Clean Co.';
export const TAGLINE = 'Wholesome food for everyday living.';
export const PRIMARY_MESSAGE = 'Eat Clean. Feel Good.';
export const PHONE_NUMBER = '07829231223';
export const PHONE_DISPLAY = '078292 31223';
export const WHATSAPP_NUMBER = '917829231223';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const ADDRESS_LINES = [
  'No. 704, Ground Floor — North Facing',
  '14th Cross, 24th Main Road, 2nd Phase',
  'J. P. Nagar, Bengaluru, Karnataka 560078',
];

export const FULL_ADDRESS =
  'No. 704, Ground Floor — North Facing, 14th Cross, 24th Main Road, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078';

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Eat+Clean+Co+JP+Nagar+Bengaluru';

export const GOOGLE_RATING = '5.0';
export const REVIEW_COUNT = '89';
export const PRICE_RANGE = '₹200–₹400';

export const SERVICES = [
  { id: 'dine-in', label: 'Dine-In', description: 'Café seating in 2nd Phase JP Nagar' },
  { id: 'takeaway', label: 'Takeaway', description: 'Convenient pickup on 24th Main Road' },
  { id: 'delivery', label: 'Delivery', description: 'Mindful packaging delivered to your door' },
];

export const HOURS_NOTE = 'Check current hours on Google';

export const INSTAGRAM_HANDLE = '@eatcleanco.blr';
export const INSTAGRAM_URL = 'https://www.instagram.com/eatcleanco.blr?stkn=bTJpdDY5ZzV6cGVn';

export const STUDIO_CREDIT = {
  name: 'SAZEON Digital Studio',
  type: 'Client Presentation Mockup',
  year: '2026',
};

/**
 * Creates pre-filled WhatsApp link with sanitized text
 */
export function getWhatsAppOrderUrl(message?: string): string {
  const defaultText = 'Hi Eat Clean Co.! I’d like to know more about your menu and place an order.';
  const text = message || defaultText;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
}

export function getItemWhatsAppUrl(itemName: string): string {
  const text = `Hi Eat Clean Co.! I’m interested in the ${itemName}. Could you share availability and details?`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
}
