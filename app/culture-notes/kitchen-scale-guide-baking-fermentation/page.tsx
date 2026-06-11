import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Use a Kitchen Scale for Bread Baking & Fermentation | FermentCrush",
  description:
    "A complete guide to using a kitchen scale for bread baking and fermentation. Learn weight-based ratios, baker's percentages, salt calculations, and why grams beat cups every time.",
  twitter: { card: "summary_large_image" },
};

const faq = [
  {
    q: "What is the most important reason to weigh ingredients instead of measuring by volume?",
    a: "Consistency. A cup of all-purpose flour can weigh anywhere from 113g to 170g depending on whether it was sifted, spooned, or scooped — a 50% variation that makes every recipe outcome unpredictable. Weight removes that variable entirely. Professional bakers, fermenters, and brewers universally work by weight because it produces the same result every single time regardless of technique, humidity, or how densely flour has settled in the bag.",
  },
  {
    q: "Do I need a 0.1g scale for bread baking?",
    a: "For most home bread baking, a 1g-precision scale is sufficient. Baker's percentages, hydration levels, and salt ratios all work comfortably within 1g accuracy. The exception is espresso-level coffee brewing and micro-batch recipe development below 100g total flour, where 0.1g precision adds meaningful control. A dual-scale setup — a standard 1g kitchen scale plus a dedicated 0.1g precision scale for small-batch work — covers virtually all home cooking needs at reasonable cost.",
  },
  {
    q: "What is baker's percentage and how do I calculate it?",
    a: "Baker's percentage expresses every ingredient as a percentage of the total flour weight. Flour is always 100%. If your recipe uses 500g flour and 375g water, the hydration is 75% (375 ÷ 500 × 100). Salt at 2% on 500g flour = 10g. This system lets you scale recipes to any batch size by simply multiplying the percentages by your target flour weight — it is the universal language of professional bread formulation.",
  },
  {
    q: "How precise do salt measurements need to be for lacto-fermentation?",
    a: "For lacto-fermentation of vegetables, 1g precision is adequate. The standard 2% salt ratio for sauerkraut means 10g salt per 500g cabbage — a measurement well within 1g accuracy. Errors of ±2g on a 500g batch (±0.4% salt) will produce slightly faster or slower fermentation but are not safety-critical. The USDA recommends salt concentrations above 1.5% for safe vegetable fermentation; 1g precision keeps you comfortably within safe parameters.",
  },
  {
    q: "Can I use a kitchen scale to measure liquid ingredients?",
    a: "Yes, and it is often more accurate than volume measures. Water measures 1g per milliliter at room temperature, making weight and volume interchangeable for water, brines, and most cooking liquids. Milk weighs approximately 1.03g/ml; cooking oils approximately 0.92g/ml. For fermentation brine preparation — dissolving a specific salt percentage in water — weighing both salt and water by gram is significantly more accurate than volumetric measurement with measuring cups.",
  },
  {
    q: "How do I keep my kitchen scale accurate over time?",
    a: "Test your scale quarterly against a known reference weight — a brand new US nickel weighs exactly 5.000g; a US quarter weighs 5.670g. Place the weight on the scale after a 2-minute warmup and verify the reading. If the scale drifts more than 1g from the reference, recalibrate (if the scale supports it) or replace. Avoid placing scales on uneven surfaces, near heat sources, or in locations with air currents — all of which introduce measurement error.",
  },
];

