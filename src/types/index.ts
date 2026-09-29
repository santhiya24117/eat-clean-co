export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  description: string;
  tags?: string[];
  addOns?: string[];
  isSignature?: boolean;
  image?: string;
  caloriesEstimate?: string;
  highlight?: string;
}

export type MenuCategoryId =
  | 'smoothie-bowls'
  | 'yogurt-bowls'
  | 'fresh-juices'
  | 'overnight-oats'
  | 'sandwiches'
  | 'quinoa-meals'
  | 'stir-fried-veggies'
  | 'comfort-soups'
  | 'oats-smoothies'
  | 'cold-coffee'
  | 'fermented-drinks'
  | 'guilt-free-desserts';

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  shortDesc: string;
  addOnNote?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  date?: string;
  tag?: string;
}

export interface CravingCategory {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
  description: string;
  image: string;
  bgColor: string;
  categoryFilter: MenuCategoryId;
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  span?: string;
}
