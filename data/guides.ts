export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  excerpt: string;
  readTime: string;
  imageAlt: string;
  coverImage: string;
}

const guides: Guide[] = [
  {
    slug: "beginners-guide-to-lacto-fermentation",
    title: "The Complete Beginner's Guide to Lacto-Fermentation",
    metaTitle: "The Complete Beginner's Guide to Lacto-Fermentation | FermentCrush",
    metaDescription:
      "Learn everything about lacto-fermentation: how salt works, what equipment you need, and how to make your first successful batch of fermented vegetables.",
    category: "Foundations",
    excerpt:
      "Lacto-fermentation is one of the oldest food preservation techniques on Earth — and one of the most accessible. This guide covers everything you need for your first successful batch.",
    readTime: "18 min read",
    imageAlt: "Glass jars of lacto-fermented vegetables on a wooden counter",
    coverImage:
      "https://images.unsplash.com/photo-1547332184-070705bccbd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "how-to-make-sauerkraut-at-home",
    title: "How to Make Sauerkraut at Home: Step-by-Step",
    metaTitle: "How to Make Sauerkraut at Home: Step-by-Step Guide | FermentCrush",
    metaDescription:
      "A complete step-by-step guide to making sauerkraut at home. Learn cabbage selection, salting ratios, packing technique, fermentation timeline, and troubleshooting.",
    category: "Sauerkraut",
    excerpt:
      "Sauerkraut requires just two ingredients — cabbage and salt — but the technique makes all the difference. Follow this detailed walkthrough for crisp, tangy, probiotic-rich results.",
    readTime: "20 min read",
    imageAlt: "Fresh shredded cabbage being massaged with salt in a ceramic bowl",
    coverImage:
      "https://images.unsplash.com/photo-1695089028077-5e7949d238d3?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "kombucha-first-second-fermentation",
    title: "Kombucha First & Second Fermentation: A Complete Guide",
    metaTitle: "Kombucha First & Second Fermentation: Complete Guide | FermentCrush",
    metaDescription:
      "Master kombucha brewing with this complete guide to first and second fermentation. Covers SCOBY care, F1 vs F2, carbonation, flavoring, and bottling techniques.",
    category: "Kombucha",
    excerpt:
      "Understanding the two-stage fermentation process is the key to producing kombucha with the right balance of tang, sweetness, and natural carbonation.",
    readTime: "22 min read",
    imageAlt: "Kombucha SCOBY in a glass jar with starter liquid",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1720417416322-ef77a7b28b89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "sourdough-starter-from-scratch",
    title: "How to Build a Sourdough Starter from Scratch in 7 Days",
    metaTitle: "How to Build a Sourdough Starter from Scratch in 7 Days | FermentCrush",
    metaDescription:
      "Build a vigorous sourdough starter from scratch in 7 days. Includes daily feeding schedule, activity signs to look for, troubleshooting tips, and long-term maintenance.",
    category: "Sourdough",
    excerpt:
      "A healthy sourdough starter is the foundation of great bread. This 7-day program walks you through every feeding, every sign of life, and every hiccup along the way.",
    readTime: "25 min read",
    imageAlt: "Bubbly sourdough starter in a glass jar with measurement markings",
    coverImage:
      "https://images.unsplash.com/photo-1597604391235-a7429b4b350c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "how-to-make-kimchi-at-home",
    title: "How to Make Kimchi at Home: A Step-by-Step Guide",
    metaTitle: "How to Make Kimchi at Home: Step-by-Step Guide | FermentCrush",
    metaDescription:
      "A complete guide to making kimchi at home — from salting napa cabbage to building the paste and managing the ferment. Includes troubleshooting and timing tips.",
    category: "Kimchi",
    excerpt:
      "Kimchi is Korea's most celebrated fermented dish — spicy, tangy, and packed with probiotics. This guide walks you through every step, from salting the cabbage to the final ferment.",
    readTime: "20 min read",
    imageAlt: "Freshly made kimchi in a ceramic bowl with napa cabbage and red pepper paste",
    coverImage:
      "https://images.unsplash.com/photo-1708388065149-1304dec1f0ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "fermentation-troubleshooting-guide",
    title: "The Home Fermenter's Guide to Troubleshooting",
    metaTitle: "Fermentation Troubleshooting Guide: Fix Every Problem | FermentCrush",
    metaDescription:
      "Something went wrong with your ferment? This guide covers every common problem — from kahm yeast to mushy vegetables — and tells you exactly what to do.",
    category: "Troubleshooting",
    excerpt:
      "Something went wrong with your ferment? Don't throw it out yet. This guide covers every common problem — from kahm yeast to mushy vegetables — and tells you exactly what to do.",
    readTime: "16 min read",
    imageAlt: "Glass jars of fermented vegetables with visible brine and airlock lids",
    coverImage:
      "https://images.unsplash.com/photo-1534778278219-0d8f01ad8aef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default guides;
