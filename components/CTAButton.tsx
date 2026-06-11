"use client";

import Link from "next/link";
import { CSSProperties } from "react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  external?: boolean;
}

const baseStyle: CSSProperties = {
  display: "inline-block",
  fontFamily: "var(--font-lato)",
  fontWeight: 600,
  fontSize: "12px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "14px 32px",
  borderRadius: "0",
  cursor: "pointer",
  transition: "background-color 120ms ease, color 120ms ease",
  border: "none",
};

const primaryStyle: CSSProperties = {
  ...baseStyle,
  backgroundColor: "#1A1A1A",
  color: "#FFFFFF",
};

const secondaryStyle: CSSProperties = {
  ...baseStyle,
  backgroundColor: "#FFFFFF",
  color: "#1A1A1A",
  border: "2px solid #1A1A1A",
};

export default function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  fullWidth = false,
  external = false,
}: CTAButtonProps) {
  const style = {
    ...(variant === "primary" ? primaryStyle : secondaryStyle),
    ...(fullWidth ? { display: "block", textAlign: "center" as const, width: "100%" } : {}),
  };

  const hoverHandlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      if (variant === "primary") {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#333333";
      } else {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#1A1A1A";
        (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
      }
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      if (variant === "primary") {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#1A1A1A";
      } else {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF";
        (e.currentTarget as HTMLElement).style.color = "#1A1A1A";
      }
    },
  };

  if (href) {
    return (
      <Link
        href={href}
        style={style}
        {...hoverHandlers}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button style={style} onClick={onClick} {...hoverHandlers}>
      {children}
    </button>
  );
}
