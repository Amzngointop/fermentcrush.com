import type { Metadata } from "next";
import Link from "next/link";
import articles from "@/data/articles";
import products from "@/data/products";
import guides from "@/data/guides";
import FermentationCalculator from "@/components/FermentationCalculator";
import HomeSidebarNav from "@/components/HomeSidebarNav";
import NewsletterForm from "@/components/NewsletterForm";
import SeeMoreButton from "@/components/SeeMoreButton";
import {
  PackageSearch,
  Archive,
  Layers,
  Thermometer,
  Scale,
  Wheat,
  Scissors,
  ChevronsUp,
  Search,
  CheckSquare,
  FileText,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FermentCrush — Expert Kitchen Tool Guides & Reviews",
  description:
    "Independent buying guides for vacuum sealers, kitchen scales, thermometers, cutting boards, and more — curated Amazon picks for serious home cooks.",
  twitter: {
    card: "summary_large_image",
  },
};

const featuredProducts = articles
  .map((article) => products.find((p) => p.articleSlug === article.slug && p.rank === 1))
  .filter((p): p is NonNullable<typeof p> => !!p);

// rank=2 — not shown in Top-Rated section which shows rank=1
const editorChoiceProduct = products.find((p) => p.rank === 2) ?? products[1];

const D = "1px dashed #d4d4d4";

const editors = [
  {
    name: "Margaret Holloway",
    role: "Senior Kitchen Editor",
    quote:
      "I've tested vacuum sealers in my own kitchen for three years. The difference between a 75kPa and a 90kPa machine is immediately obvious the first time you seal a marinated protein.",
  },
  {
    name: "Daniel Reeves",
    role: "Fermentation Specialist",
    quote:
      "Every product in our fermentation guides has been vetted against one question: would I use this in my own kitchen? If the answer is no, it doesn't make the list.",
  },
  {
    name: "Sonya Park",
    role: "Product Research Analyst",
    quote:
      "We cross-reference Amazon sales volume, verified review patterns, and category return rates before any product earns a recommendation on FermentCrush.",
  },
];

const fermentTable = [
  { ferment: "Sauerkraut", temp: "65–75°F", days: "5–21 days", difficulty: "Beginner" },
  { ferment: "Kombucha", temp: "68–78°F", days: "7–14 days", difficulty: "Intermediate" },
  { ferment: "Kefir", temp: "68–78°F", days: "24–48 hrs", difficulty: "Beginner" },
  { ferment: "Kimchi", temp: "65–72°F", days: "3–21 days", difficulty: "Beginner" },
  { ferment: "Sourdough", temp: "70–75°F", days: "5–7 days", difficulty: "Intermediate" },
  { ferment: "Yogurt", temp: "110°F", days: "6–12 hrs", difficulty: "Beginner" },
];

const processSteps = [
  "Category Research",
  "Sales Analysis",
  "Review Audit",
  "Editorial Review",
  "Final Pick",
];

