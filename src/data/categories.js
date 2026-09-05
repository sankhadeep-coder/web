export const CATEGORIES = [
  { id: 'all', name: 'All Collection', icon: '✨' },
  { id: 'girls', name: 'Girls', icon: '🌸' },
  { id: 'boys', name: 'Boys', icon: '⚡' },
  { id: 'baby', name: 'Baby (0-2Y)', icon: '🍼' },
  { id: 'newborn', name: 'Newborn Sets', icon: '🐣' },
  { id: 'dresses', name: 'Dresses & Frocks', icon: '👗' },
  { id: 'tshirts', name: 'T-Shirts & Tops', icon: '👕' },
  { id: 'shirts', name: 'Linen & Cotton Shirts', icon: '👔' },
  { id: 'bottoms', name: 'Jeans & Trousers', icon: '👖' },
  { id: 'ethnic', name: 'Ethnic & Festive Wear', icon: '🪔' },
  { id: 'party', name: 'Party Wear', icon: '🎉' },
  { id: 'sleepwear', name: 'Organic Sleepwear', icon: '🌙' },
  { id: 'sportswear', name: 'Active & Sports', icon: '🏃' },
  { id: 'jackets', name: 'Jackets & Knitwear', icon: '🧥' },
  { id: 'shoes', name: 'Comfort Shoes', icon: '👟' },
  { id: 'accessories', name: 'Hats & Accessories', icon: '🎀' }
];

export const AGE_TIERS = [
  { id: '0-2', label: '0–2 Years', sub: 'Infants & Crawlers', icon: '🍼', range: [0, 2] },
  { id: '2-4', label: '2–4 Years', sub: 'Toddler Explorers', icon: '🧸', range: [2, 4] },
  { id: '5-7', label: '5–7 Years', sub: 'Early School Years', icon: '🎒', range: [5, 7] },
  { id: '8-10', label: '8–10 Years', sub: 'Pre-Teens Active', icon: '🚲', range: [8, 10] },
  { id: '11-14', label: '11–14 Years', sub: 'Junior Fashion', icon: '🎧', range: [11, 14] }
];

export const OCCASIONS = [
  { id: 'everyday', name: 'Everyday Comfort', desc: 'Soft breathable playwear', color: '#3979D0' },
  { id: 'school', name: 'School & Play', desc: 'Durable easy-wash styles', color: '#39C6D5' },
  { id: 'party', name: 'Birthday & Party', desc: 'Twirls, bows & celebration', color: '#D83F4B' },
  { id: 'sleepwear', name: 'Dreamy Sleepwear', desc: 'Gentle bamboo & organic cotton', color: '#76563C' },
  { id: 'festive', name: 'Festive & Ethnic', desc: 'Modern heritage wear', color: '#FF8A3D' },
  { id: 'sports', name: 'Sports & Adventure', desc: 'Stretch-mesh athletic wear', color: '#D9F65A' },
  { id: 'winter', name: 'Winter Warmth', desc: 'Plush fleece & fine knits', color: '#252321' },
  { id: 'summer', name: 'Summer Sunshine', desc: 'Feather-light airy linen', color: '#F6C84B' }
];

export const ADVENTURE_CLUBS = [
  {
    id: 'dino',
    name: 'Dino Club',
    tagline: 'Roar Into Adventure',
    emoji: '🦖',
    color: '#4B7B4B',
    bgColor: '#EAF4EB',
    badge: 'Prehistoric Explorer',
    desc: 'Durable earthy cargos, dinosaur graphic tees, and mud-ready playwear.'
  },
  {
    id: 'space',
    name: 'Space Club',
    tagline: 'Reach For The Stars',
    emoji: '🚀',
    color: '#243B80',
    bgColor: '#E8EEFC',
    badge: 'Cosmic Voyager',
    desc: 'Glow-in-the-dark galaxy prints, nebula hoodies, and zero-gravity track pants.'
  },
  {
    id: 'superhero',
    name: 'Superhero Club',
    tagline: 'Save The Playground',
    emoji: '⚡',
    color: '#D83F4B',
    bgColor: '#FCECEE',
    badge: 'Mighty Hero',
    desc: 'High-energy color-block capes, reinforced knee joggers, and power tees.'
  },
  {
    id: 'sports',
    name: 'Sports Club',
    tagline: 'Born To Move',
    emoji: '⚽',
    color: '#1A6B42',
    bgColor: '#EDF8EE',
    badge: 'All-Star Athlete',
    desc: 'Sweat-wicking jerseys, flexible shorts, and breathable athletic essentials.'
  },
  {
    id: 'princess',
    name: 'Princess / Fairy Club',
    tagline: 'Sparkle & Wonder',
    emoji: '👑',
    color: '#A84B8E',
    bgColor: '#FBF0F8',
    badge: 'Magic Dreamer',
    desc: 'Super-soft non-itch tulle dresses, pastel flutter tops, and tiara sets.'
  },
  {
    id: 'animal',
    name: 'Animal Club',
    tagline: 'Wild & Free Friends',
    emoji: '🦁',
    color: '#BD6E23',
    bgColor: '#FCF3E8',
    badge: 'Safari Ranger',
    desc: 'Plush ear-hoodies, animal pocket overalls, and gentle safari cotton sets.'
  }
];

export const PERSONALITIES = [
  { id: 'sporty', name: 'Sporty Champ', icon: '🏅', desc: 'Always running, climbing, jumping' },
  { id: 'explorer', name: 'Curious Explorer', icon: '🧭', desc: 'Pockets for rocks, sticks, and wonders' },
  { id: 'artist', name: 'Little Artist', icon: '🎨', desc: 'Expressive colors and creative patterns' },
  { id: 'rockstar', name: 'Little Rockstar', icon: '🎸', desc: 'Bold graphics, cool jackets, attitude' },
  { id: 'bookworm', name: 'Cozy Bookworm', icon: '📚', desc: 'Ultra-soft fleece, relaxing cardigans' },
  { id: 'fashionista', name: 'Mini Fashionista', icon: '✨', desc: 'Loves matching outfits and stylish details' }
];

export const TRUST_PILLARS = [
  {
    icon: '🌿',
    title: '100% Organic & Non-Toxic',
    subtitle: 'GOTS certified cotton, zero harsh chemicals, gentle on sensitive child skin'
  },
  {
    icon: '🧵',
    title: 'Scratch-Free Seams',
    subtitle: 'Flatlock gentle stitching and printed inner tags — no itchiness guaranteed'
  },
  {
    icon: '📐',
    title: 'Smart Growth-Room Fit',
    subtitle: 'Thoughtfully patterned with extra seam margin so clothes grow with your child'
  },
  {
    icon: '🔄',
    title: '7-Day Easy Home Pickup Returns',
    subtitle: 'Wrong size? We will exchange or refund at your doorstep with zero friction'
  },
  {
    icon: '🚀',
    title: 'Free Express Shipping',
    subtitle: 'On all orders above ₹999 with real-time doorstep tracking'
  }
];
