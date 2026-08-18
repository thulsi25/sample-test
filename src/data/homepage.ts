export type ProductBadge = 'HOT' | 'NEW' | 'MUST HAVE' | 'SOLD OUT'

export type HomepageProduct = {
  title: string
  url: string
  handle: string
  price: number
  compareAt?: number
  colors: string[]
  extraColors: number
  badge?: ProductBadge
  image: string
}

export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Luggage', href: '#' },
  { label: 'Backpacks and Briefcases', href: '#' },
  { label: 'Totes', href: '#' },
  { label: 'Slings and Crossbodies', href: '#' },
  { label: 'Accessories', href: '#' },
  { label: 'Wallets', href: '#' },
  { label: 'Gift Card', href: '#' },
  { label: 'Clearance Sale', href: '#' },
]

export const hero = {
  href: '#',
  image:
    'https://mokobara.com/cdn/shop/files/website_autopilot_banner.webp?quality=80&v=1786454378&width=1920',
  mobileImage:
    'https://mokobara.com/cdn/shop/files/mobile_autopilit_banner.webp?quality=80&v=1786454378&width=1440',
  alt: 'Transit Autopilot',
}

export const bestsellers: HomepageProduct[] = [
  {
    title: 'Transit Backpack - 30L',
    url: '#',
    handle: 'the-transit-backpack',
    price: 5999,
    compareAt: 9999,
    colors: ['Money Moves Sunray', 'Seize The Gray', 'Home Grown Sunray'],
    extraColors: 2,
    badge: 'HOT',
    image:
      'https://mokobara.com/cdn/shop/files/The_Transit_Backpack_30L_-_Money_Moves_Sunray.webp?quality=80&v=1775645842&width=1440',
  },
  {
    title: 'Sunflower Tote',
    url: '#',
    handle: 'the-sunflower-tote',
    price: 6999,
    compareAt: 10999,
    colors: ['Money Moves', 'Coconut Cream', 'Lucky Charm'],
    extraColors: 0,
    image:
      'https://mokobara.com/cdn/shop/files/The_Sunflower_Tote_-_Money_Moves.webp?quality=80&v=1775719241&width=1440',
  },
  {
    title: 'Transit Briefcase',
    url: '#',
    handle: 'the-transit-briefcase',
    price: 5499,
    compareAt: 8999,
    colors: ['Homegrown Sunray', 'Tailored Blue', 'Money Moves'],
    extraColors: 2,
    image:
      'https://mokobara.com/cdn/shop/files/The_Transit_Briefcase_-_Homegrown_Sunray.webp?quality=80&v=1775800797&width=1440',
  },
  {
    title: 'Transit Luggage - Set of 3',
    url: '#',
    handle: 'the-transit-luggage-set-of-3',
    price: 16999,
    compareAt: 38999,
    colors: ['Money Moves Sunray', 'Still Loading Brownray', 'Money Moves'],
    extraColors: 6,
    image:
      'https://mokobara.com/cdn/shop/files/The-Transit-Set-of-3---Money-Moves-Sunray.jpg?format=webp&quality=80&v=1775131750&width=1440',
  },
  {
    title: 'Jazz Tote',
    url: '#',
    handle: 'the-jazz-tote',
    price: 8499,
    compareAt: 13999,
    colors: ['Money Moves', 'Cloud Nine'],
    extraColors: 0,
    image: 'https://mokobara.com/cdn/shop/files/jazz_2.webp?quality=80&v=1778221987&width=800',
  },
  {
    title: 'Aisle Trunk - Cabin',
    url: '#',
    handle: 'the-aisle-trunk-cabin',
    price: 5499,
    compareAt: 10999,
    colors: ['Stardust', 'Homegrown', 'Cool Beans'],
    extraColors: 2,
    image:
      'https://mokobara.com/cdn/shop/files/The-Aisle-Trunk---Cabin---Stardust.jpg?format=webp&quality=80&v=1775557953&width=1440',
  },
  {
    title: 'Overnighter Backpack - 23L',
    url: '#',
    handle: 'the-overnighter-backpack',
    price: 8999,
    compareAt: 14999,
    colors: ['Headspace', 'Money Moves', 'Home Grown Sunray'],
    extraColors: 0,
    image:
      'https://mokobara.com/cdn/shop/files/The_Overnighter_Backpack_-_Headspace.webp?quality=80&v=1775643728&width=1440',
  },
  {
    title: 'Transit Luggage - Cabin',
    url: '#',
    handle: 'the-transit-cabin-luggage',
    price: 5999,
    compareAt: 11999,
    colors: ['We Meet Again Sunray', 'Money Moves Sunray', 'So Matcha'],
    extraColors: 6,
    image:
      'https://mokobara.com/cdn/shop/files/The-Transit-Cabin---We-Meet-Again-Sunray.jpg?format=webp&quality=80&v=1775474031&width=1440',
  },
]

