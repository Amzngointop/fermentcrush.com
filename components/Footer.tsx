import Link from "next/link";
import { site } from "@/data/site";
import articles from "@/data/articles";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1A1A1A",
        color: "#AAAAAA",
        padding: "60px 0 32px",
        marginTop: "80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 700,
                fontSize: "24px",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                marginBottom: "16px",
                lineHeight: 1,
              }}
            >
              FERMENTCRUSH
            </div>
            <p
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#AAAAAA",
                maxWidth: "240px",
              }}
            >
              Expert buying guides and fermentation tutorials for home brewers, sauerkraut makers,
              and probiotic food lovers.
            </p>
            <p
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "12px",
                color: "#AAAAAA",
                marginTop: "12px",
              }}
            >
              {site.email}
            </p>
          </div>

          {/* Buying Guides */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Buying Guides
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/best/${a.slug}`}
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#AAAAAA",
                      textDecoration: "none",
                    }}
                  >
                    {a.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Learn
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "The Lab (Glossary)", href: "/the-lab" },
                { label: "Culture Notes", href: "/culture-notes" },
                { label: "Write to Us", href: "/write-to-us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#AAAAAA",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Legal
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Use", href: "/terms" },
                { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#AAAAAA",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #333333",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "12px",
              color: "#666666",
            }}
          >
            {site.copyright}
          </p>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "12px",
              color: "#666666",
              maxWidth: "500px",
              textAlign: "right",
            }}
          >
            FermentCrush is a participant in the Amazon Services LLC Associates Program. We earn
            from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
