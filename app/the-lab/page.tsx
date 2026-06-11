import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Kitchen Lab — Glossary | FermentCrush",
  description:
    "A practical kitchen tools glossary — suction pressure, tare function, baker's percentages, instant-read thermometers, and more.",
};

const terms = [
  {
    term: "Suction Pressure (kPa)",
    def: "The vacuum force a sealer applies, measured in kilopascals. Higher kPa — typically 60–80kPa in consumer sealers — removes more air per cycle, extending freezer life from weeks to months and enabling safe sous vide cooking at consistent temperatures. Chamber sealers reach 99.9kPa; most home cooks are well-served by external sealers in the 70–80kPa range.",
    related: "/best/best-vacuum-sealer-machines",
    relatedLabel: "Vacuum Sealer Machines",
  },
  {
    term: "Tare Function",
    def: "A kitchen scale feature that zeros the display with a container on the platform, so subsequent weighing measures only the ingredient added. Essential for accurate recipe work, fermentation salt ratio calculations, and portion-controlled meal prep. Any quality digital scale should offer one-touch tare across the full capacity range.",
    related: "/best/best-kitchen-scales",
    relatedLabel: "Kitchen Scales",
  },
  {
    term: "Banneton Basket",
    def: "A proofing basket — traditionally made from rattan cane — that supports shaped sourdough dough during its final rise. The coiled cane structure imprints the characteristic spiral flour pattern on the finished loaf's surface while managing moisture during cold proofing. Available in round (boule) and oval (batard) forms to match common loaf shapes.",
    related: "/best/best-sourdough-starter-kits",
    relatedLabel: "Sourdough Starter Kits",
  },
  {
    term: "Instant-Read Thermometer",
    def: "A digital thermometer that delivers a stable temperature reading within 1–4 seconds of probe insertion. Essential for verifying meat doneness, bread internal temperature, candy stages, and fermentation culture temperatures with precision. The USDA recommends specific internal temperatures for all proteins — an accurate instant-read thermometer is the only reliable way to hit them.",
    related: "/best/best-digital-kitchen-thermometers",
    relatedLabel: "Digital Kitchen Thermometers",
  },
  {
    term: "Graduation",
    def: "The smallest increment a kitchen scale can measure, typically 1g for cooking and 0.1g for precision baking or coffee. Fermentation salt ratios require at minimum 1g graduation; bread baking benefits from 1g; espresso and micro-spice work requires 0.1g. A scale that reads to 1g is sufficient for most home kitchen applications including sourdough and lacto-fermentation.",
    related: "/best/best-kitchen-scales",
    relatedLabel: "Kitchen Scales",
  },
  {
    term: "Baker's Percentages",
    def: "A weight-based recipe notation system where flour is always 100% and every other ingredient is expressed as a percentage of that flour weight. A bread recipe calling for 75% hydration means 750g of water for every 1000g of flour. Baker's percentages make it easy to scale recipes up or down precisely and to compare dough hydration across different formulas — a calculation that requires a reliable kitchen scale.",
    related: "/best/best-kitchen-scales",
    relatedLabel: "Kitchen Scales",
  },
  {
    term: "Vacuum Sealing",
    def: "The process of removing air from a bag or container before sealing to extend food freshness by limiting oxidation and inhibiting aerobic bacterial growth. Vacuum-sealed proteins keep in the freezer for 2–3 years versus 4–6 months in standard bags. The technique also enables sous vide cooking, where food in a sealed bag is immersed in precisely temperature-controlled water for even, repeatable results.",
    related: "/best/best-vacuum-sealer-machines",
    relatedLabel: "Vacuum Sealer Machines",
  },
  {
    term: "Mandoline Blade Types",
    def: "Mandoline slicers typically ship with interchangeable blade inserts for different cuts: straight blades for uniform slices, julienne blades for thin matchstick strips, waffle/crinkle blades for decorative cuts, and sometimes shredding inserts. The quality of the blade steel determines edge retention and the cleanness of the cut — high-carbon stainless steel holds an edge longer than standard stainless.",
    related: "/best/best-mandoline-slicers",
    relatedLabel: "Mandoline Slicers",
  },
  {
    term: "Juice Groove",
    def: "A channel carved into the perimeter of a cutting board that catches liquids released by proteins, fruits, and vegetables during cutting. Without a juice groove, meat juices or citrus juice run directly onto the counter — a food safety and cleanup concern. Juice grooves are standard on wood and bamboo boards designed for carving, less common on flat prep boards intended purely for knife work.",
    related: "/best/best-cutting-boards",
    relatedLabel: "Cutting Boards",
  },
  {
    term: "BPA-Free",
    def: "Bisphenol-A is an industrial chemical used in some hard plastics and epoxy resins. BPA-free designation indicates a container does not use BPA in its construction — relevant for food storage containers that contact acidic foods or are used in the microwave or dishwasher, where heat can accelerate chemical migration. Most quality airtight food storage containers are now manufactured BPA-free as a baseline standard.",
    related: "/best/best-airtight-food-storage",
    relatedLabel: "Airtight Food Storage",
  },
  {
    term: "Cutting Board Seasoning",
    def: "The process of conditioning a wood or bamboo cutting board with food-grade mineral oil (and optionally beeswax) to penetrate the wood grain, prevent drying and cracking, and reduce moisture absorption. A new board should be saturated with mineral oil on all surfaces and allowed to absorb overnight; this should be repeated 3–4 times initially and monthly thereafter. Never use vegetable or olive oil — they go rancid inside the wood.",
    related: "/best/best-cutting-boards",
    relatedLabel: "Cutting Boards",
  },
  {
    term: "Fermentation Salt Ratio",
    def: "The standard 2% salt-by-weight rule for lacto-fermentation: 20g of non-iodized salt per kilogram of vegetables. This ratio creates the osmotic environment that draws moisture from vegetables to form brine while suppressing harmful bacteria and allowing beneficial Lactobacillus cultures to thrive. Going below 1.5% risks spoilage; above 3% inhibits fermentation and produces an unpleasantly salty product.",
    related: "/best/best-kitchen-scales",
    relatedLabel: "Kitchen Scales",
  },
];

