import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import guides from "@/data/guides";
import articles from "@/data/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const DEDICATED_PAGES = ["how-to-make-kimchi-at-home", "fermentation-troubleshooting-guide"];

export async function generateStaticParams() {
  return guides
    .filter((g) => !DEDICATED_PAGES.includes(g.slug))
    .map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: { title: guide.metaTitle, description: guide.metaDescription, type: "article" },
    twitter: { card: "summary_large_image" },
  };
}

// Guide content data
const guideContent: Record<string, {
  sections: { id: string; heading: string; content: string[] }[];
  tips: string[];
  relatedArticles: string[];
  outboundLinks: { label: string; href: string }[];
}> = {
  "beginners-guide-to-lacto-fermentation": {
    sections: [
      {
        id: "what-is-lacto",
        heading: "What Is Lacto-Fermentation?",
        content: [
          "Lacto-fermentation is a form of anaerobic fermentation driven by Lactobacillus bacteria — microorganisms naturally present on the surface of all fresh vegetables and in the environment around us. Given the right conditions (salt, moisture, and the absence of oxygen), these bacteria flourish and begin converting vegetable sugars into lactic acid. That lactic acid is what preserves the food, creates the characteristic tangy flavor, and establishes the acidic environment that makes fermented foods inhospitable to harmful pathogens.",
          "The 'lacto' prefix refers to lactic acid, not dairy — lacto-fermented vegetables contain no milk products. The name distinguishes this bacterial fermentation pathway from other fermentation processes driven primarily by yeast (as in beer and wine) or mold (as in cheese and miso).",
          "Unlike canning, which kills microorganisms through heat, or pickling with vinegar, which kills them with acid, lacto-fermentation preserves vegetables while keeping those microorganisms alive. The result is food teeming with diverse probiotic bacteria — a density and diversity that commercial processing consistently cannot match.",
        ],
      },
      {
        id: "how-salt-works",
        heading: "How Salt Works in Fermentation",
        content: [
          "Salt plays two critical roles in lacto-fermentation. First, it draws moisture out of the vegetables through osmosis — the cellular fluid and dissolved minerals in the vegetables migrate through the cell walls toward the higher-concentration salt environment. This process, called 'plasmolysis,' produces the natural brine that vegetables ferment in. Second, salt selects for the beneficial bacteria you want by creating conditions that most harmful organisms cannot survive.",
          "The concentration matters enormously. Too little salt (below 1.5%) and harmful bacteria may survive alongside your beneficial cultures, producing off-flavors or unsafe food. Too much salt (above 3%) and you'll suppress even the beneficial Lactobacillus strains you're relying on, resulting in a slow, flat ferment or no fermentation at all. The standard for most vegetable ferments is 2% salt by weight of the vegetables — approximately 1 teaspoon of non-iodized salt per pound of shredded cabbage.",
          "Always use non-iodized salt — sea salt, kosher salt, or pickling salt. Iodine is added to table salt as a health supplement, but it's also antimicrobial. Even small quantities can inhibit the lactic acid bacteria you need. This is one of the most common beginner mistakes and one of the easiest to avoid.",
        ],
      },
      {
        id: "equipment",
        heading: "Equipment You Need",
        content: [
          "The minimum equipment for your first lacto-ferment is remarkably modest: a clean glass jar (quart or half-gallon), a fermentation lid or improvised airlock, a fermentation weight, a kitchen scale, and non-iodized salt. A kitchen scale is genuinely non-negotiable — estimating salt by volume rather than weight produces inconsistent results. Invest in a digital kitchen scale that measures in grams before your first batch.",
          "A fermentation weight keeps vegetables submerged below the brine. Without submersion, oxygen reaches the vegetables, which can lead to mold. Your options range from commercial glass weights (purpose-built for mason jars) to improvised solutions like a small zip-lock bag filled with brine. Purpose-built glass weights are inexpensive enough that improvising isn't worth the compromise.",
          "A fermentation lid with an airlock is your oxygen barrier. Standard canning lids create pressure buildup that requires daily 'burping.' Purpose-built airlock lids — silicone self-venting valves or traditional S-curve water airlocks — handle this automatically. They're the single most meaningful upgrade you can make to a beginner setup.",
        ],
      },
      {
        id: "first-batch",
        heading: "Your First Batch: Step by Step",
        content: [
          "Choose your vegetable. Start with cabbage (for sauerkraut) or a simple mix of whatever vegetables you enjoy. Wash everything thoroughly and remove any damaged or wilted outer leaves.",
          "Weigh your vegetables. Record the weight in grams. Calculate 2% salt: multiply the vegetable weight by 0.02. This is how many grams of non-iodized salt to use. For 800g of shredded cabbage, you'd use 16g of salt.",
          "Shred finely and combine with salt in a large bowl. Massage the salt into the shreds aggressively for 5–10 minutes until the vegetables release substantial liquid brine. The shreds should feel soft and wet, and a significant pool of brine should accumulate in the bowl.",
          "Pack tightly into a clean jar, pressing down hard between each addition to eliminate air pockets. Pour any accumulated brine from the bowl into the jar. Place your fermentation weight on top and press down until all vegetables are below the brine line. Seal with your airlock lid.",
          "Leave at room temperature (65–75°F is ideal) for 5–21 days, tasting periodically beginning on day 5. When the flavor suits your preference, transfer to the refrigerator where fermentation will continue very slowly. Your ferment will keep for 6–12 months refrigerated.",
        ],
      },
    ],
    tips: ["Use a kitchen scale for salt — volume measurements are too imprecise for reliable fermentation results.", "Pack your jar in the sink the first time — brine can overflow during active fermentation."],
    relatedArticles: ["best-vacuum-sealer-machines", "best-mason-jar-lids", "best-airtight-food-storage"],
    outboundLinks: [
      { label: "USDA National Center for Home Food Preservation", href: "https://nchfp.uga.edu/how/can_06/ferment.html" },
      { label: "NIH: Health Benefits of Fermented Foods", href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4290080/" },
    ],
  },
  "how-to-make-sauerkraut-at-home": {
    sections: [
      {
        id: "choosing-cabbage",
        heading: "Choosing and Preparing Your Cabbage",
        content: [
          "Not all cabbage is equal for sauerkraut. Dense, heavy heads with tightly packed leaves produce more brine and better texture than loose, airy heads. Green cabbage is traditional and produces the classic sauerkraut flavor. Red cabbage makes a striking purple-pink kraut with slightly more earthy flavor notes. Savoy cabbage ferments well but produces a softer texture. Whatever variety you choose, look for firm, heavy heads with crisp leaves — fresh cabbage ferments better and produces more brine than cabbage that's been stored a long time.",
          "Remove the outermost 2–3 leaves and set aside — you'll use one of these as a cover over the shredded cabbage in the jar later. Quarter the head, cut out the dense core, and begin shredding. The core doesn't shred well and can produce off-flavors during extended fermentation.",
        ],
      },
      {
        id: "salting-ratio",
        heading: "The Critical Salting Ratio",
        content: [
          "The standard sauerkraut salt ratio is 2% salt by total vegetable weight — 20 grams of salt per kilogram of cabbage, or approximately 1 teaspoon per pound. This ratio has been validated across centuries of traditional fermentation practice and verified by modern food science as the optimal balance between brine production and microbial selection.",
          "Weigh your shredded cabbage on a kitchen scale. Multiply by 0.02 to calculate your exact salt amount. Use non-iodized sea salt or kosher salt — iodized table salt inhibits the lactic acid bacteria essential for fermentation. Pickling salt also works well and is specifically formulated to dissolve quickly in brine.",
          "After adding salt, massage the shreds vigorously with both hands for 8–10 minutes. You'll feel the cabbage soften and weep as the salt draws out cellular moisture. The goal is to produce enough brine to cover the cabbage completely in the jar — typically 3–5 tablespoons per pound of cabbage. If your cabbage is older and less juicy, you may need to add a small amount of additional brine (1 teaspoon salt dissolved in 1 cup water).",
        ],
      },
      {
        id: "packing-timeline",
        heading: "Packing Technique and Timeline",
        content: [
          "Packing is the most physically demanding step in sauerkraut making — and the most important for quality. Transfer small handfuls of salted, massaged cabbage into your jar, pressing each layer firmly downward with a wooden tamper, your fist, or the back of a large spoon. The goal is to eliminate every air pocket. Each layer should compress against the previous one until brine rises to meet the new addition.",
          "When your jar is packed to within 2 inches of the rim, press the reserved outer cabbage leaf over the shredded kraut. This creates a smooth, even surface that holds the weight and prevents small shreds from floating above the brine. Place your fermentation weight on top and press until brine rises clearly above the cabbage and weight. Seal with an airlock lid.",
          "The fermentation timeline depends on your temperature and preference. At 72°F: Day 1–2, brine production and initial bacteria activation. Day 3–5, vigorous CO2 production — check your airlock and ensure submersion. Day 7, the kraut should be pleasantly tangy and crunchy — fresh-style. Day 14, flavor deepens and acid increases — traditional style. Day 21–28, full lacto-fermentation with complex, sharp flavor. Taste daily beginning on day 5 and transfer to refrigerator jars when you reach your preferred acidity.",
        ],
      },
      {
        id: "troubleshooting",
        heading: "Troubleshooting Common Problems",
        content: [
          "White surface film (kahm yeast): A flat, white, sometimes wrinkled film on the surface of your brine is kahm yeast — harmless surface yeast that forms when small amounts of oxygen contact the brine surface. Skim it off with a clean spoon, check that your vegetables are fully submerged, and ensure your weight is pressing everything below the brine line. The kraut underneath is safe to continue fermenting.",
          "Soft or mushy texture: Most commonly caused by too little salt (below 1.5%) or too-warm fermentation temperatures (above 80°F). Both conditions over-activate the pectinase enzymes that break down pectin in cell walls. For crisp sauerkraut, use accurate 2% salt ratios and ferment in a 65–72°F environment.",
          "Not enough brine after packing: Add additional brine made from 1 teaspoon non-iodized salt dissolved in 1 cup of non-chlorinated water. This is normal with older cabbage or varieties with lower moisture content. The brine is critical — never ferment cabbage that isn't covered.",
        ],
      },
    ],
    tips: ["Your hands are your best packing tools — press with your fists and feel the brine rising through your fingers as you compress each layer.", "Label your jars with date packed and salt percentage — this data helps you repeat success and understand variation between batches."],
    relatedArticles: ["best-cutting-boards", "best-mandoline-slicers", "best-kitchen-scales"],
    outboundLinks: [
      { label: "USDA: Fermenting Vegetables Safely", href: "https://nchfp.uga.edu/" },
      { label: "University of Wisconsin Extension: Sauerkraut Making", href: "https://extension.wisc.edu/" },
    ],
  },
  "kombucha-first-second-fermentation": {
    sections: [
      {
        id: "scoby-care",
        heading: "Understanding and Caring for Your SCOBY",
        content: [
          "The SCOBY (Symbiotic Culture Of Bacteria and Yeast) is the living engine of kombucha brewing. It's a cellulose mat created by the bacteria in your culture as a byproduct of their metabolism — essentially a self-generated home for the microbial community that brews your kombucha. A healthy SCOBY is cream to tan colored, firm and rubbery in texture, and smells pleasantly vinegary. Brown discoloration from tea tannins and yeast strings hanging beneath it are completely normal.",
          "SCOBYs grow with each batch, forming a new layer at the liquid surface. Over time you'll accumulate multiple 'babies' — extra layers that can be peeled off and stored in a SCOBY hotel (a jar of strong starter liquid), given to friends, or composted. Keep your thickest, healthiest layer as your primary brewing SCOBY. There's no benefit to brewing with multiple stacked layers — one healthy SCOBY brews just as effectively.",
          "SCOBY health depends most on temperature (75–80°F is ideal), quality starter liquid (at least 10% of your total brew volume), and avoiding contamination. Never use metal utensils with your SCOBY — acids in kombucha can react with most metals. Use wooden, plastic, or silicone tools.",
        ],
      },
      {
        id: "first-fermentation",
        heading: "First Fermentation (F1): Brewing the Base",
        content: [
          "First fermentation transforms sweet tea into the foundational kombucha base. The process takes 7–14 days at 75–80°F, producing a balanced, tangy, lightly sweet beverage ready for drinking as-is or bottling for carbonation.",
          "Brew strong black or green tea (6–8 tea bags or 2 tablespoons loose leaf per gallon), dissolve 1 cup of white sugar per gallon while hot, cool to room temperature, then transfer to your brewing vessel with the SCOBY and starter liquid. Cover with a tightly woven cloth secured with a rubber band — this allows gas exchange while blocking contaminants. Never use a sealed lid during F1.",
          "Check your brew beginning at day 7 by tasting a small sample: insert a straw beneath the SCOBY, cover the top with your finger to draw liquid up, and taste. It should be pleasantly tart with remaining sweetness. pH strips provide a secondary check: 2.5–3.5 indicates proper fermentation. When the flavor pleases you, remove the SCOBY and 2 cups of starter liquid for your next batch, then bottle the remaining kombucha.",
        ],
      },
      {
        id: "second-fermentation",
        heading: "Second Fermentation (F2): Building Carbonation",
        content: [
          "Second fermentation is where home-brewed kombucha transcends commercial alternatives. By bottling your F1 kombucha with a small addition of sugar or fruit in a sealed swing-top bottle, you create conditions for residual yeast to consume that sugar and produce CO2 — which, trapped by the sealed bottle, dissolves into the liquid as natural carbonation.",
          "Add flavorings to each bottle: fruit juice (2–3 tablespoons per 16oz bottle), fresh fruit (1–2 tablespoons chopped), dried fruit, fresh ginger, herbs, or a combination. A small amount of added sugar (1 teaspoon per 16oz) ensures adequate carbonation even with low-sugar fruit additions. Fill to 1–1.5 inches from the rim and seal the bail latch firmly.",
          "F2 takes 2–4 days at room temperature (75–80°F). Test carbonation by carefully releasing one bottle after 2 days — a satisfying hiss of pressure indicates active carbonation. When bottles are adequately carbonated, refrigerate immediately to halt fermentation and halt pressure building. Never leave sealed F2 bottles unmonitored at room temperature beyond 4–5 days in warm weather.",
        ],
      },
      {
        id: "flavoring-bottling",
        heading: "Flavoring and Bottling Strategies",
        content: [
          "The flavor combinations possible in kombucha F2 are as varied as your culinary imagination. Classic combinations include: ginger-lemon (2 tablespoons fresh ginger juice + 1 tablespoon lemon juice per 16oz), berry (2 tablespoons blueberry, raspberry, or strawberry juice), tropical (mango or pineapple juice — use carefully, as pineapple produces very vigorous carbonation), and lavender-honey (1 teaspoon honey + 5 lavender flowers).",
          "Whole fruit pieces produce slower, more gentle carbonation than juice — useful when you want lower carbonation beverages. Dried fruit (raisins, figs, dates) rehydrate in the bottle and add both flavor and fermentation substrate. Fresh herbs add flavor without significantly affecting carbonation.",
          "Always maintain a 'pressure safety' practice: regardless of your carbonation protocol, refrigerate all F2 bottles within 4–5 days, open them slowly over a sink in case of overflow, and never leave them sealed in a warm environment indefinitely.",
        ],
      },
    ],
    tips: ["Taste your F1 kombucha before bottling — the foundation flavor determines everything. Under-fermented F1 produces sweet, lightly flavored kombucha regardless of what you add in F2.", "Keep a small notebook tracking your F2 timing and results — you'll quickly learn the ideal days for your home environment's temperature."],
    relatedArticles: ["best-mason-jar-lids", "best-airtight-food-storage", "best-vacuum-sealer-machines"],
    outboundLinks: [
      { label: "Journal of Food Science and Technology: Kombucha Research", href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4348867/" },
      { label: "CDC: Safe Home Food Preparation", href: "https://www.cdc.gov/foodsafety/" },
    ],
  },
  "sourdough-starter-from-scratch": {
    sections: [
      {
        id: "what-you-need",
        heading: "What You Need to Start",
        content: [
          "Building a sourdough starter from scratch requires minimal equipment: a clean glass jar (at least 1-quart capacity), a kitchen scale, a small spatula or spoon, and your choice of flour and water. A kitchen scale is non-negotiable — flour volume measurements are too imprecise for reliable starter development. Weight-based feeding produces consistently reproducible results.",
          "Flour choice matters. Whole wheat or rye flour captures wild yeast most effectively because their higher mineral and fiber content provides richer nutrition for the microbes. All-purpose flour works but may slow initial activation by several days. Many bakers begin with a 50% whole wheat / 50% all-purpose blend and transition to 100% all-purpose once the starter is vigorous.",
          "Water temperature and quality both affect starter development. Use filtered or non-chlorinated water — chlorine inhibits wild yeast. Water temperature of 70–78°F is ideal; colder water significantly slows fermentation activity.",
        ],
      },
      {
        id: "days-1-3",
        heading: "Days 1–3: Starting the Culture",
        content: [
          "Day 1: Combine 50g whole wheat or rye flour with 50g lukewarm filtered water (70–75°F). Mix thoroughly until no dry flour remains — a shaggy, consistent paste is the goal. Cover loosely (not sealed) and leave at room temperature (70–75°F) for 24 hours.",
          "Day 2: You may or may not see any activity yet — both are normal. Add another 50g flour and 50g water. Mix well. Cover and wait 24 hours.",
          "Day 3: Activity may be beginning: small bubbles on the surface or throughout the starter, a faintly sour or yeasty smell developing, slight rise. These are all encouraging signs. It's also completely normal to see nothing visible yet. Repeat the feeding: add 50g flour and 50g water, mix, cover, and wait.",
        ],
      },
      {
        id: "days-4-7",
        heading: "Days 4–7: Building a Vigorous Culture",
        content: [
          "Days 4–5: Activity should be increasing. You may see bubbles throughout the starter and some rise after feeding. The smell should be developing a yeasty, slightly sour character. Begin discarding: remove all but 50g of your starter before each feeding. This discard step is counterintuitive but essential — it prevents the culture from becoming too acidic and ensures the active microbes have fresh food to work with. Feed with 50g flour and 50g water.",
          "Days 6–7: Your starter should now be showing clear rise within 4–8 hours of feeding. The peak is when it's doubled or nearly doubled, domed on top, and full of bubbles throughout. A starter at its peak — 4–6 hours after feeding — is ready to use for baking. If you're not yet seeing this activity, continue twice-daily feedings (morning and evening) and give it 2–3 more days.",
          "The float test: when you think your starter might be ready, place a small spoonful in a glass of water. If it floats, the culture has produced enough CO2 to be leavened — it's ready to bake with. If it sinks, feed again and test at the next peak.",
        ],
      },
      {
        id: "maintaining",
        heading: "Ongoing Maintenance",
        content: [
          "A mature, vigorous starter maintained at room temperature needs feeding once or twice daily. If you bake daily or near-daily, keep your starter at room temperature and feed it on this schedule. The standard feeding ratio is 1:1:1 — equal parts starter, flour, and water by weight.",
          "For less frequent baking, refrigerate your starter between sessions. A refrigerated starter slows fermentation dramatically and can go 1–2 weeks between feedings without significant decline. Before baking, take your starter out 24–48 hours in advance and give it 2–3 feedings at room temperature to restore peak activity.",
          "Long-term storage: dehydrate a portion of your starter as a backup. Spread a thin layer on parchment paper, allow to fully dry for 24–48 hours, crumble into flakes, and store in an airtight container. Rehydrate by combining 20g dried starter with 40g water and 40g flour, then feeding daily for 5–7 days to restore full activity. This backup ensures you never lose your starter to an accident or neglect.",
        ],
      },
    ],
    tips: ["Mark your jar with a rubber band at the starter level after each feeding — this makes tracking rise far easier than estimating.", "If your starter smells like nail polish remover (acetone), it's hungry — feed it immediately and consider twice-daily feedings until the smell normalizes."],
    relatedArticles: ["best-sourdough-starter-kits", "best-kitchen-scales", "best-mason-jar-lids"],
    outboundLinks: [
      { label: "King Arthur Baking: Sourdough Starter Guide", href: "https://www.kingarthurbaking.com/learn/guides/sourdough/creating" },
      { label: "American Society for Microbiology: Wild Yeast Research", href: "https://journals.asm.org/" },
    ],
  },
};

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const content = guideContent[slug];
  const otherGuides = guides.filter((g) => g.slug !== slug);
  const relatedArticleData = content?.relatedArticles
    .map((s) => articles.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => !!a);

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#666666", marginBottom: "32px" }}>
        <Link href="/" style={{ color: "#666666", textDecoration: "none" }}>Home</Link>
        <span style={{ color: "#D0021B", margin: "0 6px" }}>/</span>
        <Link href="/how-it-works" style={{ color: "#666666", textDecoration: "none" }}>Guides</Link>
        <span style={{ color: "#D0021B", margin: "0 6px" }}>/</span>
        <span style={{ color: "#1A1A1A" }}>{guide.title}</span>
      </div>

      <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
        {/* Left sidebar — anchor nav */}
        <aside
          className="guide-left-sidebar"
          style={{ width: "200px", flexShrink: 0, position: "sticky", top: "80px", alignSelf: "flex-start", border: "1px solid #E0E0E0", padding: "16px" }}
        >
          <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#D0021B", marginBottom: "16px" }}>
            IN THIS GUIDE
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {content?.sections.map((section) => (
              <li key={section.id} style={{ marginBottom: "4px" }}>
                <a href={`#${section.id}`} style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "13px", color: "#666666", textDecoration: "none", padding: "6px 0 6px 10px", borderLeft: "3px solid transparent", lineHeight: 1.4 }}>
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Center content */}
        <article style={{ flex: 1, maxWidth: "780px", minWidth: 0 }}>
          <span style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#D0021B", marginBottom: "16px", display: "block" }}>
            {guide.category}
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 56px)", fontWeight: 900, color: "#1A1A1A", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            {guide.title}
          </h1>
          <div style={{ display: "flex", gap: "24px", marginBottom: "32px", flexWrap: "wrap", borderBottom: "1px solid #E0E0E0", paddingBottom: "16px" }}>
            <span style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#666666" }}>Updated 2026</span>
            <span style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#666666" }}>{guide.readTime}</span>
          </div>
          <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#666666", marginBottom: "32px" }}>
            {guide.excerpt}
          </p>

          {/* Cover image */}
          <img
            src={guide.coverImage}
            alt={guide.title}
            style={{
              width: '100%',
              height: '420px',
              objectFit: 'cover',
              display: 'block',
              marginBottom: '32px'
            }}
          />

          {/* Guide sections */}
          {content?.sections.map((section, sectionIndex) => (
            <section key={section.id} id={section.id} style={{ marginBottom: "48px" }}>
              <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                  {section.heading}
                </h2>
              </div>
              {section.content.map((para, i) => (
                <p key={i} style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
                  {para}
                </p>
              ))}
              {/* Insert tip after section 1 */}
              {sectionIndex === 0 && content.tips[0] && (
                <div style={{ borderLeft: "4px solid #D0021B", padding: "16px 20px", backgroundColor: "#FFF8F8", margin: "24px 0" }}>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#1A1A1A", lineHeight: 1.7 }}>
                    <strong>Tip:</strong> {content.tips[0]}
                  </p>
                </div>
              )}
              {/* Insert second tip after section 2 */}
              {sectionIndex === 2 && content.tips[1] && (
                <div style={{ borderLeft: "4px solid #D0021B", padding: "16px 20px", backgroundColor: "#FFF8F8", margin: "24px 0" }}>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#1A1A1A", lineHeight: 1.7 }}>
                    <strong>Note:</strong> {content.tips[1]}
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Outbound links */}
          {content?.outboundLinks && (
            <div style={{ marginTop: "24px", marginBottom: "48px", padding: "16px 20px", border: "1px solid #E0E0E0", backgroundColor: "#F7F7F7" }}>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "12px" }}>
                Further Reading
              </p>
              {content.outboundLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "14px", color: "#D0021B", textDecoration: "none", marginBottom: "6px" }}>
                  → {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Related buying guides */}
          {relatedArticleData && relatedArticleData.length > 0 && (
            <section style={{ marginTop: "48px", padding: "28px", backgroundColor: "#F7F7F7", borderTop: "3px solid #1A1A1A" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px", fontWeight: 700, color: "#1A1A1A", marginBottom: "16px" }}>
                Recommended Equipment
              </h2>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {relatedArticleData.map((article) => (
                  <Link key={article.slug} href={`/best/${article.slug}`} style={{ fontFamily: "var(--font-lato)", fontSize: "13px", fontWeight: 700, color: "#D0021B", textDecoration: "none", padding: "8px 16px", border: "1px solid #D0021B" }}>
                    {article.category} →
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Right sidebar */}
        <aside
          className="guide-right-sidebar"
          style={{ width: "220px", flexShrink: 0, position: "sticky", top: "80px", alignSelf: "flex-start", border: "1px solid #E0E0E0", padding: "16px" }}
        >
          <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#D0021B", marginBottom: "16px" }}>
            MORE GUIDES
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {otherGuides.map((g) => (
              <li key={g.slug} style={{ marginBottom: "12px" }}>
                <Link href={`/guides/${g.slug}`} style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#1A1A1A", textDecoration: "none", lineHeight: 1.5, display: "block", padding: "8px 0", borderBottom: "1px solid #E0E0E0" }}>
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <style>{`
        @media (max-width: 1200px) { .guide-right-sidebar { display: none; } }
        @media (max-width: 1024px) { .guide-left-sidebar { display: none; } }
      `}</style>
    </div>
  );
}