export default function KitchenScaleGuidePage() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "60px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ fontFamily: "var(--font-lato)", fontSize: "0.78rem", color: "#666666", marginBottom: "32px" }}>
        <Link href="/" style={{ color: "#666666", textDecoration: "none" }}>Home</Link>
        {" / "}
        <Link href="/culture-notes" style={{ color: "#666666", textDecoration: "none" }}>Culture Notes</Link>
        {" / "}
        <span style={{ color: "#1A1A1A" }}>Kitchen Scale Guide</span>
      </div>

      <span style={{ display: "inline-block", color: "#D0021B", fontFamily: "var(--font-lato)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", marginBottom: "16px" }}>
        Technique Guide
      </span>

      <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "24px" }}>
        How to Use a Kitchen Scale for Bread Baking &amp; Fermentation
      </h1>

      <p style={{ fontFamily: "var(--font-lato)", fontSize: "1rem", color: "#666666", lineHeight: 1.85, marginBottom: "48px" }}>
        The kitchen scale is the single most impactful upgrade available to home bakers and fermenters — and it is routinely underutilized. Most home cooks reach for measuring cups by default, because that is how most recipes are written and how most of us learned to cook. But measuring by volume introduces a variable that is invisible until your bread is dense, your sauerkraut too salty, or your sourdough starter behaves differently batch to batch with no obvious reason why. Weight measurement eliminates that variable completely. A gram is a gram regardless of how tightly flour was packed, how loosely sugar was spooned, or whether your measuring cups are from a set bought in two different decades. This guide covers how kitchen scales work, which specifications matter, how baker's percentages function, how to calculate fermentation salt ratios accurately, and how to build a weighing practice that makes every recipe you make more consistent and more repeatable.
      </p>

      {/* Affiliate disclosure */}
      <div style={{ backgroundColor: "#FFF8F8", borderLeft: "4px solid #D0021B", padding: "12px 16px", marginBottom: "48px", fontFamily: "var(--font-lato)", fontSize: "0.8rem", color: "#666666", lineHeight: 1.6 }}>
        <strong>Affiliate Disclosure:</strong> FermentCrush participates in the Amazon Associates program. Links to recommended products may earn us a commission at no extra cost to you.
      </div>

      {/* Section 1 */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Why Volume Measurements Fail Bakers and Fermenters
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          The problem with volumetric measuring cups is that they measure space, not mass — and most baking and fermentation ingredients are compressible, irregular, or both. All-purpose flour is the canonical example: the same measuring cup can hold between 113g and 170g of flour depending on whether the flour was sifted first, spooned gently, or scooped directly. That is a 50% variation in flour content that, in a sourdough recipe, changes the dough hydration by the same proportion and produces a completely different loaf. The baker doesn't know it happened because the cup looks the same either way.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Fermentation is even less forgiving of salt measurement errors than baking. Lacto-fermentation depends on a specific salt concentration — typically 2% salt by vegetable weight — to select for beneficial Lactobacillus bacteria over harmful pathogens. Too little salt (below 1.5%) allows dangerous bacteria to compete and the ferment fails. Too much salt (above 3%) suppresses fermentation activity and produces an unpalatably salty product. The difference between 1.5% and 3% salt on a 500g batch of cabbage is 7.5g vs 15g — a 7.5g difference that a measuring teaspoon simply cannot distinguish reliably. A kitchen scale resolves this entirely.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          The USDA's guidance on fermented vegetable safety reinforces the importance of precise salt measurement. Their research shows that ferments maintained within the 2–3% salt range consistently produce pH levels below 4.6 within 3–7 days — the threshold below which pathogens cannot survive. Ferments outside that window are less predictable, and precise salt measurement is the primary tool for staying within it.
        </p>
      </section>

      {/* Decision tree / visual */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Which Scale Precision Do You Need?
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "24px" }}>
          Not all kitchen scales are equal — and not all kitchen tasks require the same level of precision. The following decision guide helps you identify the right specification for your cooking applications.
        </p>

        {/* Visual decision matrix */}
        <div style={{ border: "1px solid #E0E0E0", marginBottom: "32px", overflow: "hidden" }}>
          <div style={{ backgroundColor: "#1A1A1A", padding: "12px 20px" }}>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF" }}>Scale Precision Selector</p>
          </div>
          {[
            { task: "Bread baking (1+ loaf)", need: "1g precision", rec: "Standard kitchen scale", ok: true },
            { task: "Lacto-fermentation (200g+ vegetables)", need: "1g precision", rec: "Standard kitchen scale", ok: true },
            { task: "Sourdough starter feeding", need: "1g precision", rec: "Standard kitchen scale", ok: true },
            { task: "Spice blending (small batch)", need: "0.1g precision", rec: "Precision jeweler scale", ok: false },
            { task: "Espresso dosing", need: "0.1g precision", rec: "Precision coffee scale", ok: false },
            { task: "Micro-batch fermentation (<100g)", need: "0.1g precision", rec: "Precision jeweler scale", ok: false },
          ].map((row, i) => (
            <div key={row.task} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr 0.5fr", gap: "0", backgroundColor: i % 2 === 0 ? "#FAFAF7" : "#F5F0E8", borderBottom: "1px solid #E0E0E0" }}>
              <div style={{ padding: "12px 16px", fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#1A1A1A", borderRight: "1px solid #E0D8CC" }}>{row.task}</div>
              <div style={{ padding: "12px 16px", fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#666666", borderRight: "1px solid #E0D8CC" }}>{row.need}</div>
              <div style={{ padding: "12px 16px", fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#1A1A1A", borderRight: "1px solid #E0D8CC" }}>{row.rec}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: row.ok ? "#2D5016" : "#8B4513", fontWeight: 600 }}>{row.ok ? "✓" : "↑"}</div>
            </div>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr 0.5fr", backgroundColor: "#FFF8F8", padding: "8px 16px" }}>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.7rem", color: "#666666", gridColumn: "1 / -1" }}>✓ = standard 1g scale sufficient · ↑ = upgrade to 0.1g precision scale recommended</p>
          </div>
        </div>

        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          For most home kitchens focused on bread baking and fermentation, a quality 1g-precision scale with 5kg capacity handles nearly everything. The one scenario that genuinely benefits from 0.1g precision is sourdough starter maintenance at small scale: if you maintain a 50g starter and feed it at a 1:5:5 ratio, your flour portion is 50g and your measurements stay comfortably within 1g accuracy. But if you keep a 10g starter and feed at the same ratio, 0.1g precision reduces the proportional error meaningfully.
        </p>
      </section>

      {/* Section 3: Baker's Percentages */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Baker's Percentages: The Universal Recipe Language
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Baker's percentage is the system professional bakers use to write and communicate recipes with complete precision regardless of batch size. The foundational rule is simple: flour is always 100%, and every other ingredient is expressed as a percentage of the total flour weight. If a recipe contains 500g flour, 375g water, 10g salt, and 100g sourdough starter, the baker's percentages are: Flour 100%, Hydration 75%, Salt 2%, Starter 20%.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          This system's power becomes apparent when you need to scale. To make a 750g flour batch of the same recipe: multiply each percentage by 750. Water: 75% × 750 = 562.5g. Salt: 2% × 750 = 15g. Starter: 20% × 750 = 150g. The recipe scales perfectly without conversion — you simply multiply all percentages by the new flour weight. This is why professional bakers' recipe cards list percentages rather than absolute weights: the percentages are the recipe, independent of batch size.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Hydration percentage is the most consequential baker's percentage for sourdough. A 65% hydration dough (traditional sandwich loaf style) is manageable for beginners — the dough is firm, easy to shape, and forgiving of handling. A 75% hydration dough (open-crumb country loaf) is slack and extensible, requiring stretch-and-fold rather than kneading, and produces the large irregular holes associated with artisan sourdough. A 80%+ hydration dough (ciabatta or high-hydration boule) is highly challenging — sticky, difficult to shape, but capable of extraordinary open structure when technique is correct. Your scale makes these distinctions concrete and repeatable rather than approximate.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          King Arthur Baking's sourdough resource library recommends beginners start at 70–75% hydration and adjust in 5% increments once comfortable with a given dough's behavior. Without a scale, hydration adjustments are guesswork. With one, they are precise and repeatable experiments.
        </p>
      </section>

      {/* Section 4: Fermentation salt ratios */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Fermentation Salt Ratios: The Math Behind Safe Ferments
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Salt concentration in lacto-fermentation is not a preference — it is a safety parameter. The salt creates an environment inhospitable to pathogenic bacteria while allowing salt-tolerant Lactobacillus species to flourish and produce the lactic acid that preserves the food. The standard safe range is 1.5% to 3% salt by vegetable weight. Below 1.5%, the selective pressure against pathogens weakens dangerously. Above 3%, fermentation is inhibited and the product is unpleasantly salty.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Calculating the correct salt amount takes 10 seconds with a scale. Weigh your prepared vegetables in grams. Multiply by 0.02 (for 2% salt) to get your salt weight in grams. For 800g of shredded cabbage: 800 × 0.02 = 16g salt. Weigh 16g of non-iodized salt, add to the cabbage, massage thoroughly, and proceed. Every batch will be identical in salt concentration regardless of how densely you've packed the jar or how much brine the cabbage releases.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Brine preparation for submerged fermentation follows the same logic. If your ferment needs additional brine (because the vegetables haven't released enough liquid to cover themselves), the standard formula is 1 tablespoon of non-iodized salt per 2 cups of water — approximately 2% salt. But to be precise: weigh your water in grams, multiply by 0.02, and add that exact gram weight of salt. Dissolve completely before adding to the jar. This produces a brine of exactly 2% regardless of the size of your tablespoon.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          A dedicated fermentation notebook — recording vegetable weight, salt weight, and salt percentage for each batch — allows you to track variation in fermentation speed across seasons and compare outcomes across different salt percentages. Within three to six batches, you will have enough data to optimize your process for your specific environment and preferences.
        </p>
      </section>

      {/* Section 5: Practical tips */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Practical Weighing Habits for the Home Kitchen
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          The most important habit for effective scale use is keeping the scale on the counter during active cooking rather than in a cabinet. The additional friction of retrieving the scale from a shelf means you won't use it for quick measurements — and those quick measurements are often the ones where volume inconsistency causes the most damage. A scale that lives on the counter beside the stand mixer gets used for every bread recipe. One in the cabinet gets used when you remember.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Learn the tare function and use it habitually. Taring zeroes the scale with a container on it, allowing you to add ingredients directly to the bowl and measure each one sequentially without transferring to a separate vessel. For bread baking: place your mixing bowl on the scale, tare, add flour to target weight, tare again, add water to target, tare, add salt, tare, add starter. Everything goes into one bowl with zero transfer waste and precise amounts. This technique is faster than measuring each ingredient separately and eliminates the entire category of "forgot to add the salt" errors.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          For fermentation, weigh your jar first, tare, then add your prepared vegetables. This gives you the vegetable weight in the actual fermentation vessel, which you then use to calculate salt with no transfer between bowls. Add the salt directly, massage in the jar (wide-mouth jars make this possible), and proceed. Streamlined, precise, and leaves no salt behind on the massaging bowl.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          Rechargeable scales have become the practical default for kitchens that use scales frequently. The convenience of USB-C charging versus AA battery replacement pays off quickly in a kitchen where the scale is used daily. The tradeoff is that built-in batteries degrade over years of use — if you plan to keep a scale for 10+ years, a battery-powered model remains serviceable indefinitely through battery replacement.
        </p>
      </section>

      {/* Outbound links */}
      <div style={{ border: "1px solid #E0E0E0", padding: "20px 24px", marginBottom: "56px", backgroundColor: "#F7F7F7" }}>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "12px" }}>Authoritative Sources</p>
        <a href="https://nchfp.uga.edu/how/can_06/ferment.html" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#D0021B", textDecoration: "none", marginBottom: "8px" }}>
          → USDA National Center for Home Food Preservation: Fermenting Vegetables
        </a>
        <a href="https://www.kingarthurbaking.com/learn/guides/sourdough" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#D0021B", textDecoration: "none" }}>
          → King Arthur Baking: Complete Sourdough Guide (includes weight-based formulas)
        </a>
      </div>

      {/* FAQ */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "32px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Frequently Asked Questions
        </h2>
        {faq.map((item) => (
          <div key={item.q} style={{ marginBottom: "28px", paddingBottom: "28px", borderBottom: "1px solid #E0E0E0" }}>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>{item.q}</h3>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#666666", lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </section>

      {/* Internal links */}
      <div style={{ padding: "24px", backgroundColor: "#FFF8F8", borderLeft: "4px solid #D0021B" }}>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", marginBottom: "12px" }}>Recommended Guides</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Link href="/best/best-kitchen-scales" style={{ fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#D0021B", textDecoration: "none", padding: "7px 14px", border: "1px solid #D0021B" }}>Best Kitchen Scales →</Link>
          <Link href="/best/best-sourdough-starter-kits" style={{ fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#D0021B", textDecoration: "none", padding: "7px 14px", border: "1px solid #D0021B" }}>Best Sourdough Starter Kits →</Link>
          <Link href="/best/best-mason-jar-lids" style={{ fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#D0021B", textDecoration: "none", padding: "7px 14px", border: "1px solid #D0021B" }}>Best Mason Jar Lids →</Link>
        </div>
      </div>
    </div>
  );
}

