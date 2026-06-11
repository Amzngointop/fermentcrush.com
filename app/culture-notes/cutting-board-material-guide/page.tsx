import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose and Care for a Cutting Board: Complete Material Guide | FermentCrush",
  description:
    "Compare bamboo, plastic, composite, and wood cutting boards for food safety, knife care, and maintenance. Expert guide to choosing and caring for the best cutting board for your kitchen.",
  twitter: { card: "summary_large_image" },
};

const faq = [
  {
    q: "Which cutting board material is the safest for raw meat?",
    a: "The FDA recommends separate dedicated boards for raw proteins and ready-to-eat foods regardless of material — this practice matters more than any material property. That said, non-porous plastic (HDPE) is the most straightforward to sanitize: it withstands dishwasher heat cycles that wood and bamboo cannot. The catch is that deep knife grooves in plastic harbor bacteria effectively. Replace plastic boards when grooves become significant. Wood and bamboo have natural antimicrobial properties but must be hand-washed and are harder to fully sanitize.",
  },
  {
    q: "Does bamboo actually dull knives faster than wood?",
    a: "Yes, measurably. Bamboo is a grass species that, once processed into boards, is denser and harder than most kitchen wood species including maple and hinoki. Hardness directly correlates with edge wear on knife steel — a harder surface creates micro-abrasions on the knife edge during each cutting stroke. Over hundreds of cutting sessions, this difference is real and noticeable. Hinoki and end-grain maple are the most knife-friendly materials; bamboo and stone are the worst. If knife longevity is a priority, bamboo boards deserve a separate evaluation from softer wood alternatives.",
  },
  {
    q: "How often should I oil a wooden cutting board?",
    a: "Oil new wooden boards three to five times before first use — apply food-grade mineral oil generously, allow to absorb for 30 minutes, buff off excess, and repeat. After the initial seasoning, oil monthly for boards in heavy daily use, or whenever the wood begins to look dry or lighter in color. Use food-grade mineral oil (odorless, flavorless, shelf-stable) rather than olive oil, coconut oil, or other food oils that will eventually go rancid inside the wood grain and develop off-flavors that transfer to food.",
  },
  {
    q: "What is the difference between edge-grain and end-grain cutting boards?",
    a: "Edge-grain boards are cut from the length of the wood, showing long grain lines on the cutting surface. End-grain boards are cut across the wood's growth rings, showing a checkerboard of cross-sections. End-grain boards are significantly more knife-friendly because the blade travels between wood fibers rather than across them — the fibers close over the cut after each stroke rather than accumulating surface damage. End-grain boards also self-heal surface cuts over time. They cost more and require more careful maintenance to prevent warping from moisture.",
  },
  {
    q: "Can I use a cutting board for sourdough bread slicing?",
    a: "Yes. A clean, flat cutting board is ideal for sourdough slicing — preferably a smooth composite or plastic surface where a serrated bread knife can track cleanly. Avoid boards with deep knife grooves or rough textures that deflect the blade during the sawing motion. A dedicated bread board (or the reverse side of a reversible board) kept exclusively for baked goods prevents the transfer of garlic, onion, or raw protein residues into your bread's flavor.",
  },
  {
    q: "Is it worth buying a set of color-coded cutting boards?",
    a: "For households that regularly cook proteins alongside produce and bread, yes. Color-coding eliminates cross-contamination risk that relying on memory and washing cannot fully address — particularly during busy multi-dish cooking where boards get set down, picked back up, and used in rapid sequence. Standard color conventions: red for raw beef, yellow for raw poultry, green for produce, white for bread and dairy. A three-board set is a practical minimum: raw protein, produce/fermentation prep, and bread.",
  },
];

