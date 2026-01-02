// Helper function to get image path from public/img directory
const getImage = (name: string) => `${import.meta.env.BASE_URL}img/${name}`;

export interface Product {
  id: string;
  title: string;
  price: string;
  mediaBg: string;
  imageSrc: string;
  underlineTitle: boolean;
}

export interface CategoryNavItem {
  label: string;
  href: string;
}

export interface CategoryTile {
  label: string;
  href: string;
  mediaBg: string;
  imageSrc: string;
}

export interface QuoteBlock {
  quote: string;
  author: string;
  imageSrc: string;
}

export interface PromoBlock {
  title: string;
  body: string;
  cta: string;
  imageSrc: string;
}

export interface Hero {
  imageSrc: string;
  titleLines: string[];
}

export interface ProductVariant {
  id: string;
  label: string;
  price: string;
}

export interface ProductDetail {
  title: string;
  imageSrc: string;
  mediaBg: string;
  variants: ProductVariant[];
}

export const bundleProducts: Product[] = [
  {
    id: 'green-bundle',
    title: 'Green Bundle',
    price: '$64.95 CAD',
    mediaBg: '#9fcbb4',
    imageSrc: getImage('bundle_1.webp'),
    underlineTitle: false,
  },
  {
    id: 'standard-bundle',
    title: 'Standard Bundle',
    price: '$64.95 CAD',
    mediaBg: '#efc38d',
    imageSrc: getImage('bundle_2.webp'),
    underlineTitle: false,
  },
  {
    id: 'days-of-week',
    title: 'Days of the Week Greens',
    price: '$29.95 CAD',
    mediaBg: '#e2eee7',
    imageSrc: getImage('bundle_3.webp'),
    underlineTitle: false,
  },
  {
    id: 'immunity-kit',
    title: 'Immunity Kit',
    price: '$39.95 CAD',
    mediaBg: '#f2d8dd',
    imageSrc: getImage('bundle_4.webp'),
    underlineTitle: false,
  },
];

export const drinkProducts: Product[] = [
  {
    id: 'genius',
    title: 'Genius',
    price: 'From $7.95 CAD',
    mediaBg: '#ffffff',
    imageSrc: getImage('bottle_1.webp'),
    underlineTitle: false,
  },
  {
    id: 'stranger',
    title: 'The Stranger',
    price: 'From $8.95 CAD',
    mediaBg: '#ffffff',
    imageSrc: getImage('bottle_2.webp'),
    underlineTitle: false,
  },
  {
    id: 'giver',
    title: 'The Giver',
    price: 'From $8.95 CAD',
    mediaBg: '#ffffff',
    imageSrc: getImage('bottle_3.webp'),
    underlineTitle: false,
  },
  {
    id: 'wing-man',
    title: 'Wing Man',
    price: 'From $7.95 CAD',
    mediaBg: '#ffffff',
    imageSrc: getImage('bottle_4.webp'),
    underlineTitle: true,
  },
];

export const categoryNav: CategoryNavItem[] = [
  { label: 'Boosters', href: '#' },
  { label: 'Kombuchas', href: '#' },
  { label: 'Cold-pressed Juices', href: '#' },
];

export const categoryTiles: CategoryTile[] = [
  { label: 'Boosters', href: '#', mediaBg: '#f2d7b8', imageSrc: getImage('multiple_bottles_1.webp') },
  { label: 'Kombuchas', href: '#', mediaBg: '#f2dbe9', imageSrc: getImage('multiple_bottles_2.webp') },
  { label: 'Cold-pressed Juices', href: '#', mediaBg: '#cfe4ee', imageSrc: getImage('multiple_bottles_3.webp') },
];

export const quoteBlock: QuoteBlock = {
  quote: '"This spicy, pocket-sized booster is the healthy kickstart I need to start my day."',
  author: '— JANE S.',
  imageSrc: getImage('hero_2.webp'),
};

export const promoBlock: PromoBlock = {
  title: 'Take a sip',
  body:
    'Sweet, tart, and oh-so-refreshing, our low-sugar, probiotic lemonades taste like summer in a bottle.',
  cta: 'Shop Lemonades',
  imageSrc: getImage('take_a_sip.webp'),
};

export const hero: Hero = {
  imageSrc: getImage('leaf_1.webp'),
  titleLines: ['Drinks that taste as', 'good as they make', 'you feel.'],
};

export const pdp: ProductDetail = {
  title: 'Fiery Ginger Booster',
  imageSrc: getImage('hero_3.webp'),
  mediaBg: '#f2c54f',
  variants: [
    { id: 'v1', label: '60 mL', price: '$3.95 CAD' },
    { id: 'v2', label: 'Six Pack', price: '$18.95 CAD' },
    { id: 'v3', label: 'Twelve Pack', price: '$34.95 CAD' },
  ],
};

