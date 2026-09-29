import { CravingCategory } from '../types';
import { IMAGES } from './images';

export const CRAVINGS_DATA: CravingCategory[] = [
  {
    id: 'start-fresh',
    title: 'Start Fresh',
    subtitle: 'Morning Clarity & Light Energy',
    items: ['Smoothie Bowls', 'Fresh Juices', 'Yogurt Bowls'],
    description: 'Refreshing fruit bowls and chilled juices made for an energizing start to your day.',
    image: IMAGES.signatureBlueberry,
    bgColor: '#E9EFE8',
    categoryFilter: 'smoothie-bowls',
  },
  {
    id: 'power-up',
    title: 'Power Up',
    subtitle: 'Protein & Balanced Fuel',
    items: ['Quinoa Meals', 'Whole Wheat Sandwiches', 'High Protein Cold Coffee'],
    description: 'Satisfying dishes paired with paneer, tofu, tempeh, or soya chunks to fuel your day.',
    image: IMAGES.signatureQuinoa,
    bgColor: '#EBE6DC',
    categoryFilter: 'quinoa-meals',
  },
  {
    id: 'warm-comforting',
    title: 'Warm & Comforting',
    subtitle: 'Warm Broths & Sautéed Greens',
    items: ['Broccoli & Lentil Soups', 'Stir-Fried Veggies', 'Moringa Soup'],
    description: 'Soothing warm soups and freshly tossed garden vegetables for a comforting meal.',
    image: IMAGES.comfortSoups,
    bgColor: '#EDEBE4',
    categoryFilter: 'comfort-soups',
  },
  {
    id: 'treat-yourself',
    title: 'Treat Yourself',
    subtitle: 'Wholesome Sweet Treats',
    items: ['Choco Brownies', 'Banana Muffins', 'Choco Cold Coffee'],
    description: 'Satisfying treats made without refined flour for a wholesome sweet bite.',
    image: IMAGES.signatureBrownie,
    bgColor: '#F1E9DF',
    categoryFilter: 'guilt-free-desserts',
  },
];
