"use client";

import { useState } from "react";

const fermentData: Record<
  string,
  Record<string, { days: number; stages: { label: string; day: number }[] }>
> = {
  Sauerkraut: {
    "Cool (60–65°F)": {
      days: 21,
      stages: [
        { label: "Day 1–2: Salt draws moisture", day: 2 },
        { label: "Day 3–5: Bubbles form", day: 5 },
        { label: "Day 7–10: Active fermentation", day: 10 },
        { label: "Day 14–21: Ready to taste", day: 21 },
      ],
    },
    "Ideal (68–74°F)": {
      days: 14,
      stages: [
        { label: "Day 1: Salt draws moisture", day: 1 },
        { label: "Day 2–3: Bubbles form", day: 3 },
        { label: "Day 5–7: Active fermentation", day: 7 },
        { label: "Day 10–14: Ready to taste", day: 14 },
      ],
    },
    "Warm (75–80°F)": {
      days: 7,
      stages: [
        { label: "Day 1: Fast brine production", day: 1 },
        { label: "Day 2: Vigorous bubbling", day: 2 },
        { label: "Day 3–4: Peak fermentation", day: 4 },
        { label: "Day 5–7: Ready — check daily", day: 7 },
      ],
    },
  },
  Kombucha: {
    "Cool (60–65°F)": {
      days: 21,
      stages: [
        { label: "Day 1–3: SCOBY activating", day: 3 },
        { label: "Day 7: Slight tang developing", day: 7 },
        { label: "Day 14: Moderate acidity", day: 14 },
        { label: "Day 17–21: Taste and bottle", day: 21 },
      ],
    },
    "Ideal (68–74°F)": {
      days: 12,
      stages: [
        { label: "Day 1–2: SCOBY forming layer", day: 2 },
        { label: "Day 4–5: Flavor developing", day: 5 },
        { label: "Day 7: Taste-test point", day: 7 },
        { label: "Day 9–12: Bottle for F2", day: 12 },
      ],
    },
    "Warm (75–80°F)": {
      days: 7,
      stages: [
        { label: "Day 1: Active SCOBY metabolism", day: 1 },
        { label: "Day 3: Early tang", day: 3 },
        { label: "Day 5: Taste test recommended", day: 5 },
        { label: "Day 6–7: Bottle before over-souring", day: 7 },
      ],
    },
  },
  Kimchi: {
    "Cool (60–65°F)": {
      days: 14,
      stages: [
        { label: "Day 1: Brine and paste absorbing", day: 1 },
        { label: "Day 3: Slight effervescence", day: 3 },
        { label: "Day 7: Freshly fermented stage", day: 7 },
        { label: "Day 10–14: Fully ripe", day: 14 },
      ],
    },
    "Ideal (68–74°F)": {
      days: 7,
      stages: [
        { label: "Day 1: Wilting complete", day: 1 },
        { label: "Day 2: Fermentation begins", day: 2 },
        { label: "Day 4–5: Fresh kimchi ready", day: 5 },
        { label: "Day 5–7: Fermented stage", day: 7 },
      ],
    },
    "Warm (75–80°F)": {
      days: 3,
      stages: [
        { label: "Day 1: Very active", day: 1 },
        { label: "Day 2: Taste-test", day: 2 },
        { label: "Day 3: Move to fridge", day: 3 },
        { label: "Refrigerate to slow fermentation", day: 3 },
      ],
    },
  },
  Kefir: {
    "Cool (60–65°F)": {
      days: 2,
      stages: [
        { label: "Hour 24: Mild kefir", day: 1 },
        { label: "Hour 36: Medium tang", day: 1 },
        { label: "Hour 48: Strong, thick kefir", day: 2 },
        { label: "Strain and restart", day: 2 },
      ],
    },
    "Ideal (68–74°F)": {
      days: 1,
      stages: [
        { label: "Hour 12: Light fermentation", day: 1 },
        { label: "Hour 18: Mild kefir flavor", day: 1 },
        { label: "Hour 24: Ready to strain", day: 1 },
        { label: "Strain, refrigerate, repeat", day: 1 },
      ],
    },
    "Warm (75–80°F)": {
      days: 1,
      stages: [
        { label: "Hour 8–10: Very fast ferment", day: 1 },
        { label: "Hour 14: Check for separation", day: 1 },
        { label: "Hour 18–20: Strain before over-fermenting", day: 1 },
        { label: "Refrigerate immediately", day: 1 },
      ],
    },
  },
  Pickles: {
    "Cool (60–65°F)": {
      days: 10,
      stages: [
        { label: "Day 1: Brine penetrating", day: 1 },
        { label: "Day 3: Color changing", day: 3 },
        { label: "Day 5–7: Mild pickle flavor", day: 7 },
        { label: "Day 7–10: Full lacto pickle", day: 10 },
      ],
    },
    "Ideal (68–74°F)": {
      days: 7,
      stages: [
        { label: "Day 1: Bubbling begins", day: 1 },
        { label: "Day 2–3: Active fermentation", day: 3 },
        { label: "Day 4–5: Taste-test", day: 5 },
        { label: "Day 5–7: Move to cold storage", day: 7 },
      ],
    },
    "Warm (75–80°F)": {
      days: 4,
      stages: [
        { label: "Day 1: Very active brine", day: 1 },
        { label: "Day 2: Full pickle emerging", day: 2 },
        { label: "Day 3: Taste for desired tang", day: 3 },
        { label: "Day 3–4: Refrigerate", day: 4 },
      ],
    },
  },
  Sourdough: {
    "Cool (60–65°F)": {
      days: 14,
      stages: [
        { label: "Day 1–3: Feeding, no activity", day: 3 },
        { label: "Day 4–6: Small bubbles", day: 6 },
        { label: "Day 7–10: Some rise", day: 10 },
        { label: "Day 12–14: Active starter ready", day: 14 },
      ],
    },
    "Ideal (68–74°F)": {
      days: 7,
      stages: [
        { label: "Day 1–2: Initial wild yeast capture", day: 2 },
        { label: "Day 3–4: Bubbles forming", day: 4 },
        { label: "Day 5: Consistent rise", day: 5 },
        { label: "Day 6–7: Starter ready to bake", day: 7 },
      ],
    },
    "Warm (75–80°F)": {
      days: 5,
      stages: [
        { label: "Day 1: Early activity", day: 1 },
        { label: "Day 2–3: Good bubble structure", day: 3 },
        { label: "Day 4: Doubling in size", day: 4 },
        { label: "Day 5: Bake-ready", day: 5 },
      ],
    },
  },
  Yogurt: {
    "Cool (60–65°F)": {
      days: 1,
      stages: [
        { label: "Hour 10: Very mild tang", day: 1 },
        { label: "Hour 14: Mild yogurt", day: 1 },
        { label: "Hour 18: Light set", day: 1 },
        { label: "Hour 20–24: Full set", day: 1 },
      ],
    },
    "Ideal (68–74°F)": {
      days: 1,
      stages: [
        { label: "Hour 6: Cultures active", day: 1 },
        { label: "Hour 8: Mild yogurt forming", day: 1 },
        { label: "Hour 10: Light set", day: 1 },
        { label: "Hour 10–12: Set, refrigerate", day: 1 },
      ],
    },
    "Warm (75–80°F)": {
      days: 1,
      stages: [
        { label: "Hour 4: Very active cultures", day: 1 },
        { label: "Hour 6: Yogurt setting", day: 1 },
        { label: "Hour 8: Full set achieved", day: 1 },
        { label: "Refrigerate immediately", day: 1 },
      ],
    },
  },
};