export default function TheLabPage() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 24px" }}>
      <span style={{
        display: "inline-block",
        color: "#D0021B",
        fontFamily: "var(--font-lato)",
        fontSize: "0.65rem",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "3px 8px",
        marginBottom: "16px",
      }}>
        Glossary
      </span>
      <h1 style={{
        fontFamily: "var(--font-cormorant)",
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 900,
        color: "#1A1A1A",
        marginBottom: "16px",
      }}>
        The Kitchen Lab
      </h1>
      <p style={{
        fontFamily: "var(--font-lato)",
        fontSize: "1rem",
        color: "#666666",
        lineHeight: 1.8,
        marginBottom: "60px",
        maxWidth: "600px",
      }}>
        Essential terms for serious home cooks — from kPa and tare to banneton, baker&#39;s percentages, and mandoline blade types.
      </p>

      <div style={{ display: "grid", gap: "0" }}>
        {terms.map((entry, i) => (
          <div
            key={entry.term}
            style={{
              padding: "28px 32px",
              borderTop: "1px solid #E0E0E0",
              backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F7F7F7",
            }}
          >
            <h2 style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: "10px",
            }}>
              {entry.term}
            </h2>
            <p style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.9rem",
              color: "#1A1A1A",
              lineHeight: 1.9,
              marginBottom: "12px",
            }}>
              {entry.def}
            </p>
            <Link
              href={entry.related}
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#D0021B",
                textDecoration: "none",
              }}
            >
              → See: {entry.relatedLabel}
            </Link>
          </div>
        ))}
        <div style={{ borderTop: "1px solid #E0E0E0" }} />
      </div>

      <div style={{ marginTop: "64px", borderTop: "3px solid #1A1A1A", paddingTop: "32px" }}>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#666666", lineHeight: 1.7, marginBottom: "20px" }}>
          Browse our expert buying guides to put these concepts into practice, or read our in-depth technique guides.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/culture-notes"
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              backgroundColor: "#1A1A1A",
              padding: "12px 24px",
              textDecoration: "none",
            }}
          >
            Explore The Lab — All Terms →
          </Link>
          <Link
            href="/how-it-works"
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#1A1A1A",
              border: "2px solid #1A1A1A",
              padding: "12px 24px",
              textDecoration: "none",
            }}
          >
            All Guides →
          </Link>
        </div>
      </div>
    </div>
  );
}
