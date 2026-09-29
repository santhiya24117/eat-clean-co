import { Review } from '../types';

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'JP Nagar Diner',
    rating: 5,
    text: 'Quite little place to grab something healthy! Love the setup, silent street side tables, food is tasty and ingredients look fresh.',
    source: 'Google Review',
    tag: 'Dine-In & Street-Side Tables',
  },
  {
    id: 'rev-2',
    author: 'JP Nagar Resident',
    rating: 5,
    text: 'simple, healthy, filling meal with potential for different customizations! homecooked style :)',
    source: 'Google Review',
    tag: 'Customizable Meals',
  },
  {
    id: 'rev-3',
    author: 'Verified Customer',
    rating: 5,
    text: 'The dark chocolate cake was fresh, rich and delicious.',
    source: 'Google Review',
    tag: 'Guilt-Free Treats',
  },
];
