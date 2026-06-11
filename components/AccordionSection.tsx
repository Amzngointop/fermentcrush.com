"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ borderBottom: "1px solid #E0E0E0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-lato)",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.04em",
            color: "#1A1A1A",
          }}
        >
          {title}
        </span>
        <ChevronDown
          size={16}
          color="#666666"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 200ms ease",
            flexShrink: 0,
          }}
        />
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "500px" : "0",
          transition: "max-height 300ms ease-in-out",
        }}
      >
        <div style={{ paddingBottom: "16px" }}>{children}</div>
      </div>
    </div>
  );
}
