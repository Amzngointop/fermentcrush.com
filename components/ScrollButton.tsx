"use client";
import CTAButton from "@/components/CTAButton";

export default function ScrollButton() {
  return (
    <CTAButton onClick={() => document.getElementById("expert-guides")?.scrollIntoView({ behavior: "smooth" })}>
      Explore Reviews
    </CTAButton>
  );
}
