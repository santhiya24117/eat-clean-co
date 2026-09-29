import { GalleryItem } from '../types';
import { MENU_ITEM_IMAGES } from './menuImages';
import { IMAGES } from './images';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Blueberry Smoothie Bowl with Chia Seeds',
    tag: '#EatCleanBengaluru',
    image: MENU_ITEM_IMAGES['sb-blueberry'],
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'g-2',
    title: 'Slow-Soaked Overnight Oats Jars',
    tag: '#WholesomeMornings',
    image: MENU_ITEM_IMAGES['oo-blueberry'],
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g-3',
    title: 'Cold-Pressed ABC Juice and Fresh Elixirs',
    tag: '#PureVitality',
    image: MENU_ITEM_IMAGES['fj-abc'],
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g-4',
    title: 'Quinoa Paneer Power Bowl with Garden Herbs',
    tag: '#CleanProtein',
    image: MENU_ITEM_IMAGES['qm-paneer'],
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'g-5',
    title: 'Fudgy 70% Dark Cocoa Brownie',
    tag: '#GuiltFreeTreats',
    image: MENU_ITEM_IMAGES['gfd-choco-nuts'],
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g-6',
    title: 'Peaceful Outdoor Street-Side Seating in JP Nagar',
    tag: '#CafeMoments',
    image: IMAGES.atmosphereOutdoor,
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'g-7',
    title: 'Eco-Conscious Takeaway Packaging',
    tag: '#MindfulChoices',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g-8',
    title: 'Freshly Brewed Chikmagalur Cold Coffee',
    tag: '#BengaluruRoast',
    image: MENU_ITEM_IMAGES['cc-classic'],
    span: 'md:col-span-1 md:row-span-1',
  },
];
