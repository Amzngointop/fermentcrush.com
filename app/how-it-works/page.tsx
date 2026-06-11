import type { Metadata } from "next";
import Link from "next/link";
import guides from "@/data/guides";

export const metadata: Metadata = {
  title: "How It Works — Learn the Craft | FermentCrush",
  description: "Learn how fermentation works with our step-by-step guides to lacto-fermentation, sauerkraut, kombucha, and sourdough baking.",
};

export default function HowItWorksPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>
      {/* Eyebrow */}
      <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#D0021B", marginBottom: "16px" }}>
        Guides
      </p>

      <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 56px)", fontWeight: 900, color: "#1A1A1A", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "24px" }}>
        Learn the Craft
      </h1>

      <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", color: "#666666", lineHeight: 1.7, marginBottom: "64px", maxWidth: "600px" }}>
        Step-by-step editorial guides for lacto-fermentation, sourdough baking, kombucha brewing, and the kitchen techniques that make every recipe more consistent and repeatable.
      </p>

      {/* Guide list */}
      <div style={{ display: "grid", gap: "0" }}>
        {guides.map((guide, i) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            style={{
              display: "flex",
              gap: "32px",
              padding: "32px 0",
              borderTop: "1px solid #E0E0E0",
              textDecoration: "none",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* Decorative number */}
            <div style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "48px",
              fontWeight: 700,
              color: "#E0E0E0",
              lineHeight: 1,
              flexShrink: 0,
              width: "60px",
              alignSelf: "flex-start",
            }}>
              {String(i + 1).padStart(2, "0")}
            </div>

            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D0021B", marginBottom: "8px" }}>
                {guide.category}
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px", lineHeight: 1.2 }}>
                {guide.title}
              </h2>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#666666", lineHeight: 1.7, marginBottom: "16px" }}>
                {guide.excerpt}
              </p>
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#666666" }}>{guide.readTime}</span>
                <span style={{ fontFamily: "var(--font-lato)", fontSize: "12px", fontWeight: 700, color: "#D0021B" }}>Read Guide →</span>
              </div>
            </div>
          </Link>
        ))}
        {/* Bottom border on last item */}
        <div style={{ borderTop: "1px solid #E0E0E0" }} />
      </div>
    </div>
  );
}
