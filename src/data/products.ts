export type ProductCategory = 'finfish' | 'shellfish' | 'specialty';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  formats: string[];
  origin: string;
  fishery: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'gulf-shrimp',
    name: 'Wild-Caught Gulf Shrimp',
    category: 'shellfish',
    description: 'Sweet, succulent shrimp harvested from the warm waters of the Gulf of Mexico. Known for their firm texture and naturally briny flavor.',
    formats: ['Fresh (head-on/headless)', 'Frozen IQF', 'Peeled & Deveined', 'Various sizes: U-10 to 41/50'],
    origin: 'Gulf of Mexico',
    fishery: 'Gulf of Mexico Shrimp Fishery',
    image: '/images/products/shrimp.jpg',
    featured: true,
  },
  {
    id: 'atlantic-grouper',
    name: 'Atlantic Grouper',
    category: 'finfish',
    description: 'Premium white-fleshed fish with a mild, sweet flavor and firm, flaky texture. Perfect for grilling, baking, or pan-searing.',
    formats: ['Fresh whole', 'Fresh fillets', 'Frozen fillets', 'Skin-on/skinless options'],
    origin: 'South Atlantic Coast',
    fishery: 'South Atlantic Snapper-Grouper Fishery',
    image: '/images/products/grouper.jpg',
    featured: true,
  },
  {
    id: 'yellowfin-tuna',
    name: 'Yellowfin Tuna',
    category: 'finfish',
    description: 'Sashimi-grade yellowfin with deep red flesh and rich, meaty flavor. Ideal for raw preparations, searing, or grilling.',
    formats: ['Fresh loins', 'Saku blocks', 'Steaks', 'Frozen super-frozen (-60°F)'],
    origin: 'Atlantic Ocean',
    fishery: 'Atlantic Highly Migratory Species',
    image: '/images/products/tuna.jpg',
    featured: true,
  },
  {
    id: 'red-snapper',
    name: 'American Red Snapper',
    category: 'finfish',
    description: 'The crown jewel of Gulf seafood. Lean, moist flesh with a distinctive sweet, nutty flavor that stands up to any cooking method.',
    formats: ['Fresh whole', 'Fresh fillets', 'Frozen fillets', '2-8 lb fish available'],
    origin: 'Gulf of Mexico',
    fishery: 'Gulf of Mexico Reef Fish Fishery',
    image: '/images/products/snapper.jpg',
    featured: true,
  },
  {
    id: 'mahi-mahi',
    name: 'Mahi-Mahi (Dolphinfish)',
    category: 'finfish',
    description: 'Vibrant, firm-fleshed fish with a mild, sweet flavor. Excellent for grilling and pairs beautifully with tropical preparations.',
    formats: ['Fresh fillets', 'Frozen fillets', 'Portions', 'Skin-on/skinless'],
    origin: 'Atlantic & Gulf Waters',
    fishery: 'Atlantic Dolphin Wahoo Fishery',
    image: '/images/products/mahi.jpg',
  },
  {
    id: 'snow-crab',
    name: 'Snow Crab Legs',
    category: 'shellfish',
    description: 'Sweet, delicate crab meat with tender texture. Harvested from the cold, pristine waters of the North Atlantic.',
    formats: ['Clusters', 'Sections', 'Various sizes: 5/8 to 8/up', 'Frozen glazed'],
    origin: 'North Atlantic',
    fishery: 'Atlantic Snow Crab Fishery',
    image: '/images/products/snowcrab.jpg',
    featured: true,
  },
  {
    id: 'stone-crab',
    name: 'Florida Stone Crab Claws',
    category: 'shellfish',
    description: 'A Florida delicacy with sweet, firm meat. Sustainably harvested—only the claws are taken, and crabs are returned to regenerate.',
    formats: ['Cooked claws', 'Medium to Jumbo sizes', 'Fresh (seasonal)', 'Frozen'],
    origin: 'Florida Gulf Coast',
    fishery: 'Florida Stone Crab Fishery',
    image: '/images/products/stonecrab.jpg',
  },
  {
    id: 'blue-crab',
    name: 'Blue Crab',
    category: 'shellfish',
    description: 'Classic Atlantic blue crab with sweet, tender meat. Available live, as picked meat, or soft-shell.',
    formats: ['Live', 'Picked lump meat', 'Claw meat', 'Soft-shell (seasonal)'],
    origin: 'Chesapeake Bay & Gulf Coast',
    fishery: 'Atlantic Blue Crab Fishery',
    image: '/images/products/bluecrab.jpg',
  },
  {
    id: 'swordfish',
    name: 'North Atlantic Swordfish',
    category: 'finfish',
    description: 'Meaty, steak-like texture with a mild, slightly sweet flavor. Perfect for grilling and holds up well to bold seasonings.',
    formats: ['Fresh steaks', 'Loins', 'Frozen portions', 'Center-cut available'],
    origin: 'North Atlantic',
    fishery: 'Atlantic Swordfish Fishery',
    image: '/images/products/swordfish.jpg',
  },
  {
    id: 'florida-lobster',
    name: 'Florida Spiny Lobster',
    category: 'shellfish',
    description: 'Sweet, tender tail meat from warm Florida waters. Unlike Maine lobster, spiny lobster has no claws—all the meat is in the tail.',
    formats: ['Whole', 'Tails', 'Fresh (seasonal)', 'Frozen'],
    origin: 'Florida Keys',
    fishery: 'South Atlantic/Gulf Spiny Lobster Fishery',
    image: '/images/products/lobster.jpg',
  },
  {
    id: 'oysters',
    name: 'Gulf Coast Oysters',
    category: 'shellfish',
    description: 'Briny, plump oysters from the Gulf\'s rich estuaries. Mild salinity with a creamy, buttery finish.',
    formats: ['Live in shell', 'Shucked', 'Half-shell ready', 'Various counts'],
    origin: 'Gulf of Mexico',
    fishery: 'Gulf of Mexico Oyster Fishery',
    image: '/images/products/oysters.jpg',
  },
  {
    id: 'triggerfish',
    name: 'Gray Triggerfish',
    category: 'finfish',
    description: 'An underrated gem with firm, white flesh and a clean, sweet flavor. Excellent for ceviche or pan-frying.',
    formats: ['Fresh whole', 'Fresh fillets', 'Frozen fillets'],
    origin: 'South Atlantic & Gulf',
    fishery: 'South Atlantic Snapper-Grouper Fishery',
    image: '/images/products/triggerfish.jpg',
  },
  {
    id: 'black-sea-bass',
    name: 'Black Sea Bass',
    category: 'finfish',
    description: 'Delicate, flaky white fish with a mild, slightly sweet flavor. A favorite in fine dining establishments.',
    formats: ['Fresh whole', 'Fresh fillets', 'Frozen', '1-3 lb fish'],
    origin: 'Mid-Atlantic Coast',
    fishery: 'Mid-Atlantic Black Sea Bass Fishery',
    image: '/images/products/seabass.jpg',
  },
  {
    id: 'scallops',
    name: 'Atlantic Sea Scallops',
    category: 'shellfish',
    description: 'Large, sweet scallops with a buttery texture. Dry-packed (no water added) for perfect searing.',
    formats: ['Fresh dry-packed', 'Frozen IQF', 'U-10 to 20/30 counts', 'Diver scallops available'],
    origin: 'New England',
    fishery: 'Atlantic Sea Scallop Fishery',
    image: '/images/products/scallops.jpg',
  },
  {
    id: 'wahoo',
    name: 'Wahoo',
    category: 'specialty',
    description: 'Prized gamefish with lean, white, flaky meat and a mild, delicate flavor. Excellent grilled or as poke.',
    formats: ['Fresh fillets', 'Steaks', 'Frozen portions'],
    origin: 'Atlantic & Gulf Waters',
    fishery: 'Atlantic Dolphin Wahoo Fishery',
    image: '/images/products/wahoo.jpg',
  },
  {
    id: 'cobia',
    name: 'Cobia',
    category: 'specialty',
    description: 'Rich, buttery fish with firm texture similar to swordfish. Increasingly popular in upscale restaurants.',
    formats: ['Fresh fillets', 'Portions', 'Frozen'],
    origin: 'Gulf of Mexico & South Atlantic',
    fishery: 'Atlantic Cobia Fishery',
    image: '/images/products/cobia.jpg',
  },
];

export const categories: { id: ProductCategory | 'all'; name: string; description: string }[] = [
  { id: 'all', name: 'All Products', description: 'Browse our complete selection' },
  { id: 'finfish', name: 'Finfish', description: 'Premium fish from American waters' },
  { id: 'shellfish', name: 'Shellfish', description: 'Shrimp, crab, lobster & more' },
  { id: 'specialty', name: 'Specialty', description: 'Unique catches & seasonal items' },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (category: ProductCategory | 'all') => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => products.find(p => p.id === id);

