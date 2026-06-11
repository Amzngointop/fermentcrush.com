"use client";

import AccordionSection from "./AccordionSection";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
  return (
    <section style={{ marginTop: "60px", marginBottom: "40px" }}>
      <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "32px" }}>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "36px",
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h2>
      </div>
      {items.map((item, i) => (
        <AccordionSection key={i} title={item.question}>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "16px",
              color: "#444444",
              lineHeight: 1.8,
            }}
          >
            {item.answer}
          </p>
        </AccordionSection>
      ))}
    </section>
  );
}
