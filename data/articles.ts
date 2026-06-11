export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  productCount: number;
  description: string;
  excerpt: string;
  readTime: string;
}

const articles: Article[] = [
  {
    slug: "best-vacuum-sealer-machines",
    title: "Best Vacuum Sealer Machines (2026)",
    metaTitle: "Best Vacuum Sealer Machines (2026 Guide) | FermentCrush",
    metaDescription:
      "Discover the best vacuum sealer machines of 2026. We compare suction power, seal modes, bag compatibility, and sous vide performance for home cooks and meal preppers.",
    category: "Vacuum Sealer Machines",
    productCount: 6,
    description:
      "Expert-reviewed vacuum sealers for meal prep, food preservation, and sous vide — from compact countertop models to full-featured external sealers.",
    excerpt:
      "The right vacuum sealer extends food freshness by up to five times compared to standard storage. We compared six of the most popular models available in 2026.",
    readTime: "11 min read",
  },
  {
    slug: "best-mason-jar-lids",
    title: "Best Mason Jar Fermentation Lids (2026)",
    metaTitle: "Best Mason Jar Fermentation Lids (2026 Guide) | FermentCrush",
    metaDescription:
      "Find the best mason jars and lids for canning, fermentation, and food storage in 2026. Regular and wide mouth options compared for home cooks and fermenters.",
    category: "Mason Jars & Lids",
    productCount: 6,
    description:
      "Versatile mason jars for fermenting, canning, overnight oats, dry storage, and meal prep — our top picks across regular and wide mouth sizes.",
    excerpt:
      "Mason jars remain the most versatile food storage vessel in the kitchen. We reviewed six of the best options across sizes, lid types, and use cases.",
    readTime: "9 min read",
  },
  {
    slug: "best-airtight-food-storage",
    title: "Best Airtight Food Storage Containers (2026)",
    metaTitle: "Best Airtight Food Storage Containers (2026 Guide) | FermentCrush",
    metaDescription:
      "The best airtight food storage containers of 2026. Glass, plastic, and tritan sets compared for pantry organization, meal prep, and long-term food freshness.",
    category: "Airtight Food Storage",
    productCount: 6,
    description:
      "From glass meal-prep sets to pantry canister systems, our complete guide to the best airtight food storage containers for organized, fresh kitchens.",
    excerpt:
      "Proper airtight storage is the most underrated upgrade in any kitchen. We evaluated six container systems for seal quality, stackability, and material safety.",
    readTime: "10 min read",
  },
  {
    slug: "best-digital-kitchen-thermometers",
    title: "Best Digital Kitchen Thermometers (2026)",
    metaTitle: "Best Digital Kitchen Thermometers (2026 Guide) | FermentCrush",
    metaDescription:
      "The best digital kitchen thermometers of 2026. Instant-read, backlit, and waterproof models compared for meat, bread, candy, and fermentation temperature monitoring.",
    category: "Digital Kitchen Thermometers",
    productCount: 6,
    description:
      "Precision instant-read thermometers for grilling, baking, candy making, and fermentation — our tested picks from budget to professional grade.",
    excerpt:
      "Temperature accuracy determines the outcome of everything from a grilled steak to a sourdough proof. We reviewed six digital thermometers for speed, precision, and durability.",
    readTime: "10 min read",
  },
  {
    slug: "best-kitchen-scales",
    title: "Best Kitchen Scales for Fermentation & Baking (2026)",
    metaTitle: "Best Kitchen Scales for Fermentation & Baking (2026 Guide) | FermentCrush",
    metaDescription:
      "The best kitchen scales for fermentation and baking in 2026. Digital food scales compared by max weight, graduation, platform material, and tare function.",
    category: "Kitchen Scales",
    productCount: 6,
    description:
      "From precise 0.1g baker's scales to heavy-duty 33lb kitchen workhorses, our complete guide to the best digital food scales for home cooks in 2026.",
    excerpt:
      "Weighing ingredients rather than measuring by volume is the single biggest upgrade any home cook or baker can make. We evaluated six digital scales for accuracy, build quality, and ease of use.",
    readTime: "9 min read",
  },
  {
    slug: "best-sourdough-starter-kits",
    title: "Best Sourdough Starter Kits & Banneton Baskets (2026)",
    metaTitle: "Best Sourdough Starter Kits & Banneton Baskets (2026 Guide) | FermentCrush",
    metaDescription:
      "The best sourdough starter kits and banneton proofing baskets of 2026. Live cultures, dehydrated starters, lame scoring tools, and proofing basket sets reviewed.",
    category: "Sourdough Baking Supplies",
    productCount: 6,
    description:
      "Everything you need to start and maintain a sourdough practice: starter cultures, proofing baskets, scoring tools, and complete kit sets.",
    excerpt:
      "Sourdough demands both microbiology and technique. We reviewed six essential tools — from starter cultures to banneton baskets — to help you build your practice.",
    readTime: "14 min read",
  },
  {
    slug: "best-cutting-boards",
    title: "Best Cutting Boards for Food Prep & Fermentation (2026)",
    metaTitle: "Best Cutting Boards for Food Prep & Fermentation (2026 Guide) | FermentCrush",
    metaDescription:
      "The best cutting boards for food prep and fermentation in 2026. Bamboo, plastic, and composite boards compared for knife-friendliness, juice grooves, and durability.",
    category: "Cutting Boards",
    productCount: 6,
    description:
      "From reversible bamboo boards to dishwasher-safe composite sets, our complete guide to the best cutting boards for everyday food prep and fermentation work.",
    excerpt:
      "The right cutting board protects your knives, keeps your workspace hygienic, and makes food prep faster and safer. We evaluated six top options for 2026.",
    readTime: "10 min read",
  },
  {
    slug: "best-mandoline-slicers",
    title: "Best Mandoline Slicers for Home Cooks (2026)",
    metaTitle: "Best Mandoline Slicers for Home Cooks (2026 Guide) | FermentCrush",
    metaDescription:
      "The best mandoline slicers for home cooks in 2026. Adjustable blades, safety features, thickness settings, and vegetable chopper combos compared.",
    category: "Mandoline Slicers",
    productCount: 6,
    description:
      "Precise, consistent slicing for vegetables, fruits, and fermentation prep — our top mandoline picks from handheld models to full pro-series slicers.",
    excerpt:
      "A sharp mandoline transforms prep time and cut consistency. We evaluated six models for blade quality, safety features, and real-world kitchen performance.",
    readTime: "10 min read",
  },
];

export default articles;