const fermentTypes = Object.keys(fermentData);
const tempOptions = ["Cool (60–65°F)", "Ideal (68–74°F)", "Warm (75–80°F)"];

export default function FermentationCalculator() {
  const [ferment, setFerment] = useState("");
  const [temp, setTemp] = useState("");
  const [result, setResult] = useState<null | {
    days: number;
    stages: { label: string; day: number }[];
  }>(null);
  const [animating, setAnimating] = useState(false);

  const calculate = () => {
    if (!ferment || !temp) return;
    setAnimating(true);
    setResult(null);
    setTimeout(() => {
      setResult(fermentData[ferment]?.[temp] || null);
      setAnimating(false);
    }, 200);
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-lato)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#666666",
              marginBottom: "8px",
            }}
          >
            What are you making?
          </label>
          <select
            value={ferment}
            onChange={(e) => setFerment(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              backgroundColor: "#ffffff",
              border: "1px solid #d4d4d4",
              borderRadius: "2px",
              color: "#1A1A1A",
              fontFamily: "var(--font-lato)",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            <option value="">Select a ferment...</option>
            {fermentTypes.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-lato)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#666666",
              marginBottom: "8px",
            }}
          >
            Room temperature?
          </label>
          <select
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              backgroundColor: "#ffffff",
              border: "1px solid #d4d4d4",
              borderRadius: "2px",
              color: "#1A1A1A",
              fontFamily: "var(--font-lato)",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            <option value="">Select temperature...</option>
            {tempOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        disabled={!ferment || !temp}
        style={{
          backgroundColor: "#D0021B",
          color: "#ffffff",
          fontFamily: "var(--font-lato)",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "12px 32px",
          border: "none",
          borderRadius: "2px",
          cursor: ferment && temp ? "pointer" : "not-allowed",
          opacity: ferment && temp ? 1 : 0.5,
          boxShadow: "4px 4px 0px #8B0000",
          marginBottom: "32px",
          transition: "all 80ms ease",
        }}
      >
        Calculate →
      </button>

      {result && !animating && (
        <div>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.9rem",
              color: "#444444",
              marginBottom: "16px",
            }}
          >
            Estimated fermentation time:{" "}
            <strong style={{ color: "#1A1A1A" }}>
              {result.days} {result.days === 1 ? "day" : "days"}
            </strong>
          </p>

          {/* Progress bar */}
          <div
            style={{
              height: "8px",
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              marginBottom: "24px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundColor: "#D0021B",
                borderRadius: "4px",
                width: "100%",
                animation: "fillBar 600ms ease-out",
              }}
            />
          </div>

          {/* Stage labels */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "12px",
            }}
          >
            {result.stages.map((stage, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f7f7f7",
                  border: "1px solid #e8e8e8",
                  borderRadius: "2px",
                  padding: "12px",
                  animation: `stageFadeIn 400ms ${i * 100}ms ease-out both`,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.8rem",
                    color: "#444444",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {stage.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fillBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes stageFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
