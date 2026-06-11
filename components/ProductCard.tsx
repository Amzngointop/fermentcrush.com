import { Check, X } from "lucide-react";
import AccordionSection from "./AccordionSection";
import CTAButton from "./CTAButton";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  rank: number;
}

export default function ProductCard({ product, rank }: ProductCardProps) {
  return (
    <div
      id={product.id}
      style={{
        padding: "40px 0",
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#666666",
            lineHeight: 1,
            marginTop: "2px",
          }}
        >
          {rank}.
        </span>
        <span
          style={{
            display: "inline-block",
            color: "#D0021B",
            fontFamily: "var(--font-lato)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "4px 0",
          }}
        >
          {rank === 1 ? "EDITOR'S PICK" : product.badge.toUpperCase()}
        </span>
      </div>

      <img
        src={product.imageUrl}
        alt={product.name}
        style={{
          width: "100%",
          maxHeight: "280px",
          objectFit: "contain",
          backgroundColor: "#FFFFFF",
          marginBottom: "16px",
          padding: "12px",
          border: "1px solid #E0E0E0",
        }}
      />

      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "22px",
          fontWeight: 700,
          color: "#1A1A1A",
          marginBottom: "8px",
          lineHeight: 1.2,
        }}
      >
        {product.name}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-lato)",
          fontSize: "15px",
          color: "#444444",
          lineHeight: 1.7,
          marginBottom: "20px",
        }}
      >
        {product.summary}
      </p>

      {/* Cons - visible by default */}
      <div style={{ marginBottom: "20px" }}>
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#666666",
            marginBottom: "8px",
          }}
        >
          Considerations
        </p>
        {product.cons.map((con, i) => (
          <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "6px", alignItems: "flex-start" }}>
            <X size={14} color="#D0021B" style={{ marginTop: "3px", flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "14px",
                color: "#444444",
                lineHeight: 1.5,
              }}
            >
              {con}
            </span>
          </div>
        ))}
      </div>

      {/* Accordion sections */}
      <div style={{ marginBottom: "24px" }}>
        <AccordionSection title="Why We Picked It" defaultOpen={true}>
          <div>
            {product.pros.map((pro, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-start" }}>
                <Check size={14} color="#1A1A1A" style={{ marginTop: "3px", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "14px",
                    color: "#1A1A1A",
                    lineHeight: 1.5,
                  }}
                >
                  {pro}
                </span>
              </div>
            ))}
          </div>
        </AccordionSection>

        <AccordionSection title="Who It's For">
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "14px",
              color: "#1A1A1A",
              lineHeight: 1.7,
            }}
          >
            {product.bestFor}
          </p>
        </AccordionSection>

        <AccordionSection title="How to Use It">
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "14px",
              color: "#1A1A1A",
              lineHeight: 1.7,
            }}
          >
            {product.howToUse}
          </p>
        </AccordionSection>
      </div>

      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          fontFamily: "var(--font-lato)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#D0021B",
          textDecoration: "none",
          textAlign: "center",
          padding: "14px",
          border: "2px solid #D0021B",
        }}
      >
        View on Amazon →
      </a>
    </div>
  );
}
