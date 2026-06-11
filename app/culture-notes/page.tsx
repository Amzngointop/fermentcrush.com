import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Culture Notes — Guides & Editorial | FermentCrush",
  description:
    "In-depth technique guides for serious home cooks — kitchen scales, thermometers, vacuum sealing, cutting boards, and more. FermentCrush Culture Notes.",
};

const guides = [
  {
    slug: "/culture-notes/kitchen-scale-guide-baking-fermentation",
    category: "Technique Guide",
    title: "How to Use a Kitchen Scale for Bread Baking & Fermentation",
    excerpt: "Weight measurements eliminate the #1 source of baking inconsistency. Learn baker's percentages, fermentation salt ratios, and the tare habits that make every recipe repeatable.",
    readTime: "12 min read",
  },
  {
    slug: "/culture-notes/vacuum-sealing-vs-food-storage-methods",
    category: "Technique Guide",
    title: "Vacuum Sealing vs. Other Food Storage Methods: A Complete Comparison",
    excerpt: "How do vacuum sealers, airtight containers, mason jars, and zip-lock bags actually compare? A data-driven look at shelf life, food safety, and practical kitchen fit.",
    readTime: "11 min read",
  },
  {
    slug: "/culture-notes/cutting-board-material-guide",
    category: "Technique Guide",
    title: "How to Choose and Care for a Cutting Board: Material Guide",
    excerpt: "Bamboo vs. plastic vs. composite vs. hardwood — a frank comparison of knife-friendliness, hygiene, maintenance, and why a three-board system outperforms a single all-purpose board.",
    readTime: "13 min read",
  },
  {
    slug: "/culture-notes/digital-thermometer-guide-cooking-baking",
    category: "Technique Guide",
    title: "Digital Thermometer Guide: How to Nail Temperatures for Cooking, Baking & Fermentation",
    excerpt: "The complete temperature reference for home cooks — safe minimums for meat, target temps for bread, candy stages, fermentation culture ranges, and how to choose and calibrate your thermometer.",
    readTime: "14 min read",
  },
];

export default function CultureNotesPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>
      <span style={{ display: "inline-block", color: "#D0021B", fontFamily: "var(--font-lato)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", marginBottom: "16px" }}>
        About &amp; Guides
      </span>
      <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: "16px" }}>
        Culture Notes
      </h1>
      <p style={{ fontFamily: "var(--font-lato)", fontSize: "1rem", color: "#666666", lineHeight: 1.8, marginBottom: "60px", fontStyle: "italic" }}>
        Practical guides for serious home cooks — from choosing the right kitchen scale to mastering vacuum sealing and sourdough.
      </p>

      {/* Guide cards */}
      <section style={{ marginBottom: "72px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px", paddingBottom: "12px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "32px" }}>
          Technique Guides
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#666666", marginBottom: "32px", lineHeight: 1.7 }}>
          In-depth practical guides for home cooks who want to understand the how and why behind the tools in their kitchen.
        </p>
        <div style={{ display: "grid", gap: "20px" }}>
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={guide.slug}
              style={{ display: "block", textDecoration: "none", padding: "28px", border: "1px solid #E0E0E0", backgroundColor: "#FFFFFF", transition: "border-color 150ms" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                <div>
                  <span style={{ display: "inline-block", color: "#D0021B", fontFamily: "var(--font-lato)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 7px", marginBottom: "10px" }}>{guide.category}</span>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3, marginBottom: "10px" }}>{guide.title}</h3>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.875rem", color: "#666666", lineHeight: 1.7 }}>{guide.excerpt}</p>
                </div>
                <span style={{ fontFamily: "var(--font-lato)", fontSize: "0.75rem", color: "#666666", whiteSpace: "nowrap", flexShrink: 0 }}>{guide.readTime}</span>
              </div>
              <div style={{ marginTop: "16px" }}>
                <span style={{ fontFamily: "var(--font-lato)", fontSize: "0.8rem", fontWeight: 600, color: "#D0021B" }}>Read Guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial sections */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", paddingBottom: "12px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "32px" }}>
          Our Mission
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          FermentCrush exists because home cooks deserve a serious editorial voice. We saw too many superficial buying guides that listed product specs without context, and too many breathless trend pieces that treated kitchen tools as lifestyle accessories rather than functional instruments with measurable performance differences.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Our mission is to help home cooks — from the beginner shredding their first head of cabbage to the experienced kitchen practitioner maintaining a full fermentation and baking practice — make informed equipment decisions and develop genuine technique. We do this through independent analysis, original editorial content, and a commitment to separating what works from what merely looks good in a product listing.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          We are a small editorial operation built on the conviction that a well-equipped kitchen — chosen thoughtfully, not expensively — produces genuinely better food.
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", paddingBottom: "12px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "32px" }}>
          How We Research
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Every buying guide on FermentCrush begins with the same question: what does a home cook actually need this equipment to do? We research from that functional foundation — what are the performance requirements of this specific application, and which products consistently meet them?
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Our research process draws on manufacturer specifications, material science, food safety research from institutions including the USDA, NIH, and university extension programs, and extensive qualitative feedback from active home cooking communities.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          We do not accept advertising, sponsored placements, or free products in exchange for favorable coverage. Affiliate commissions are earned when readers make purchases through our links — this relationship is disclosed clearly on every page — but it does not influence which products we recommend or how we describe them.
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", paddingBottom: "12px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "32px" }}>
          Our Standards
        </h2>
        <div style={{ display: "grid", gap: "16px" }}>
          {[
            { title: "Accuracy", desc: "We cite authoritative sources — USDA, NIH, university extension programs, peer-reviewed food science — when making technical claims. We don't invent statistics or manufacture authority." },
            { title: "Transparency", desc: "Affiliate relationships are disclosed on every page. We never recommend a product because of affiliate income; affiliate income is a consequence of recommendations we'd make regardless." },
            { title: "Precision", desc: "We don't claim products are the 'best' at anything without specifying the context. A kitchen scale is the best choice for a particular precision level and use case — that specificity matters." },
            { title: "Safety First", desc: "Food safety is our editorial floor. We won't recommend approaches, shortcuts, or equipment configurations that compromise safe food preparation practice, regardless of popularity." },
          ].map((standard) => (
            <div key={standard.title} style={{ padding: "20px", border: "1px solid #E0E0E0", backgroundColor: "#FFFFFF" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>{standard.title}</h3>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.875rem", color: "#666666", lineHeight: 1.7 }}>{standard.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "60px", padding: "32px", backgroundColor: "#FFF8F8", borderLeft: "4px solid #D0021B" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px" }}>
          Why We Love Kitchen Craft
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          The right tools don't make a great cook — technique, attention, and practice do. But the right tools make it easier to practice well, to notice what went wrong, and to repeat what went right. A kitchen scale turns salt ratios from estimates into facts. A thermometer turns doneness from a guess into a measurement.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          We built FermentCrush because we wanted a resource for people who feel that same pull toward precision, craft, and understanding — who want to choose the right equipment confidently and develop a kitchen practice that is genuinely their own. We're glad you're here.
        </p>
      </section>

      <div style={{ fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#666666", lineHeight: 1.7 }}>
        Questions or feedback? Write to us at{" "}
        <a href="mailto:info@fermentcrush.com" style={{ color: "#D0021B", textDecoration: "none" }}>info@fermentcrush.com</a>
        {" "}or visit our{" "}
        <a href="/write-to-us" style={{ color: "#D0021B", textDecoration: "none" }}>contact page</a>.
      </div>
    </div>
  );
}