export const newArrivals: HomepageProduct[] = [
  {
    title: 'Transit Autopilot Backpack',
    url: '#',
    handle: 'transit-autopilot-backpack',
    price: 5799,
    compareAt: 7999,
    colors: ['Money Moves Sunray', 'Headspace', 'Homegrown'],
    extraColors: 0,
    badge: 'NEW',
    image:
      'https://mokobara.com/cdn/shop/files/Transit-Autopilot-Backpack_Money-Moves-Sunray.jpg?format=webp&quality=80&v=1786368340&width=1440',
  },
  {
    title: 'Transit Z Backpack',
    url: '#',
    handle: 'transit-z-backpack',
    price: 6499,
    compareAt: 9999,
    colors: ['Money Moves Sunray', 'Headspace', 'Off The Grid'],
    extraColors: 0,
    badge: 'NEW',
    image:
      'https://mokobara.com/cdn/shop/files/Transit-Z-Backpack-Money-Moves-Sunray.jpg?format=webp&quality=80&v=1785409783&width=1440',
  },
  {
    title: 'Aisle Cabin Pro',
    url: '#',
    handle: 'the-aisle-cabin-pro',
    price: 6499,
    compareAt: 12999,
    colors: ['Money Moves', 'Shy Blue', 'We Meet Again'],
    extraColors: 0,
    badge: 'NEW',
    image:
      'https://mokobara.com/cdn/shop/files/The-Aisle-Trunk_PDP_C.jpg?format=webp&quality=80&v=1782541880&width=1440',
  },
  {
    title: 'Moko Tracker',
    url: '#',
    handle: 'moko-tracker',
    price: 2499,
    compareAt: 4999,
    colors: [],
    extraColors: 0,
    image: 'https://mokobara.com/cdn/shop/files/Artboard_2_1.png?format=webp&quality=80&v=1777974952&width=1440',
  },
  {
    title: 'Stash Bifold Wallet',
    url: '#',
    handle: 'stash-bifold',
    price: 2199,
    compareAt: 2999,
    colors: ['Ka-Ching', 'Money Moves', 'Tan Lines'],
    extraColors: 0,
    image:
      'https://mokobara.com/cdn/shop/files/Stash_Bifold_-_Ka-ching.webp?quality=80&v=1776068488&width=1440',
  },
  {
    title: 'Stash Card Case',
    url: '#',
    handle: 'stash-card-case',
    price: 1799,
    compareAt: 2999,
    colors: ['Money Moves', 'Ka-Ching'],
    extraColors: 0,
    image:
      'https://mokobara.com/cdn/shop/files/Stash_Card_Case_-_Money_Moves.webp?quality=80&v=1776069043&width=1440',
  },
  {
    title: 'Aisle Backpack',
    url: '#',
    handle: 'the-aisle-backpack',
    price: 4299,
    compareAt: 6999,
    colors: ['Good Genes', 'Money Moves', 'Bear Hug'],
    extraColors: 1,
    image:
      'https://mokobara.com/cdn/shop/files/The_Aisle_Backpack_-_Good_Gvenes.webp?quality=80&v=1775630960&width=1440',
  },
  {
    title: 'Aisle Crossbody',
    url: '#',
    handle: 'the-aisle-crossbody',
    price: 1699,
    compareAt: 2499,
    colors: ['Nice Ice', 'Money Moves', 'Excuse me'],
    extraColors: 1,
    image:
      'https://mokobara.com/cdn/shop/files/The_Aisle_Crossbody_-_Nice_Ice_8c26f915-038c-43ae-ade8-17451ad5e201.webp?quality=80&v=1777984447&width=1440',
  },
]

export const story = {
  heading: 'The Joy Is in the Details',
  body: 'Every mokobara goes through inexhaustible rounds of “Is this the most intelligent design we can make?” before reaching you. We choose excellent hardware and sweat over the most microscopic details to make your carry the easiest part of your journey.',
  image:
    'https://mokobara.com/cdn/shop/files/The_Overnighter_Backpack_-_Headspace.webp?quality=80&v=1775643728&width=1440',
}

export const promo = {
  eyebrow: 'The Transit Series',
  heading: 'The new face of movement.',
  cta: 'Shop Now',
  href: '#',
  image:
    'https://mokobara.com/cdn/shop/files/1_transit_series_600x800_bd104581-1143-4ea2-b5ff-c934f7903d77.webp?quality=80&v=1777889109&width=1200',
}