export default function HomePage() {
  return (
    <>
      {/* ── EDITORIAL TWO-COLUMN GRID ── */}
      <div style={{ backgroundColor: "#ffffff", maxWidth: "1240px", margin: "0 auto", padding: "32px 24px 56px" }}>
        <div className="editorial-grid" style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>

          {/* ── MAIN COLUMN (70%) ── */}
          <div className="editorial-main" style={{ flex: "0 0 calc(70% - 24px)", minWidth: 0 }}>

            {/* ROW 1 — FULL-WIDTH GUIDE PREVIEW */}
            <Link href="/guides/beginners-guide-to-lacto-fermentation" style={{ display: "block", textDecoration: "none", marginBottom: "28px" }}>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "10px" }}>
                Foundations
              </p>
              <img
                src="https://images.unsplash.com/photo-1547332184-070705bccbd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="The Complete Beginner's Guide to Lacto-Fermentation"
                style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", marginBottom: "18px" }}
              />
              <h1 className="headline-link" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "12px" }}>
                The Complete Beginner&apos;s Guide to Lacto-Fermentation
              </h1>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#444444", lineHeight: 1.65, marginBottom: "14px" }}>
                Lacto-fermentation is one of the oldest food preservation techniques on Earth — and one of the most accessible. This guide covers everything you need for your first successful batch.
              </p>
              <span style={{ fontFamily: "var(--font-lato)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: "#D0021B" }}>
                Read Guide →
              </span>
            </Link>

            <div style={{ borderTop: D, marginBottom: "28px" }} />

            {/* ROW 2 — TWO GUIDES SIDE BY SIDE */}
            <div className="cards-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "28px" }}>
              <Link href="/guides/how-to-make-sauerkraut-at-home" style={{ display: "block", textDecoration: "none" }}>
                <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "8px" }}>
                  Sauerkraut
                </p>
                <img
                  src="https://images.unsplash.com/photo-1695089028077-5e7949d238d3?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="How to Make Sauerkraut at Home"
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", marginBottom: "12px" }}
                />
                <h2 className="headline-link" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 1.8vw, 1.3rem)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.25, marginBottom: "8px" }}>
                  How to Make Sauerkraut at Home: Step-by-Step
                </h2>
                <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#444444", lineHeight: 1.6, marginBottom: "10px" }}>
                  Sauerkraut requires just two ingredients — cabbage and salt — but the technique makes all the difference.
                </p>
                <span style={{ fontFamily: "var(--font-lato)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: "#D0021B" }}>Read Guide →</span>
              </Link>

              <Link href="/guides/kombucha-first-second-fermentation" style={{ display: "block", textDecoration: "none" }}>
                <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "8px" }}>
                  Kombucha
                </p>
                <img
                  src="https://plus.unsplash.com/premium_photo-1720417416322-ef77a7b28b89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Kombucha First and Second Fermentation"
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", marginBottom: "12px" }}
                />
                <h2 className="headline-link" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 1.8vw, 1.3rem)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.25, marginBottom: "8px" }}>
                  Kombucha First &amp; Second Fermentation: A Complete Guide
                </h2>
                <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#444444", lineHeight: 1.6, marginBottom: "10px" }}>
                  Learn how to brew kombucha from scratch, manage your SCOBY, and nail the second fermentation for perfect carbonation.
                </p>
                <span style={{ fontFamily: "var(--font-lato)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: "#D0021B" }}>Read Guide →</span>
              </Link>
            </div>

            <div style={{ borderTop: D, marginBottom: "20px" }} />

            {/* BROWSE ALL GUIDES LINK */}
            <Link
              href="/how-it-works"
              style={{ display: "inline-block", fontFamily: "var(--font-lato)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", textDecoration: "none" }}
              className="browse-all-guides"
            >
              → Browse All Guides
            </Link>

          </div>

          {/* ── SIDEBAR (30%) ── */}
          <div className="editorial-sidebar" style={{ flex: "0 0 calc(30% - 24px)", minWidth: 0 }}>

            {/* EDITOR'S CHOICE CARD */}
            <div style={{ border: "1px solid #e8e8e8", backgroundColor: "#ffffff", padding: "20px", marginBottom: "24px" }}>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", paddingBottom: "10px", borderBottom: D, marginBottom: "14px" }}>
                Editor&apos;s Choice
              </p>
              <img
                src={editorChoiceProduct.imageUrl}
                alt={editorChoiceProduct.name}
                style={{ width: "100%", maxHeight: "160px", objectFit: "contain", display: "block", marginBottom: "14px", backgroundColor: "#ffffff" }}
              />
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", marginBottom: "6px" }}>
                {editorChoiceProduct.badge}
              </p>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3, marginBottom: "10px" }}>
                {editorChoiceProduct.name}
              </h3>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#444444", lineHeight: 1.6, marginBottom: "14px" }}>
                {editorChoiceProduct.bestFor}
              </p>
              <a
                href={editorChoiceProduct.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#D0021B", border: "2px solid #D0021B", padding: "10px 16px", textDecoration: "none", textAlign: "center", marginBottom: "10px" }}
              >
                View on Amazon →
              </a>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", color: "#999999", lineHeight: 1.5, marginBottom: "0" }}>
                We may earn a commission on qualifying purchases.
              </p>
              <SeeMoreButton />
            </div>

            {/* FROM OUR EDITORS */}
            <div>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", marginBottom: "12px" }}>
                From Our Editors
              </p>
              {editors.map((ed) => (
                <div key={ed.name} style={{ borderTop: D, paddingTop: "14px", marginBottom: "16px" }}>
                  <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "15px", fontWeight: 600, color: "#1a1a1a", marginBottom: "3px" }}>
                    {ed.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", marginBottom: "6px" }}>
                    {ed.role}
                  </p>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#444444", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
                    &ldquo;{ed.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── TOP PICKS — product cards ── */}
      <section id="top-rated" style={{ backgroundColor: "#F7F7F7", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "48px" }}>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#D0021B", marginBottom: "12px" }}>Top Picks</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>Top-Rated Kitchen Tools</h2>
          </div>
          <div style={{ border: "1px solid #E0E0E0", padding: "12px 16px", marginBottom: "40px", backgroundColor: "#FFFFFF", fontFamily: "var(--font-lato)", fontSize: "13px", color: "#666666", lineHeight: 1.6 }}>
            <strong style={{ color: "#1A1A1A" }}>Affiliate Disclosure:</strong> FermentCrush participates in the Amazon Associates program. We may earn a commission on qualifying purchases at no extra cost to you. Our editorial recommendations are independent of affiliate relationships.
          </div>
          <div className="top-rated-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {featuredProducts.map((product, idx) => {
              const labels = ["Editor's Pick", "Best Value", "Best for Meal Prep", "Most Popular", "Best Budget", "Best Starter Kit", "Best Overall", "Most Versatile"];
              const label = labels[idx] ?? "Editor's Pick";
              return (
                <div key={product.id} style={{ border: "1px solid #E0E0E0", display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#FFFFFF", width: "100%" }}>
                  <img src={product.imageUrl} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "contain", backgroundColor: "#FFFFFF", padding: "16px" }} />
                  <div style={{ padding: "16px 16px 20px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontFamily: "var(--font-lato)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D0021B" }}>
                      {label}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "18px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3, overflowWrap: "break-word", wordBreak: "break-word" }}>{product.name}</h3>
                    <p style={{ fontFamily: "var(--font-lato)", fontSize: "14px", color: "#444444", lineHeight: 1.6, flex: 1 }}>{product.summary}</p>
                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#D0021B", textDecoration: "none", marginTop: "4px" }}
                    >
                      View on Amazon →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .editorial-grid { flex-direction: column !important; }
            .editorial-main, .editorial-sidebar { flex: 1 1 100% !important; }
            .cards-row { grid-template-columns: 1fr !important; }
          }
          .top-rated-grid { grid-template-columns: 1fr !important; }
          @media (min-width: 640px) {
            .top-rated-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (min-width: 1024px) {
            .top-rated-grid { grid-template-columns: repeat(4, 1fr) !important; }
          }
          .headline-link:hover { text-decoration: underline; text-decoration-thickness: 1px; }
          a:hover .headline-link { text-decoration: underline; text-decoration-thickness: 1px; }
          .browse-all-guides:hover { color: #D0021B !important; text-decoration: underline; }
          .lab-cta-btn { transition: all 80ms ease; }
          .lab-cta-btn:hover { box-shadow: 4px 4px 0px #8B0000 !important; transform: translate(-1px, -1px); }
          .lab-cta-btn:active { box-shadow: 1px 1px 0px #8B0000 !important; transform: translate(2px, 2px); }
        `}</style>
      </section>

      {/* ── THREE-COLUMN LAYOUT FOR NEW SECTIONS ── */}
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>

          {/* LEFT: sticky "On This Page" nav */}
          <HomeSidebarNav />

          {/* CENTER: all 6 sections */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* ── SECTION 1: BROWSE BY CATEGORY ── */}
            <section id="browse-by-category" style={{ padding: "64px 0 56px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: "36px" }}>
                Browse by Category
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="category-grid">
                {[
                  { icon: <PackageSearch size={28} strokeWidth={1.5} />, name: "Vacuum Sealer Machines", desc: "Extend freshness up to 5× with the right seal.", slug: "best-vacuum-sealer-machines" },
                  { icon: <Archive size={28} strokeWidth={1.5} />, name: "Mason Jars & Lids", desc: "The most versatile fermentation vessel in any kitchen.", slug: "best-mason-jar-lids" },
                  { icon: <Layers size={28} strokeWidth={1.5} />, name: "Airtight Food Storage", desc: "Keep pantry staples and meal-prep fresh longer.", slug: "best-airtight-food-storage" },
                  { icon: <Thermometer size={28} strokeWidth={1.5} />, name: "Digital Thermometers", desc: "Precision temperature control for every ferment.", slug: "best-digital-kitchen-thermometers" },
                  { icon: <Scale size={28} strokeWidth={1.5} />, name: "Kitchen Scales", desc: "Weigh salt ratios and dough for consistent results.", slug: "best-kitchen-scales" },
                  { icon: <Wheat size={28} strokeWidth={1.5} />, name: "Sourdough Supplies", desc: "Starter kits, bannetons, and scoring tools.", slug: "best-sourdough-starter-kits" },
                  { icon: <Scissors size={28} strokeWidth={1.5} />, name: "Cutting Boards", desc: "Protect your knives and keep prep hygienic.", slug: "best-cutting-boards" },
                  { icon: <ChevronsUp size={28} strokeWidth={1.5} />, name: "Mandoline Slicers", desc: "Uniform slices for kimchi, pickles, and gratins.", slug: "best-mandoline-slicers" },
                ].map(({ icon, name, desc, slug }) => (
                  <Link key={slug} href={`/best/${slug}`} style={{ textDecoration: "none", display: "block", border: "1px solid #e8e8e8", backgroundColor: "#ffffff", padding: "20px 16px", transition: "box-shadow 150ms ease" }} className="category-card">
                    <div style={{ color: "#D0021B", marginBottom: "10px" }}>{icon}</div>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.25, marginBottom: "6px" }}>{name}</h3>
                    <p style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#666666", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            <div style={{ borderTop: D }} />

            {/* ── SECTION 2: LATEST GUIDES ── */}
            <section id="learn-the-craft" style={{ padding: "56px 0" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: "32px" }}>
                Latest Guides
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="guides-grid">
                {guides.map((guide) => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`} style={{ textDecoration: "none", display: "block", backgroundColor: "#ffffff", border: "1px solid #e8e8e8", padding: "24px" }}>
                    <span style={{ fontFamily: "var(--font-lato)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D0021B", display: "inline-block", marginBottom: "10px" }}>
                      {guide.category}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.25, marginBottom: "10px" }}>
                      {guide.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#444444", lineHeight: 1.65, marginBottom: "14px" }}>
                      {guide.excerpt}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "var(--font-lato)", fontSize: "11px", color: "#999" }}>{guide.readTime}</span>
                      <span style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", color: "#D0021B" }}>Read Guide →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <div style={{ borderTop: D }} />

            {/* ── SECTION 3: FERMENTATION CALCULATOR ── */}
            <section id="fermentation-calculator" style={{ padding: "56px 0" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>
                Fermentation Readiness Calculator
              </h2>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#444444", lineHeight: 1.6, marginBottom: "36px", maxWidth: "560px" }}>
                Select what you&apos;re making and your room temperature — we&apos;ll tell you when it&apos;s ready.
              </p>
              <FermentationCalculator />

              {/* FERMENTATION AT A GLANCE TABLE */}
              <div style={{ marginTop: "48px" }}>
                <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "16px" }}>
                  Fermentation at a Glance
                </p>
                <div style={{ border: D, overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-lato)" }}>
                    <thead>
                      <tr>
                        {["Ferment", "Temp Range", "Days Ready", "Difficulty"].map((col) => (
                          <th key={col} style={{ textAlign: "left", padding: "10px 14px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", borderBottom: D, whiteSpace: "nowrap" }}>
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {fermentTable.map((row) => (
                        <tr key={row.ferment}>
                          <td style={{ padding: "10px 14px", fontSize: "14px", color: "#1A1A1A", fontWeight: 600, borderBottom: D }}>{row.ferment}</td>
                          <td style={{ padding: "10px 14px", fontSize: "14px", color: "#444444", borderBottom: D }}>{row.temp}</td>
                          <td style={{ padding: "10px 14px", fontSize: "14px", color: "#444444", borderBottom: D }}>{row.days}</td>
                          <td style={{ padding: "10px 14px", fontSize: "14px", color: row.difficulty === "Intermediate" ? "#D0021B" : "#444444", borderBottom: D }}>{row.difficulty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <div style={{ borderTop: D }} />

            {/* ── SECTION 4: THE LAB — GLOSSARY ── */}
            <section id="the-lab" style={{ padding: "56px 0" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>
                The Fermentation Lab
              </h2>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#444444", lineHeight: 1.6, marginBottom: "32px" }}>
                Essential terms every home fermenter should know.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }} className="glossary-grid">
                {[
                  { term: "Lacto-Fermentation", def: "A preservation process where naturally occurring bacteria convert sugars into lactic acid. It requires no starter cultures — just salt, vegetables, and time." },
                  { term: "SCOBY", def: "Symbiotic Culture Of Bacteria and Yeast — the living culture used to brew kombucha. Each batch grows a new \"baby\" SCOBY that can be used to start fresh batches." },
                  { term: "Brine", def: "A saltwater solution that creates the anaerobic environment needed for lacto-fermentation. Standard ratios range from 2% to 3% salt by weight of water." },
                  { term: "Anaerobic", def: "Describes an environment without oxygen. Most fermentation works by eliminating oxygen exposure, which prevents harmful mold while allowing beneficial bacteria to thrive." },
                  { term: "Probiotics", def: "Live microorganisms found in fermented foods that can benefit gut health. Lactobacillus species are among the most studied and are abundant in lacto-fermented vegetables." },
                  { term: "Kahm Yeast", def: "A harmless white film that sometimes forms on the surface of ferments. It looks alarming but is not dangerous — simply skim it off and ensure the vegetables stay submerged." },
                ].map(({ term, def }) => (
                  <div key={term} style={{ borderLeft: "3px solid #D0021B", paddingLeft: "16px", paddingTop: "4px", paddingBottom: "4px" }}>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "6px" }}>{term}</h3>
                    <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#444444", lineHeight: 1.65, margin: 0 }}>{def}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/the-lab"
                className="lab-cta-btn"
                style={{ display: "inline-block", fontFamily: "var(--font-lato)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#ffffff", backgroundColor: "#D0021B", padding: "14px 36px", textDecoration: "none", boxShadow: "3px 3px 0px #8B0000" }}
              >
                Explore The Full Lab →
              </Link>
            </section>

            <div style={{ borderTop: D }} />

            {/* ── SECTION 5: HOW WE PICK PRODUCTS ── */}
            <section id="how-we-pick" style={{ padding: "56px 0" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: "36px" }}>
                How We Pick Products
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "40px" }} className="how-we-pick-grid">
                <div>
                  <div style={{ color: "#D0021B", marginBottom: "14px" }}><Search size={32} strokeWidth={1.5} /></div>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>Independent Research</h3>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#444444", lineHeight: 1.65, margin: 0 }}>
                    We review each product category by analyzing real user feedback, manufacturer specifications, and category-specific performance criteria. No product pays to be included, in line with guidelines from the{" "}
                    <a href="https://nchfp.uga.edu" target="_blank" rel="noopener noreferrer" style={{ color: "#D0021B", textDecoration: "underline" }}>USDA National Center for Home Food Preservation</a>.
                  </p>
                </div>
                <div>
                  <div style={{ color: "#D0021B", marginBottom: "14px" }}><CheckSquare size={32} strokeWidth={1.5} /></div>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>Sales &amp; Reviews</h3>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#444444", lineHeight: 1.65, margin: 0 }}>
                    We prioritize products that demonstrate high purchase volume and sustained positive feedback. If thousands of serious home cooks trust a product, that signal matters in our rankings — consistent with findings published in{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4290080/" target="_blank" rel="noopener noreferrer" style={{ color: "#D0021B", textDecoration: "underline" }}>NIH research on fermented food consumption</a>.
                  </p>
                </div>
                <div>
                  <div style={{ color: "#D0021B", marginBottom: "14px" }}><FileText size={32} strokeWidth={1.5} /></div>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>Editorial Standards</h3>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#444444", lineHeight: 1.65, margin: 0 }}>
                    FermentCrush operates independently of any advertiser or brand relationship. Affiliate commissions never influence which products appear in our guides or where they rank, following standards outlined by the{" "}
                    <a href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" target="_blank" rel="noopener noreferrer" style={{ color: "#D0021B", textDecoration: "underline" }}>FTC Endorsement Guidelines</a>.
                  </p>
                </div>
              </div>

              {/* SELECTION PROCESS DIAGRAM */}
              <div style={{ border: D, padding: "24px", marginBottom: "32px" }}>
                <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "20px" }}>
                  Our Selection Process
                </p>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }} className="process-flow">
                  {processSteps.map((step, i) => (
                    <div key={step} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "22px", height: "22px", backgroundColor: "#D0021B", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, flexShrink: 0 }}>
                          {i + 1}
                        </div>
                        <span style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#444444", textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
                          {step}
                        </span>
                      </div>
                      {i < processSteps.length - 1 && (
                        <span style={{ color: "#d4d4d4", fontSize: "16px", flexShrink: 0 }}>→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#888", lineHeight: 1.6, borderTop: D, paddingTop: "20px" }}>
                <strong style={{ color: "#5C5C5C" }}>Affiliate Disclosure:</strong> FermentCrush participates in the Amazon Associates program and may earn a commission on qualifying purchases at no additional cost to you.
              </p>
            </section>

            <div style={{ borderTop: D }} />

            {/* ── SECTION 6: NEWSLETTER ── */}
            <section id="newsletter" style={{ padding: "64px 0" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>
                Stay in the Loop
              </h2>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#444444", marginBottom: "28px", maxWidth: "480px", lineHeight: 1.6 }}>
                Weekly picks, new reviews, and fermentation tips — straight to your inbox.
              </p>
              <ul style={{ listStyle: "none", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {["New buying guides every week", "Editor's top picks updated monthly", "Fermentation tips & seasonal recipes"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Check size={14} color="#D0021B" strokeWidth={2.5} />
                    <span style={{ fontFamily: "var(--font-lato)", fontSize: "14px", color: "#444444" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <NewsletterForm />
            </section>

          </div>{/* end center column */}

          {/* RIGHT: sticky — empty after removing Buying Guides, hidden on tablet/mobile */}
          <div style={{ width: "220px", flexShrink: 0, position: "sticky", top: "80px", alignSelf: "flex-start", paddingTop: "64px" }} className="home-right-sidebar" />

        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .home-sidebar-nav { display: none !important; }
          .home-right-sidebar { display: none !important; }
        }
        .category-grid { grid-template-columns: 1fr !important; }
        .guides-grid { grid-template-columns: 1fr !important; }
        .glossary-grid { grid-template-columns: 1fr !important; }
        .how-we-pick-grid { grid-template-columns: 1fr !important; }
        @media (max-width: 639px) {
          .process-flow { flex-direction: column; align-items: flex-start !important; }
        }
        @media (min-width: 640px) {
          .category-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .guides-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .glossary-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .category-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .how-we-pick-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .glossary-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        .category-card:hover { box-shadow: 4px 4px 0px #d4d4d4; }
        .lab-cta-btn { transition: all 80ms ease; }
        .lab-cta-btn:hover { box-shadow: 4px 4px 0px #8B0000 !important; transform: translate(-1px, -1px); }
        .lab-cta-btn:active { box-shadow: 1px 1px 0px #8B0000 !important; transform: translate(2px, 2px); }
      `}</style>
    </>
  );
}