export default function CuttingBoardMaterialGuidePage() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "60px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ fontFamily: "var(--font-lato)", fontSize: "0.78rem", color: "#666666", marginBottom: "32px" }}>
        <Link href="/" style={{ color: "#666666", textDecoration: "none" }}>Home</Link>
        {" / "}
        <Link href="/culture-notes" style={{ color: "#666666", textDecoration: "none" }}>Culture Notes</Link>
        {" / "}
        <span style={{ color: "#1A1A1A" }}>Cutting Board Material Guide</span>
      </div>

      <span style={{ display: "inline-block", color: "#D0021B", fontFamily: "var(--font-lato)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", marginBottom: "16px" }}>
        Technique Guide
      </span>

      <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "24px" }}>
        How to Choose and Care for a Cutting Board: Material Guide
      </h1>

      <p style={{ fontFamily: "var(--font-lato)", fontSize: "1rem", color: "#666666", lineHeight: 1.85, marginBottom: "48px" }}>
        The cutting board is the kitchen's primary work surface — present at every meal prep, every fermentation session, every bread bake. Most home kitchens have one or two cutting boards chosen by habit or convenience, used for everything, and replaced when they become obviously unusable. That approach leaves significant performance on the table. The right cutting board material for raw protein prep is not the same as the right material for vegetable fermentation prep or bread slicing. The right thickness for a board that will stay on the counter differs from the right size for a board that lives in a drawer. Understanding these distinctions — and building a three-board system matched to actual use cases — is one of the highest-return kitchen upgrades available at relatively modest cost.
      </p>

      {/* Affiliate disclosure */}
      <div style={{ backgroundColor: "#FFF8F8", borderLeft: "4px solid #D0021B", padding: "12px 16px", marginBottom: "48px", fontFamily: "var(--font-lato)", fontSize: "0.8rem", color: "#666666", lineHeight: 1.6 }}>
        <strong>Affiliate Disclosure:</strong> FermentCrush participates in the Amazon Associates program. Links to recommended products may earn us a commission at no extra cost to you.
      </div>

      {/* Material comparison visual */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Material Comparison: The Four Main Options
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginBottom: "32px" }}>
          {[
            { material: "Bamboo", knifeFriendly: "Fair", hygiene: "Good", dishwasher: "No", maintenance: "Oil monthly", best: "Eco-conscious buyers" },
            { material: "HDPE Plastic", knifeFriendly: "Good", hygiene: "Excellent", dishwasher: "Yes ✓", maintenance: "Replace when grooved", best: "Protein prep" },
            { material: "Composite", knifeFriendly: "Very Good", hygiene: "Excellent", dishwasher: "Yes ✓", maintenance: "Minimal", best: "All-purpose" },
            { material: "Hardwood", knifeFriendly: "Excellent", hygiene: "Good", dishwasher: "No", maintenance: "Oil regularly", best: "Vegetable prep, presentation" },
          ].map((m) => (
            <div key={m.material} style={{ padding: "20px", border: "1px solid #E0E0E0", borderTop: "3px solid #2D5016" }}>
              <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "12px" }}>{m.material}</p>
              {[
                ["Knife-Friendly", m.knifeFriendly],
                ["Hygiene", m.hygiene],
                ["Dishwasher Safe", m.dishwasher],
                ["Maintenance", m.maintenance],
                ["Best For", m.best],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F3EDE3", padding: "5px 0" }}>
                  <span style={{ fontFamily: "var(--font-lato)", fontSize: "0.72rem", color: "#666666", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
                  <span style={{ fontFamily: "var(--font-lato)", fontSize: "0.8rem", fontWeight: 600, color: "#1A1A1A" }}>{val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Each material category represents a genuine trade-off rather than a simple ranking. Bamboo's density makes it more durable than softwoods but harder on knife edges. HDPE plastic's dishwasher compatibility makes it the most straightforwardly hygienic for protein prep but requires replacement when deep grooves accumulate. Composite materials (Epicurean's compressed wood fiber is the standard example) combine knife-friendliness close to hardwood with dishwasher compatibility, at a price premium. Hardwood end-grain boards deliver the best knife care and the most beautiful presentation surface, but require consistent oiling maintenance and cannot handle dishwasher heat.
        </p>
      </section>

      {/* Section 2: Knife friendliness */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Knife-Friendliness: Why Board Hardness Matters
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          A cutting board's effect on knife edges is one of the most consequential and least discussed aspects of board selection. Knife steel has a Rockwell hardness rating — typically 58–62 HRC for quality kitchen knives. When a knife edge contacts a surface harder than itself, micro-abrasion occurs on the edge geometry. Over hundreds of cutting sessions, this creates a dull edge faster than normal use on appropriate surfaces. This is why glass cutting boards are universally condemned by knife enthusiasts: glass is significantly harder than knife steel and destroys edge geometry in a single session.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          The Janka hardness scale rates wood species for resistance to indentation. Kitchen-appropriate cutting board woods include hinoki (Japanese cypress, very soft and knife-friendly), maple (the American standard — moderately hard, durable, classic), cherry (slightly softer than maple, excellent for everyday use), and teak (hard, oil-rich, water-resistant but moderately aggressive on edges). Bamboo, despite being classified as a grass rather than wood, rates harder than most kitchen wood species on the Janka scale — making it the worst choice among natural materials for knife longevity.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          For home cooks who own quality knives, the practical recommendation is a hardwood or composite board as the primary prep surface, with a dedicated plastic board for raw protein work that will be sanitized in the dishwasher. This combination protects knife edges during the high-volume vegetable prep work where edge degradation accumulates fastest, while maintaining the hygienic advantage of dishwasher-safe plastic for protein contact surfaces.
        </p>
      </section>

      {/* Section 3: Hygiene and food safety */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Food Safety and Hygiene: What the Research Says
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          The food safety research on cutting board materials is genuinely nuanced — and the conventional wisdom that "plastic is always safer than wood" oversimplifies the actual findings. Research published by UC Davis microbiologist Dean O. Cliver found that wood cutting boards may actually be safer than plastic in certain cross-contamination scenarios: bacteria drawn into wood grain by knife cuts did not multiply and were eventually killed by the wood's natural antimicrobial compounds, whereas the same bacteria survived and multiplied in the knife grooves of plastic boards. The FDA's practical guidance focuses less on material choice and more on the behavior of the grooves that develop over time in any material.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          The FDA's definitive guidance on cutting board hygiene recommends: using separate boards for raw proteins and ready-to-eat foods; replacing cutting boards when deep grooves develop that are difficult to clean; washing boards with hot soapy water after each protein contact; and periodically sanitizing protein-contact boards with a dilute bleach solution (1 tablespoon bleach per gallon of water) or a commercial food-contact sanitizer. These practices apply equally to all materials.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          For fermentation prep — shredding cabbage, slicing daikon, preparing vegetables for kimchi — a dedicated board that never contacts raw protein is the cleanest approach. Using your fermentation board exclusively for vegetable work eliminates the risk of transferring protein residue or bleach sanitizer residues into fermentation vessels. This board can be wood, composite, or plastic — the choice is primarily about knife care and aesthetics since hygiene demands are lower when the contact food is acid-producing vegetables rather than pathogen-risk proteins.
        </p>
      </section>

      {/* Section 4: Maintenance */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Maintenance: Extending Board Life
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Wood and bamboo boards require oiling to prevent cracking, warping, and surface degradation. The maintenance routine is straightforward but must be consistent. Use only food-grade mineral oil — it is odorless, flavorless, colorless, and does not go rancid. Apply a pool of oil to the board surface, spread evenly with a cloth or paper towel, and allow to absorb for at least 30 minutes. Buff off any excess oil that hasn't been absorbed. For a new board, repeat this process three to five times over the first week before heavy use to fully saturate the wood. After the initial seasoning, monthly oiling maintains the board for daily use.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          Signs that a wood board needs immediate oiling: the surface appears lighter in color than usual (indicating moisture loss), water no longer beads on the surface (indicating the oil barrier is depleted), or the wood feels rough and dry rather than smooth. A board in this state can be fully restored with two to three successive oil treatments applied over a week. A board left untreated in this condition will eventually crack along the grain, becoming unusable.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          Composite and plastic boards require no oiling and are dishwasher-safe — their maintenance is essentially limited to replacement when knife grooves become significant. Inspect the surface periodically by running a fingernail across the cut surface: grooves that catch a fingernail are deep enough to harbor bacteria through dishwasher cleaning. When you reach this point with a plastic board, replace it rather than continuing to use it for raw protein prep. A well-maintained composite board can last many years with dishwasher cleaning.
        </p>
      </section>

      {/* Section 5: Building a system */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.9rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginTop: "48px" }}>
          Building a Three-Board Kitchen System
        </h2>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A", marginBottom: "16px" }}>
          The most practical approach for a serious home kitchen is a three-board system with clear role assignment. Board one: a large (15×20 inch) HDPE plastic or composite board designated exclusively for raw proteins — poultry, beef, pork, and fish. This board is dishwasher-sanitized after every protein contact. Board two: a large hardwood or composite board for vegetables, fermentation prep, cheese, bread, and all ready-to-eat foods. This board is hand-washed with hot soapy water and oiled if wood. Board three: a medium or smaller board for in-line tasks — cutting an onion while something cooks, slicing a piece of fruit, preparing a quick garnish — that lives on the counter for frequent small use.
        </p>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", lineHeight: 1.9, color: "#1A1A1A" }}>
          The two-board minimum (protein vs. everything else) is the FDA's practical recommendation and is what most food safety-conscious home cooks actually implement. The third board is a quality-of-life upgrade that reduces the friction of moving the large boards repeatedly during complex multi-component cooking sessions. Color-coding these three boards (visual differentiation that operates before conscious thought) is the most reliable implementation for households where multiple people cook.
        </p>
      </section>

      {/* Outbound links */}
      <div style={{ border: "1px solid #E0E0E0", padding: "20px 24px", marginBottom: "56px", backgroundColor: "#F7F7F7" }}>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "12px" }}>Authoritative Sources</p>
        <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cutting-boards-and-food-safety" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#D0021B", textDecoration: "none", marginBottom: "8px" }}>
          → USDA FSIS: Cutting Boards and Food Safety (official FDA guidance)
        </a>
        <a href="https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#D0021B", textDecoration: "none" }}>
          → FDA: Safe Food Handling Guidelines for Home Cooks
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
          <Link href="/best/best-cutting-boards" style={{ fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#D0021B", textDecoration: "none", padding: "7px 14px", border: "1px solid #D0021B" }}>Best Cutting Boards →</Link>
          <Link href="/best/best-mandoline-slicers" style={{ fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#D0021B", textDecoration: "none", padding: "7px 14px", border: "1px solid #D0021B" }}>Best Mandoline Slicers →</Link>
          <Link href="/best/best-digital-kitchen-thermometers" style={{ fontFamily: "var(--font-lato)", fontSize: "0.85rem", color: "#D0021B", textDecoration: "none", padding: "7px 14px", border: "1px solid #D0021B" }}>Best Kitchen Thermometers →</Link>
        </div>
      </div>
    </div>
  );
}

