export const PRODUCTS = [
  {
    id: 'prod-01',
    name: 'Meadow Garden Tiered Dress',
    category: 'dresses',
    subCategory: 'Occasion & Daywear',
    gender: 'girls',
    ageRange: '2-4Y',
    sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y'],
    colors: [
      { name: 'Warm Ivory Floral', hex: '#F7F3EC', border: '#D8CEC1' },
      { name: 'Blush Rose', hex: '#EBB4B6', border: '#D83F4B' },
      { name: 'Sage Blossom', hex: '#B5C9B7', border: '#7A9B7D' }
    ],
    price: 1299,
    originalPrice: 1899,
    discount: '32% OFF',
    rating: 4.9,
    reviewsCount: 142,
    brand: 'Petit Papillon',
    material: '100% GOTS Certified Organic Cotton Voile',
    description: 'A breathable, twirl-worthy dress lined with ultra-soft mulmul cotton. Crafted with gentle gathered tiers, mother-of-pearl buttons, and zero scratchy seams.',
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['BESTSELLER', '100% ORGANIC'],
    stock: 24,
    is_new: false,
    is_bestseller: true,
    is_trending: true,
    occasions: ['party', 'summer', 'everyday'],
    personalities: ['fashionista', 'artist'],
    worldClub: 'princess',
    whyParentsLove: [
      'Pure organic cotton voile feels feather-light in summer heat',
      '100% mulmul cotton lining guarantees zero skin itching',
      'Pre-shrunk fabric with 5cm let-out hem for growth room',
      'Machine wash gentle cycle at 30°C — colors stay vibrant'
    ],
    completeTheLook: ['prod-08', 'prod-20']
  },
  {
    id: 'prod-02',
    name: 'Little Riviera Pure Linen Camp Shirt',
    category: 'shirts',
    subCategory: 'Resort & Casual',
    gender: 'boys',
    ageRange: '5-7Y',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    colors: [
      { name: 'Natural Sand', hex: '#D8CEC1', border: '#76563C' },
      { name: 'Sky Azure', hex: '#A8D2E8', border: '#3979D0' },
      { name: 'Olive Grove', hex: '#9EAA8A', border: '#5A6E46' }
    ],
    price: 999,
    originalPrice: 1499,
    discount: '33% OFF',
    rating: 4.8,
    reviewsCount: 98,
    brand: 'Loom & Sprout',
    material: '100% European Flax Linen (Pre-Softened)',
    description: 'A timeless camp collar silhouette designed for seaside walks and sunny family picnics. Enzyme-washed for immediate cloud softness right out of the box.',
    images: [
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['NEW', 'PREMIUM LINEN'],
    stock: 18,
    is_new: true,
    is_bestseller: false,
    is_trending: true,
    occasions: ['summer', 'party', 'everyday'],
    personalities: ['explorer', 'fashionista'],
    worldClub: 'animal',
    whyParentsLove: [
      'Naturally thermoregulating flax linen keeps kids cool all day',
      'Enzyme washed so it feels silky smooth, never stiff or scratchy',
      'Reinforced natural coconut shell buttons that do not pop off',
      'Looks stylish even gently rumpled — no heavy ironing needed'
    ],
    completeTheLook: ['prod-05', 'prod-08']
  },
  {
    id: 'prod-03',
    name: 'Jurassic Roar Organic Graphic Tee',
    category: 'tshirts',
    subCategory: 'Everyday Essentials',
    gender: 'boys',
    ageRange: '2-4Y',
    sizes: ['1-2Y', '2-3Y', '3-4Y', '4-5Y'],
    colors: [
      { name: 'Earthy Sage', hex: '#899E8B', border: '#4B7B4B' },
      { name: 'Sun Yellow', hex: '#F6C84B', border: '#FF8A3D' },
      { name: 'Warm Ivory', hex: '#F7F3EC', border: '#252321' }
    ],
    price: 599,
    originalPrice: 899,
    discount: '33% OFF',
    rating: 4.9,
    reviewsCount: 310,
    brand: 'Tiny Voyager',
    material: '100% Combed Ringspun Organic Cotton',
    description: 'Adored by little paleontologists. Features hand-drawn botanical dinosaur sketches printed with water-based, non-toxic inks safe for skin and mouth.',
    images: [
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['BESTSELLER', 'KIDS FAVORITE'],
    stock: 45,
    is_new: false,
    is_bestseller: true,
    is_trending: true,
    occasions: ['everyday', 'school'],
    personalities: ['explorer', 'artist'],
    worldClub: 'dino',
    whyParentsLove: [
      'Water-based ink print does not crack or peel after 30+ washes',
      'Tagless comfort neck heat-transfer label — zero neck itching',
      'Stretchy rib knit collar makes pulling over toddler heads effortless',
      'Certified Azo-free and heavy-metal free child-safe pigments'
    ],
    completeTheLook: ['prod-05', 'prod-08']
  },
  {
    id: 'prod-04',
    name: 'Cosmic Voyager Nebula Track Set',
    category: 'sportswear',
    subCategory: 'Sweatshirt & Jogger Set',
    gender: 'unisex',
    ageRange: '5-7Y',
    sizes: ['4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    colors: [
      { name: 'Midnight Orbit', hex: '#1E2B4C', border: '#3979D0' },
      { name: 'Heather Grey', hex: '#D1D5DB', border: '#76563C' }
    ],
    price: 1499,
    originalPrice: 2199,
    discount: '32% OFF',
    rating: 4.8,
    reviewsCount: 88,
    brand: 'Tiny Voyager',
    material: 'Heavyweight French Terry Cotton (320 GSM)',
    description: 'An ultra-plush two-piece co-ord set with subtle glow-in-the-dark stars on the sleeve and reinforced double-layer knees for cosmic tumble adventures.',
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['LIMITED EDITION', 'GLOW DETAILS'],
    stock: 14,
    is_new: true,
    is_bestseller: false,
    is_trending: true,
    occasions: ['sports', 'winter', 'everyday'],
    personalities: ['explorer', 'sporty', 'rockstar'],
    worldClub: 'space',
    whyParentsLove: [
      'Double-ply reinforced knees stand up to playground slides',
      'Elastic waist with functional cotton drawcord for secure fit',
      'High-grade French terry fleece stays pill-free and soft inside',
      'Glows softly after just 10 seconds under room lighting'
    ],
    completeTheLook: ['prod-08', 'prod-20']
  },
  {
    id: 'prod-05',
    name: 'Safari Explorer Khaki Cargos',
    category: 'bottoms',
    subCategory: 'Trousers & Pants',
    gender: 'boys',
    ageRange: '5-7Y',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y', '8-10Y'],
    colors: [
      { name: 'Desert Sand', hex: '#D2B591', border: '#76563C' },
      { name: 'Army Olive', hex: '#58674E', border: '#252321' },
      { name: 'Navy Dusk', hex: '#2A344D', border: '#3979D0' }
    ],
    price: 899,
    originalPrice: 1299,
    discount: '31% OFF',
    rating: 4.9,
    reviewsCount: 165,
    brand: 'Loom & Sprout',
    material: '98% Cotton Twill, 2% Spandex Stretch',
    description: 'Built for treasure collectors. Equipped with 6 roomy bellows pockets, an adjustable buttonhole hidden waistband, and 2-way comfortable stretch.',
    images: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['PARENT FAVORITE', 'DURABLE TWILL'],
    stock: 32,
    is_new: false,
    is_bestseller: true,
    is_trending: false,
    occasions: ['school', 'everyday', 'sports'],
    personalities: ['explorer', 'sporty'],
    worldClub: 'dino',
    whyParentsLove: [
      'Adjustable internal button elastic waist accommodates slender or growing kids',
      '2% spandex ensures zero ripping during tree climbing and playground sprints',
      'Deep functional pockets for magnifying glasses and sea shells',
      'Heavy-duty bartack stitching on stress points'
    ],
    completeTheLook: ['prod-02', 'prod-03']
  },
  {
    id: 'prod-06',
    name: 'Cloud-Soft Bamboo Newborn Kimono Romper',
    category: 'newborn',
    subCategory: 'Baby Sets & Sleep',
    gender: 'baby',
    ageRange: '0-2Y',
    sizes: ['0-3M', '3-6M', '6-12M', '12-18M'],
    colors: [
      { name: 'Warm Cream', hex: '#FFFDFC', border: '#D8CEC1' },
      { name: 'Muted Honey', hex: '#F3D299', border: '#FF8A3D' },
      { name: 'Pale Mint', hex: '#CCE5D6', border: '#39C6D5' }
    ],
    price: 799,
    originalPrice: 1199,
    discount: '33% OFF',
    rating: 4.9,
    reviewsCount: 240,
    brand: 'Petit Papillon Baby',
    material: '70% Viscose from Organic Bamboo, 30% Organic Cotton',
    description: 'The gentlest layer for newborn delicate skin. Wrap-around kimono front with magnetic snap closure makes 2 AM diaper changes swift and silent.',
    images: [
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['BESTSELLER', 'DOCTOR APPROVED'],
    stock: 40,
    is_new: false,
    is_bestseller: true,
    is_trending: true,
    occasions: ['sleepwear', 'everyday'],
    personalities: ['bookworm'],
    worldClub: 'animal',
    whyParentsLove: [
      'Zero over-the-head pulling protects fragile newborn necks and fontanelles',
      'Fold-over scratch mitt cuffs prevent accidental face scratches',
      'Hypoallergenic bamboo naturally wicks milk spills and moisture',
      'OEKO-TEX Class 1 safety certified for infant contact'
    ],
    completeTheLook: ['prod-18', 'prod-20']
  },
  {
    id: 'prod-07',
    name: 'Nordic Sun Embroidered Cardigan',
    category: 'jackets',
    subCategory: 'Knitwear & Sweaters',
    gender: 'girls',
    ageRange: '2-4Y',
    sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y'],
    colors: [
      { name: 'Oatmeal Melange', hex: '#E6E0D4', border: '#76563C' },
      { name: 'Mustard Golden', hex: '#EBB448', border: '#FF8A3D' }
    ],
    price: 1399,
    originalPrice: 1999,
    discount: '30% OFF',
    rating: 4.8,
    reviewsCount: 76,
    brand: 'Little Heirloom',
    material: '100% Superfine Merino Wool & Cotton Blend',
    description: 'Chunky moss-stitch knit with hand-embroidered golden sun motifs and mock horn buttons. Cozy, non-scratchy warmth for autumn evenings and chilly classrooms.',
    images: [
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['NEW', 'HAND CRAFTED'],
    stock: 12,
    is_new: true,
    is_bestseller: false,
    is_trending: true,
    occasions: ['winter', 'everyday', 'school'],
    personalities: ['artist', 'bookworm'],
    worldClub: 'princess',
    whyParentsLove: [
      'Merino wool blended with combed cotton for zero prickliness',
      'Drop-shoulder cut layers easily over dresses and shirts',
      'Resists pilling and retains its heirloom shape after gentle wash',
      'Hand-stitched details make it a memorable keepsake gift'
    ],
    completeTheLook: ['prod-01', 'prod-08']
  },
  {
    id: 'prod-08',
    name: 'Butter-Soft First Step Leather Moccasins',
    category: 'shoes',
    subCategory: 'Footwear',
    gender: 'unisex',
    ageRange: '0-2Y',
    sizes: ['0-6M', '6-12M', '12-18M', '18-24M'],
    colors: [
      { name: 'Caramel Tan', hex: '#A47547', border: '#76563C' },
      { name: 'Warm Cream', hex: '#F7F3EC', border: '#D8CEC1' },
      { name: 'Midnight Navy', hex: '#1F2A44', border: '#3979D0' }
    ],
    price: 899,
    originalPrice: 1399,
    discount: '36% OFF',
    rating: 4.9,
    reviewsCount: 198,
    brand: 'Petit Papillon Shoes',
    material: 'Certified Chrome-Free Vegetable Tanned Leather',
    description: 'Pediatrician-recommended soft soles that support natural barefoot balance and arch development. Gentle elastic collar stays securely on wriggly feet.',
    images: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['BESTSELLER', 'PODIATRIST APPROVED'],
    stock: 28,
    is_new: false,
    is_bestseller: true,
    is_trending: false,
    occasions: ['everyday', 'party'],
    personalities: ['explorer', 'fashionista'],
    worldClub: 'animal',
    whyParentsLove: [
      'Flexible suede sole mimics barefoot walking for healthy foot arches',
      'Snug elastic ankle keeps shoes on — baby cannot kick them off in stroller',
      '100% vegetable dyes free from toxic chromium and lead',
      'Breathable leather prevents sweaty baby toes'
    ],
    completeTheLook: ['prod-01', 'prod-06']
  },
  {
    id: 'prod-09',
    name: 'Royal Saffron Mulmul Kurta & Dhoti Set',
    category: 'ethnic',
    subCategory: 'Festive & Celebration',
    gender: 'boys',
    ageRange: '2-4Y',
    sizes: ['1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y'],
    colors: [
      { name: 'Saffron Marigold', hex: '#E88C28', border: '#FF8A3D' },
      { name: 'Ivory Gold', hex: '#F7F3EC', border: '#F6C84B' },
      { name: 'Peacock Teal', hex: '#1E7C85', border: '#39C6D5' }
    ],
    price: 1499,
    originalPrice: 2299,
    discount: '35% OFF',
    rating: 4.9,
    reviewsCount: 112,
    brand: 'Petit Papillon Heritage',
    material: '100% Fine Handspun Mulmul Cotton',
    description: 'Festive elegance without the stiffness. Tailored in feather-light mulmul with gentle gota patti accents and a ready-to-wear pre-stitched elastic dhoti.',
    images: [
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['FESTIVE HIT', 'ZERO ITCH'],
    stock: 22,
    is_new: true,
    is_bestseller: true,
    is_trending: true,
    occasions: ['festive', 'party'],
    personalities: ['fashionista', 'artist'],
    worldClub: 'princess',
    whyParentsLove: [
      'Pure mulmul lining behind all zari embroidery — 0% itch on child chest',
      'Slip-on pre-stitched dhoti with soft waistband eliminates complicated tying',
      'Breathes through humid wedding venues and evening pooja ceremonies',
      'Colorfast natural dyes that do not bleed onto car seats'
    ],
    completeTheLook: ['prod-08', 'prod-20']
  },
  {
    id: 'prod-10',
    name: 'Twirling Starlight Tulle Party Frock',
    category: 'party',
    subCategory: 'Birthday & Occasion',
    gender: 'girls',
    ageRange: '5-7Y',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    colors: [
      { name: 'Lilac Stardust', hex: '#CBB2DF', border: '#A84B8E' },
      { name: 'Powder Pink', hex: '#F7D0DC', border: '#D83F4B' },
      { name: 'Champagne Gold', hex: '#EED9AA', border: '#F6C84B' }
    ],
    price: 1699,
    originalPrice: 2499,
    discount: '32% OFF',
    rating: 4.9,
    reviewsCount: 154,
    brand: 'Petit Papillon',
    material: 'Soft-Drape Micro Tulle with 100% Cotton Base Lining',
    description: 'Engineered for 360-degree party spins. Features 4 layers of micro-soft tulle adorned with foil stars and a full cotton underskirt that never scratches.',
    images: [
      'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['BESTSELLER', 'ULTRA SOFT TULLE'],
    stock: 19,
    is_new: false,
    is_bestseller: true,
    is_trending: true,
    occasions: ['party', 'festive'],
    personalities: ['fashionista', 'artist'],
    worldClub: 'princess',
    whyParentsLove: [
      'Multi-layer tulle is baby-grade soft, not stiff stiff netting',
      'Smooth hidden YKK back zipper with protective fabric zip guard',
      'Machine washable in laundry mesh bag — no costly dry cleaning',
      'Generous sash tie in back creates a flattering custom fit'
    ],
    completeTheLook: ['prod-07', 'prod-20']
  },
  {
    id: 'prod-11',
    name: 'All-Star Breathable Mesh Runner Shorts',
    category: 'sportswear',
    subCategory: 'Active Bottoms',
    gender: 'boys',
    ageRange: '8-10Y',
    sizes: ['6-7Y', '7-8Y', '8-10Y', '10-12Y', '12-14Y'],
    colors: [
      { name: 'Cobalt Speed', hex: '#2A52BE', border: '#3979D0' },
      { name: 'Electric Lime', hex: '#C2E83B', border: '#D9F65A' },
      { name: 'Stealth Black', hex: '#252321', border: '#76563C' }
    ],
    price: 499,
    originalPrice: 799,
    discount: '38% OFF',
    rating: 4.8,
    reviewsCount: 220,
    brand: 'Tiny Voyager Active',
    material: 'Dri-Breeze Quick-Dry Recycled Poly Mesh',
    description: 'Lightweight, rapid-drying shorts with built-in moisture wicking for soccer training, cycling, and park sprints. Features reflective safety accents.',
    images: [
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['VALUE PACK', 'QUICK DRY'],
    stock: 50,
    is_new: false,
    is_bestseller: true,
    is_trending: false,
    occasions: ['sports', 'summer', 'school'],
    personalities: ['sporty', 'explorer'],
    worldClub: 'sports',
    whyParentsLove: [
      'Dries completely in 45 minutes on the drying rack',
      'Deep zip pocket holds house keys safely during outdoor sports',
      'Reflective piping keeps kids visible in dusk neighbourhood play',
      'Drawstring waist ensures shorts stay up during high jumps'
    ],
    completeTheLook: ['prod-03', 'prod-08']
  },
  {
    id: 'prod-12',
    name: 'Organic Milk & Cookies Sleepwear Set',
    category: 'sleepwear',
    subCategory: 'Two-Piece Pajamas',
    gender: 'unisex',
    ageRange: '2-4Y',
    sizes: ['1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y'],
    colors: [
      { name: 'Cream Cookie', hex: '#F7F3EC', border: '#76563C' },
      { name: 'Sky Dreamer', hex: '#D2E5F3', border: '#3979D0' }
    ],
    price: 799,
    originalPrice: 1199,
    discount: '33% OFF',
    rating: 4.9,
    reviewsCount: 280,
    brand: 'Petit Papillon Sleep',
    material: '100% GOTS Certified Ribbed Organic Cotton',
    description: 'Designed for deep, restorative sleep. Snug-fit ribbed stretch moves with toss-and-turners while locking in cozy room temperature all night.',
    images: [
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['BESTSELLER', 'NON TOXIC SLEEP'],
    stock: 35,
    is_new: false,
    is_bestseller: true,
    is_trending: false,
    occasions: ['sleepwear', 'everyday'],
    personalities: ['bookworm'],
    worldClub: 'animal',
    whyParentsLove: [
      'Zero synthetic flame retardants — purely natural cotton safe to sleep in',
      'Wide flat elastic waistband never digs into little bellies',
      'Ankle cuffs keep pant legs down, preventing night chills',
      'Pre-washed yarn stays wonderfully snug without shrinking'
    ],
    completeTheLook: ['prod-08', 'prod-20']
  },
  {
    id: 'prod-13',
    name: 'Watercolour Botanical Pinafore Jumpsuit',
    category: 'girls',
    subCategory: 'Overalls & Dungarees',
    gender: 'girls',
    ageRange: '5-7Y',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    colors: [
      { name: 'Terracotta Clay', hex: '#C86D51', border: '#D83F4B' },
      { name: 'Meadow Moss', hex: '#7E9177', border: '#4B7B4B' }
    ],
    price: 1199,
    originalPrice: 1699,
    discount: '29% OFF',
    rating: 4.8,
    reviewsCount: 84,
    brand: 'Little Heirloom',
    material: '100% Heavy Slub Linen Cotton',
    description: 'Charming cross-back straps with 2 adjustable button settings so this garment can be worn for two full seasons as your girl grows taller.',
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['GROW WITH ME', 'ORGANIC LINEN'],
    stock: 16,
    is_new: true,
    is_bestseller: false,
    is_trending: true,
    occasions: ['everyday', 'party', 'school'],
    personalities: ['artist', 'explorer'],
    worldClub: 'animal',
    whyParentsLove: [
      'Two-button strap positions provide 4cm of extra vertical growth room',
      'Roomy hip cut lets kids run, sit criss-cross on the carpet, and climb',
      'Side pockets fit chalks, crayons, and tiny treasures',
      'Pairs with basic tees in summer or sweaters in winter'
    ],
    completeTheLook: ['prod-03', 'prod-08']
  },
  {
    id: 'prod-14',
    name: 'Schoolyard Heritage Knit Polo',
    category: 'tshirts',
    subCategory: 'Smart Casual & School',
    gender: 'boys',
    ageRange: '8-10Y',
    sizes: ['6-7Y', '7-8Y', '8-10Y', '10-12Y', '12-14Y'],
    colors: [
      { name: 'Oxford Navy', hex: '#1C2942', border: '#3979D0' },
      { name: 'Burgundy Crimson', hex: '#6B1D28', border: '#D83F4B' },
      { name: 'Forest Evergreen', hex: '#264B34', border: '#4B7B4B' }
    ],
    price: 799,
    originalPrice: 1199,
    discount: '33% OFF',
    rating: 4.8,
    reviewsCount: 130,
    brand: 'Loom & Sprout',
    material: '100% Combed Cotton Pique Knit',
    description: 'Crisp flat-knit ribbed collar that stays uncurled after endless washes. Side vents with herringbone tape reinforcement ensure unrestricted motion.',
    images: [
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['SCHOOL READY', 'ANTI CURL COLLAR'],
    stock: 38,
    is_new: false,
    is_bestseller: true,
    is_trending: false,
    occasions: ['school', 'everyday', 'party'],
    personalities: ['sporty', 'bookworm'],
    worldClub: 'sports',
    whyParentsLove: [
      'Engineered collar tips refuse to curl up in the dryer',
      'Dense pique weave resists playground scrapes and snagging',
      'Stain-release wash coating helps juice and ketchup wash out easily',
      'Smart polished look suitable for family dinners and school functions'
    ],
    completeTheLook: ['prod-05', 'prod-08']
  },
  {
    id: 'prod-15',
    name: 'Little Superhero Reversible Hooded Cape Jacket',
    category: 'jackets',
    subCategory: 'Outerwear & Play',
    gender: 'unisex',
    ageRange: '2-4Y',
    sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y'],
    colors: [
      { name: 'Hero Scarlet & Navy', hex: '#D83F4B', border: '#3979D0' },
      { name: 'Lightning Teal & Gold', hex: '#39C6D5', border: '#F6C84B' }
    ],
    price: 1599,
    originalPrice: 2299,
    discount: '30% OFF',
    rating: 4.9,
    reviewsCount: 96,
    brand: 'Tiny Voyager',
    material: 'Water-Resistant Cotton Ripstop & Warm Sherpa Reverse',
    description: 'Two jackets in one! Water-resistant rain cape on one side, plush fluffy sherpa on the flip side. Features easy magnetic chest snaps for quick dressing.',
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['REVERSIBLE 2-IN-1', 'WATER REPELLENT'],
    stock: 15,
    is_new: true,
    is_bestseller: false,
    is_trending: true,
    occasions: ['winter', 'everyday', 'sports'],
    personalities: ['explorer', 'rockstar'],
    worldClub: 'superhero',
    whyParentsLove: [
      'Dual-wear capability gives you two distinct outerwear looks for the price of one',
      'Magnetic neck latch lets young kids dress themselves without zipper tears',
      'Windproof hood stays on during breezy park walks',
      'Easy wipe-clean exterior resists muddy puddle splashes'
    ],
    completeTheLook: ['prod-05', 'prod-08']
  },
  {
    id: 'prod-16',
    name: 'Anarkali Pastel Chanderi Festive Set',
    category: 'ethnic',
    subCategory: 'Festive & Occasion',
    gender: 'girls',
    ageRange: '8-10Y',
    sizes: ['5-6Y', '7-8Y', '9-10Y', '11-12Y', '13-14Y'],
    colors: [
      { name: 'Gulab Peach', hex: '#EAA999', border: '#D83F4B' },
      { name: 'Pista Mint', hex: '#B8D8BA', border: '#39C6D5' }
    ],
    price: 1899,
    originalPrice: 2799,
    discount: '32% OFF',
    rating: 4.9,
    reviewsCount: 110,
    brand: 'Petit Papillon Heritage',
    material: 'Handcrafted Chanderi Silk-Cotton with 100% Mulmul Lining',
    description: 'Graceful festive kalidar silhouette adorned with subtle hand-block printed booties and an airy organza dupatta. Lined top-to-bottom for 100% skin comfort.',
    images: [
      'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['PREMIUM HERITAGE', 'PURE MUL LINING'],
    stock: 14,
    is_new: false,
    is_bestseller: true,
    is_trending: true,
    occasions: ['festive', 'party'],
    personalities: ['fashionista'],
    worldClub: 'princess',
    whyParentsLove: [
      'Entire inside is enveloped in breathable soft mulmul — no scratchy back seams',
      'Pants feature elasticated back and drawstring front for customizable fit',
      'Delicate golden border is soft threaded, not sharp metallic lurex',
      'Lightweight enough for a 6-hour Diwali party with zero fuss'
    ],
    completeTheLook: ['prod-08', 'prod-20']
  },
  {
    id: 'prod-17',
    name: 'Active Flex Comfort Denim Jeans',
    category: 'bottoms',
    subCategory: 'Jeans & Trousers',
    gender: 'boys',
    ageRange: '8-10Y',
    sizes: ['5-6Y', '7-8Y', '9-10Y', '11-12Y', '13-14Y'],
    colors: [
      { name: 'Vintage Indigo Wash', hex: '#3B577D', border: '#252321' },
      { name: 'Light Stone Wash', hex: '#879EB8', border: '#3979D0' }
    ],
    price: 999,
    originalPrice: 1599,
    discount: '37% OFF',
    rating: 4.8,
    reviewsCount: 175,
    brand: 'Loom & Sprout',
    material: 'Knit-Denim Hybrid (85% Cotton, 13% Poly, 2% Elastane)',
    description: 'Looks like classic vintage authentic denim on the outside, but feels just like comfy sweatpants on the inside. Specially woven for active running boys.',
    images: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['KNIT JEANS', 'EXTRA STRETCH'],
    stock: 29,
    is_new: false,
    is_bestseller: true,
    is_trending: false,
    occasions: ['school', 'everyday'],
    personalities: ['sporty', 'rockstar'],
    worldClub: 'sports',
    whyParentsLove: [
      'Soft loopback knit interior stops kids complaining that "jeans are too hard"',
      'Stretch waistband with faux snap fly for quick independent restroom visits',
      'Pre-faded whiskering that does not bleed in the washing machine',
      'Reinforced crotch gusset prevents embarrassing blowouts'
    ],
    completeTheLook: ['prod-02', 'prod-03']
  },
  {
    id: 'prod-18',
    name: 'Heirloom Pointelle Newborn Swaddle & Beanie Set',
    category: 'baby',
    subCategory: 'Gifting & Newborn',
    gender: 'baby',
    ageRange: '0-2Y',
    sizes: ['One Size (0-6M)'],
    colors: [
      { name: 'Pure Ivory', hex: '#F7F3EC', border: '#D8CEC1' },
      { name: 'Warm Almond', hex: '#D8CEC1', border: '#76563C' },
      { name: 'Misty Rose', hex: '#ECC4CA', border: '#D83F4B' }
    ],
    price: 699,
    originalPrice: 999,
    discount: '30% OFF',
    rating: 4.9,
    reviewsCount: 310,
    brand: 'Petit Papillon Baby',
    material: '100% GOTS Certified Pointelle Knit Organic Cotton',
    description: 'A keepsake welcome-to-the-world set. Delicate eyelet pointelle knit allows optimal airflow while maintaining the secure womb-like snugness babies crave.',
    images: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['BEST BABY SHOWER GIFT', 'ORGANIC'],
    stock: 35,
    is_new: false,
    is_bestseller: true,
    is_trending: false,
    occasions: ['sleepwear', 'everyday'],
    personalities: ['bookworm'],
    worldClub: 'animal',
    whyParentsLove: [
      'Generous 110cm x 110cm square size makes tight hospital swaddling simple',
      'Knot-top beanie easily adjusts to fit preemie to 6-month infant head sizes',
      'Comes tied in reusable organic cotton ribbon — ready for gifting',
      'Gets noticeably softer with every single wash cycle'
    ],
    completeTheLook: ['prod-06', 'prod-08']
  },
  {
    id: 'prod-19',
    name: 'Sunny Day Striped Organic Pocket Tee',
    category: 'tshirts',
    subCategory: 'Everyday Essentials',
    gender: 'girls',
    ageRange: '5-7Y',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    colors: [
      { name: 'Marigold & Ivory', hex: '#F6C84B', border: '#FF8A3D' },
      { name: 'Azure & Ivory', hex: '#71A8DE', border: '#3979D0' }
    ],
    price: 499,
    originalPrice: 799,
    discount: '37% OFF',
    rating: 4.8,
    reviewsCount: 114,
    brand: 'Loom & Sprout',
    material: '100% Yarn-Dyed Combed Organic Cotton (200 GSM)',
    description: 'French Riviera inspired horizontal stripes with a charming mini patch pocket. Yarn-dyed weave means the stripes stay crisp and never peel or crack.',
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['VALUE FAVORITE', 'YARN DYED'],
    stock: 42,
    is_new: false,
    is_bestseller: true,
    is_trending: false,
    occasions: ['everyday', 'summer', 'school'],
    personalities: ['artist', 'fashionista'],
    worldClub: 'princess',
    whyParentsLove: [
      'Yarn-dyed stripes will not fade into grey murky tones',
      'Boxy modern drop cut allows cool air circulation in humid weather',
      'Chest pocket is real and big enough to hold a little seashell or pebble',
      'Durable double-needle hem keeps shape without twisting sideways'
    ],
    completeTheLook: ['prod-13', 'prod-08']
  },
  {
    id: 'prod-20',
    name: 'Woven Sun Straw Hat with Chinstrap',
    category: 'accessories',
    subCategory: 'Hats & Sun Protection',
    gender: 'unisex',
    ageRange: '2-4Y',
    sizes: ['1-3Y', '3-6Y', '7-10Y'],
    colors: [
      { name: 'Natural Wheat', hex: '#E4D5B8', border: '#76563C' },
      { name: 'Soft Blush', hex: '#EAC8CE', border: '#D83F4B' }
    ],
    price: 599,
    originalPrice: 899,
    discount: '33% OFF',
    rating: 4.9,
    reviewsCount: 145,
    brand: 'Petit Papillon',
    material: '100% Natural Paper Straw with UPF 50+ Cotton Brim Lining',
    description: 'A stylish wide-brim sun hat engineered for active beach toddlers. Includes a gentle breakaway safety chin strap that stays on in windy breeze.',
    images: [
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['UPF 50+ PROTECTION', 'SAFETY STRAP'],
    stock: 25,
    is_new: false,
    is_bestseller: true,
    is_trending: true,
    occasions: ['summer', 'everyday'],
    personalities: ['explorer', 'fashionista'],
    worldClub: 'princess',
    whyParentsLove: [
      'Brim is wide enough to shade delicate nose, ears, and neck from harsh UV',
      'Breakaway safety clip on chinstrap releases if caught for child safety',
      'Crushable and packable into mother’s tote bag without losing brim shape',
      'Soft inner cotton sweatband prevents itchy forehead marks'
    ],
    completeTheLook: ['prod-01', 'prod-02']
  },
  {
    id: 'prod-21',
    name: 'Wild Safari Embroidered Linen Dungarees',
    category: 'baby',
    subCategory: 'Overalls & Sets',
    gender: 'baby',
    ageRange: '0-2Y',
    sizes: ['6-12M', '12-18M', '18-24M', '2-3Y'],
    colors: [
      { name: 'Lion Khaki', hex: '#C2A37E', border: '#76563C' },
      { name: 'Jungle Olive', hex: '#6C7E65', border: '#4B7B4B' }
    ],
    price: 1199,
    originalPrice: 1699,
    discount: '29% OFF',
    rating: 4.9,
    reviewsCount: 92,
    brand: 'Little Heirloom',
    material: '55% Organic Linen, 45% Combed Cotton',
    description: 'Utterly adorable safari overalls with tiny embroidered lions and giraffe silhouettes. Features full inseam hidden brass snaps for instant diaper access.',
    images: [
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['INSTAGRAM HIT', 'SNAP DIAPER ACCESS'],
    stock: 20,
    is_new: true,
    is_bestseller: false,
    is_trending: true,
    occasions: ['everyday', 'party', 'summer'],
    personalities: ['explorer', 'artist'],
    worldClub: 'animal',
    whyParentsLove: [
      'Full leg-to-leg snaps allow diaper changes without removing the entire outfit',
      'Cross-back straps with 2 button levels adjust as infant lengthens',
      'Breathable linen-cotton blend prevents toddler heat rashes',
      'Sturdy real pockets for holding teething rings and pacifiers'
    ],
    completeTheLook: ['prod-03', 'prod-08']
  },
  {
    id: 'prod-22',
    name: 'Galaxy Glow Fleece Zip Hoodie',
    category: 'jackets',
    subCategory: 'Hoodies & Sweatshirts',
    gender: 'boys',
    ageRange: '5-7Y',
    sizes: ['4-5Y', '5-6Y', '6-7Y', '7-8Y', '8-10Y'],
    colors: [
      { name: 'Deep Nebula', hex: '#222847', border: '#3979D0' },
      { name: 'Space Cadet Grey', hex: '#4A5568', border: '#252321' }
    ],
    price: 1299,
    originalPrice: 1799,
    discount: '28% OFF',
    rating: 4.8,
    reviewsCount: 160,
    brand: 'Tiny Voyager',
    material: '100% Brushed Back Cotton Fleece (280 GSM)',
    description: 'A cozy zip jacket with constellation maps that softly illuminate when entering the bedroom. Finished with an easy-glide chunky YKK zipper.',
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['BESTSELLER', 'GLOW MAPS'],
    stock: 23,
    is_new: false,
    is_bestseller: true,
    is_trending: false,
    occasions: ['winter', 'school', 'everyday'],
    personalities: ['explorer', 'rockstar'],
    worldClub: 'space',
    whyParentsLove: [
      'Chunky zip pull makes it easy for little kindergartners to zip up themselves',
      'Thermal brushed interior shields against AC chill and autumn winds',
      'Constellation print is non-toxic zinc-sulfide glow powder, 100% skin safe',
      'Deep kangaroo hand pockets keep chilly hands warm'
    ],
    completeTheLook: ['prod-05', 'prod-08']
  },
  {
    id: 'prod-23',
    name: 'Ballerina Rose Quilted Jacket',
    category: 'jackets',
    subCategory: 'Outerwear',
    gender: 'girls',
    ageRange: '2-4Y',
    sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y'],
    colors: [
      { name: 'Dusty Rose', hex: '#DFA5AC', border: '#D83F4B' },
      { name: 'French Cream', hex: '#F7F3EC', border: '#76563C' }
    ],
    price: 1499,
    originalPrice: 2199,
    discount: '32% OFF',
    rating: 4.9,
    reviewsCount: 88,
    brand: 'Petit Papillon',
    material: '100% Organic Cotton Voile with Recycled Polyfill',
    description: 'Diamond-quilted cotton jacket lined with delicate rosebud prints. Lightweight yet toasty warm, finished with soft corduroy piping along the collar.',
    images: [
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['NEW', 'QUILTED LUXURY'],
    stock: 14,
    is_new: true,
    is_bestseller: false,
    is_trending: true,
    occasions: ['winter', 'party', 'everyday'],
    personalities: ['fashionista', 'artist'],
    worldClub: 'princess',
    whyParentsLove: [
      'Featherweight warmth that does not restrict toddler arm mobility in car seats',
      'Velvety soft corduroy collar feels snuggly against neck with zero itch',
      'Snap front snaps shut in 5 seconds when rushing out for school',
      'Spot cleans easily with a damp soapy cloth'
    ],
    completeTheLook: ['prod-01', 'prod-20']
  },
  {
    id: 'prod-24',
    name: 'Junior Rockstar Biker Denim Jacket',
    category: 'jackets',
    subCategory: 'Denim & Streetwear',
    gender: 'boys',
    ageRange: '8-10Y',
    sizes: ['6-7Y', '7-8Y', '8-10Y', '10-12Y', '12-14Y'],
    colors: [
      { name: 'Washed Charcoal', hex: '#333238', border: '#252321' },
      { name: 'Electric Blue', hex: '#2A4E9E', border: '#3979D0' }
    ],
    price: 1699,
    originalPrice: 2399,
    discount: '29% OFF',
    rating: 4.8,
    reviewsCount: 79,
    brand: 'Tiny Voyager',
    material: 'Comfort Stretch Washed Cotton Denim (11 oz)',
    description: 'Instant attitude for cool kids. Softened denim trucker jacket with snap cuffs, matte gunmetal hardware, and secret inside chest pocket for comic books.',
    images: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80'
    ],
    badges: ['STREETWEAR', 'EXTRA SOFT DENIM'],
    stock: 17,
    is_new: false,
    is_bestseller: true,
    is_trending: true,
    occasions: ['party', 'everyday', 'winter'],
    personalities: ['rockstar', 'fashionista'],
    worldClub: 'superhero',
    whyParentsLove: [
      'Pre-washed enzyme wash makes denim flexible and supple, never stiff',
      'Internal secret pocket for sanitizer, cards, or notes',
      'Heavy-duty snap buttons will not rip out through buttonholes',
      'Elevates a basic t-shirt and jeans into a stylish family event outfit'
    ],
    completeTheLook: ['prod-03', 'prod-17']
  }
];

export const HERO_FEATURED_IDS = ['prod-01', 'prod-02', 'prod-03', 'prod-04', 'prod-06'];
export const EDITORIAL_PICKS = ['prod-01', 'prod-02', 'prod-07', 'prod-10', 'prod-16', 'prod-23'];
export const BENTO_FEATURED = ['prod-03', 'prod-04', 'prod-05', 'prod-09', 'prod-11', 'prod-15'];
export const BEST_SELLERS = ['prod-01', 'prod-03', 'prod-05', 'prod-06', 'prod-08', 'prod-10', 'prod-12', 'prod-18'];
