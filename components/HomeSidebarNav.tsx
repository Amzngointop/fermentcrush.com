"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "browse-by-category", label: "Browse by Category" },
  { id: "learn-the-craft", label: "Learn the Craft" },
  { id: "fermentation-calculator", label: "Fermentation Calculator" },
  { id: "the-lab", label: "The Fermentation Lab" },
  { id: "how-we-pick", label: "How We Pick Products" },
  { id: "newsletter", label: "Stay in the Loop" },
];

export default function HomeSidebarNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      style={{
        width: "192px",
        flexShrink: 0,
        position: "sticky",
        top: "80px",
        alignSelf: "flex-start",
      }}
      className="home-sidebar-nav"
    >
      <p
        style={{
          fontFamily: "var(--font-lato)",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#999",
          marginBottom: "12px",
        }}
      >
        On This Page
      </p>
      <nav>
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              display: "block",
              fontFamily: "var(--font-lato)",
              fontSize: "13px",
              fontWeight: active === id ? 600 : 400,
              color: active === id ? "#D0021B" : "#444444",
              textDecoration: "none",
              padding: "5px 0 5px 10px",
              borderLeft: active === id ? "2px solid #D0021B" : "2px solid transparent",
              transition: "all 150ms ease",
              lineHeight: 1.4,
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
