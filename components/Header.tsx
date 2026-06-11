"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const categoryLinks = [
  { label: "Vacuum Sealer Machines", href: "/best/best-vacuum-sealer-machines" },
  { label: "Mason Jar Fermentation Lids", href: "/best/best-mason-jar-lids" },
  { label: "Airtight Food Storage", href: "/best/best-airtight-food-storage" },
  { label: "Digital Kitchen Thermometers", href: "/best/best-digital-kitchen-thermometers" },
  { label: "Kitchen Scales", href: "/best/best-kitchen-scales" },
  { label: "Sourdough Starter Kits", href: "/best/best-sourdough-starter-kits" },
  { label: "Cutting Boards", href: "/best/best-cutting-boards" },
  { label: "Mandoline Slicers", href: "/best/best-mandoline-slicers" },
];

const utilityLinks = [
  { label: "Glossary", href: "/the-lab" },
  { label: "Contact", href: "/write-to-us" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <header style={{ backgroundColor: "#FFFFFF", position: "relative" }}>

      {/* Row 1: hamburger / masthead logo */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", height: "80px", borderBottom: "1px solid #E0E0E0" }}>
        <button
          ref={btnRef}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", padding: "4px 0", flexShrink: 0 }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} color="#1A1A1A" /> : <Menu size={22} color="#1A1A1A" />}
        </button>

        <Link
          href="/"
          style={{ textDecoration: "none", position: "absolute", left: "50%", transform: "translateX(-50%)" }}
        >
          <span style={{ fontFamily: "var(--font-cormorant)", fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em", color: "#1A1A1A", lineHeight: 1, whiteSpace: "nowrap" }}>
            FERMENTCRUSH
          </span>
        </Link>

        {/* Spacer to balance hamburger on the left */}
        <div style={{ width: "30px", flexShrink: 0 }} />
      </div>

      {/* Row 2: dotted divider + editorial tagline */}
      <div style={{ borderBottom: "1px dotted #d4d4d4", padding: "8px 32px" }}>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "12px", fontStyle: "italic", color: "#888888", lineHeight: 1, margin: 0, textAlign: "center" }}>
          Independent buying guides for serious home cooks.{" "}
          <span style={{ color: "#aaaaaa" }}>We may earn a commission on qualifying purchases.</span>
        </p>
      </div>

      {/* Hamburger slide-in panel */}
      {menuOpen && (
        <div
          ref={panelRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "300px",
            backgroundColor: "#FFFFFF",
            borderRight: "1px solid #E0E0E0",
            zIndex: 200,
            overflowY: "auto",
            padding: "24px",
          }}
        >
          {/* Close button inside panel */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "24px" }}>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
              aria-label="Close menu"
            >
              <X size={20} color="#1A1A1A" />
            </button>
          </div>

          {/* Category links */}
          <p style={{ fontFamily: "var(--font-lato)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999999", marginBottom: "12px" }}>
            Buying Guides
          </p>
          {categoryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "14px", fontWeight: 600, color: "#1A1A1A", textDecoration: "none", padding: "10px 0", borderBottom: "1px dashed #e0e0e0" }}
            >
              {item.label}
            </Link>
          ))}

          {/* Utility links */}
          <p style={{ fontFamily: "var(--font-lato)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999999", marginTop: "24px", marginBottom: "12px" }}>
            More
          </p>
          {[...site.nav.utility, ...utilityLinks.filter(u => !site.nav.utility.find(v => v.href === u.href))].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "13px", color: "#555555", textDecoration: "none", padding: "8px 0", borderBottom: "1px dashed #e0e0e0" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Overlay backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.25)", zIndex: 199 }}
        />
      )}
    </header>
  );
}
