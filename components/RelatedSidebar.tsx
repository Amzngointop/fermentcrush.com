import Link from "next/link";
import type { Article } from "@/data/articles";

interface RelatedSidebarProps {
  articles: Article[];
  currentSlug: string;
  label?: string;
}

export default function RelatedSidebar({
  articles,
  currentSlug,
  label = "MORE BUYING GUIDES",
}: RelatedSidebarProps) {
  const others = articles.filter((a) => a.slug !== currentSlug);

  return (
    <aside
      className="related-sidebar"
      style={{
        width: "220px",
        flexShrink: 0,
        position: "sticky",
        top: "80px",
        alignSelf: "flex-start",
        border: "1px solid #E0E0E0",
        padding: "16px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-lato)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#D0021B",
          marginBottom: "16px",
        }}
      >
        {label}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {others.map((a) => (
          <li key={a.slug} style={{ marginBottom: "12px" }}>
            <Link
              href={`/best/${a.slug}`}
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "13px",
                color: "#1A1A1A",
                textDecoration: "none",
                lineHeight: 1.5,
                display: "block",
                padding: "8px 0",
                borderBottom: "1px solid #E0E0E0",
              }}
            >
              {a.title}
            </Link>
          </li>
        ))}
      </ul>

      <style>{`
        @media (max-width: 1200px) {
          .related-sidebar { display: none; }
        }
      `}</style>
    </aside>
  );
}