export const stores = {
  heading: 'Store Locator',
  subheading: '48 reasons to visit us IRL',
  cities: [
    'Delhi NCR',
    'Bengaluru',
    'Mumbai',
    'Pune',
    'Hyderabad',
    'Chennai',
    'Chandigarh',
    'Ahmedabad',
    'Surat',
    'Noida',
    'Mohali',
    'Lucknow',
    'Kozhikode',
    'Kanpur',
    'Jalandhar',
    'Jaipur',
    'Indore',
    'Bathinda',
    'Amritsar',
  ],
  byCity: {
    'Delhi NCR': [
      'Basant Lok Market, Delhi',
      'Connaught Place, New Delhi',
      'MGF Mall, Gurgaon',
      'DLF Avenue, Saket',
      'DLF Summit, Delhi NCR',
      'Khan Market, Delhi',
      'Lajpat Nagar, Delhi',
      'South Ex 2, Delhi NCR',
      'Worldmark Aerocity, Delhi NCR',
    ],
    Bengaluru: [
      'Indiranagar, Bengaluru',
      'Mall of Asia, Bengaluru',
      'Phoenix Market City, Bangalore',
      'Brigade Orion Mall, Bengaluru',
      'Brigade Road, Bengaluru',
      'HSR Layout, Bengaluru',
      'M5 Mall, Electronic City',
      'Nexus Vegacity, Bengaluru',
    ],
    Mumbai: [
      'Linking Road, Khar West',
      'Nexus Seawoods',
      'Phoenix Palladium, Mumbai',
      'R City, Mumbai',
      'Oberoi Mall, Mumbai',
      'Phoenix Market City, Kurla',
      'T2 International, Mumbai Airport',
    ],
    Pune: [
      'Amanora Mall, Pune',
      'MG Road, Pune',
      'Mall of Millennium, Pune',
      'Phoenix Market City, Pune',
      'Tribeca Highstreet, Pune',
    ],
    Hyderabad: ['Sarath City Capital Mall, Hyderabad', 'Lakeshore Mall, Hyderabad'],
    Chennai: ['Khader Nawaz Khan Road (KNK), Chennai', 'Phoenix Market City, Chennai'],
    Chandigarh: ['Nexus Elante Mall, Chandigarh', 'Sector 19C, Chandigarh'],
    Ahmedabad: ['CG Road, Ahmedabad', 'Palladium Ahmedabad'],
    Surat: ['Godh Dod Road, Surat'],
    Noida: ['DLF Mall of India, Noida'],
    Mohali: ['HLP Galleria, Mohali'],
    Lucknow: ['Lulu Lucknow'],
    Kozhikode: ['HiLITE Mall, Kozhikode'],
    Kanpur: ['Z Square Mall, Kanpur'],
    Jalandhar: ['Model Town, Jalandhar'],
    Jaipur: ['Vaishali Nagar, Jaipur'],
    Indore: ['Apollo Highstreet, Indore'],
    Bathinda: ['Bhucho Mandi, Bathinda'],
    Amritsar: ['Nexus Amritsar'],
  } as Record<string, string[]>,
}

export const footer = {
  newsletterHeading: 'Warm Hugs, Mokobara.',
  newsletterBody: 'We’ll email you important updates, new launch info and the occasional raccoon GIF.',
  support:
    'Need assistance? Write to us at support@mokobara.com or call us at +917975298840. We’re available on weekdays from 10:00 AM to 7:00 PM and on Saturdays from 10:00 AM to 6:00 PM.',
  corporate: 'For Gifting & Corporate orders WhatsApp us at +918904892616 or email bulkorders@mokobara.com',
  links: [
    { label: 'FAQ', href: '#' },
    { label: 'Claim 30 Day Trial', href: '#' },
    { label: 'Claim My Warranty', href: '#' },
    { label: 'Return & Refund Policy', href: '#' },
    { label: 'Terms and Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'CTRL+Z Airline Damage Policy', href: '#' },
    { label: 'Blogs', href: '#' },
  ],
}

const COLOR_SWATCHES: Record<string, string> = {
  'Money Moves Sunray': '#c4a35a',
  'Seize The Gray': '#6b6e73',
  'Home Grown Sunray': '#8b7355',
  'Money Moves': '#1f1f1f',
  'Coconut Cream': '#f3e6d4',
  'Lucky Charm': '#c9a227',
  'Homegrown Sunray': '#9c7a4a',
  'Tailored Blue': '#2f4f6f',
  'Still Loading Brownray': '#7a5c45',
  'Cloud Nine': '#d8dde4',
  Stardust: '#cfc8be',
  Homegrown: '#6e5340',
  'Cool Beans': '#4a3728',
  Headspace: '#5c6570',
  'We Meet Again Sunray': '#d4b36a',
  'So Matcha': '#7d8b5a',
  'Black Sesame': '#2b2b2b',
  Tofu: '#efe8dc',
  'Space Station Coffee': '#4b3a2f',
  'Light Year': '#c7c2b8',
  'Cosmic Vibes': '#5b4d8a',
  'Sunnyside Yellow': '#e6c84a',
  'Off The Grid': '#3d4a3a',
  'Shy Blue': '#8aa4b8',
  'We Meet Again': '#c9a45c',
  'Ka-Ching': '#c4a24a',
  'Tan Lines': '#c8a882',
  'Good Genes': '#6a7a55',
  'Bear Hug': '#8b5a3c',
  'Nice Ice': '#b9c6c8',
  'Excuse me': '#d27a7a',
}

export function swatchColor(name: string) {
  return COLOR_SWATCHES[name] ?? '#c4c4c4'
}

export function formatPrice(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`
}

export function discountPercent(price: number, compareAt?: number) {
  if (!compareAt || compareAt <= price) return null
  return Math.round(((compareAt - price) / compareAt) * 100)
}
