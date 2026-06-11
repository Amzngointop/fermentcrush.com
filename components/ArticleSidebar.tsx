"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/data/products";

interface ArticleSidebarProps {
  products: Product[];
  label?: string;
}

export default function ArticleSidebar({
  products,
  label = "JUMP TO",
}: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    products.forEach((p) => {
      const el = document.getElementById(p.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(p.id);
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [products]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      className="article-sidebar"
      style={{
        width: "200px",
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
        {products.map((p) => {
          const isActive = activeId === p.id;
          return (
            <li key={p.id} style={{ marginBottom: "4px" }}>
              <button
                onClick={() => scrollTo(p.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  borderLeft: isActive ? "3px solid #D0021B" : "3px solid transparent",
                  paddingLeft: "10px",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  cursor: "pointer",
                  fontFamily: "var(--font-lato)",
                  fontSize: "13px",
                  color: isActive ? "#D0021B" : "#666666",
                  fontWeight: isActive ? 600 : 400,
                  transition: "color 200ms ease, border-color 200ms ease",
                  lineHeight: 1.4,
                }}
              >
                {p.name}
              </button>
            </li>
          );
        })}
      </ul>

      <style>{`
        @media (max-width: 1024px) {
          .article-sidebar { display: none; }
        }
      `}</style>
    </aside>
  );
}
