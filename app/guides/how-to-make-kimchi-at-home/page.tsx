import type { Metadata } from "next";
import Link from "next/link";
import guides from "@/data/guides";
import articles from "@/data/articles";

export const metadata: Metadata = {
  title: "How to Make Kimchi at Home: A Step-by-Step Guide | FermentCrush",
  description:
    "A complete guide to making kimchi at home — from salting napa cabbage to building the paste and managing the ferment. Includes troubleshooting and timing tips.",
  openGraph: { type: "article" },
  twitter: { card: "summary_large_image" },
};

const guide = guides.find((g) => g.slug === "how-to-make-kimchi-at-home")!;
const otherGuides = guides.filter((g) => g.slug !== "how-to-make-kimchi-at-home");
const relatedSlugs = ["best-cutting-boards", "best-mandoline-slicers", "best-kitchen-scales"];
const relatedArticles = relatedSlugs
  .map((s) => articles.find((a) => a.slug === s))
  .filter((a): a is NonNullable<typeof a> => !!a);

const D = "1px dashed #d4d4d4";

const processSteps = [
  "Salt Cabbage",
  "Rinse & Drain",
  "Make Paste",
  "Coat Vegetables",
  "Pack & Ferment",
];

export default function KimchiGuidePage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#666666", marginBottom: "32px" }}>
        <Link href="/" style={{ color: "#666666", textDecoration: "none" }}>Home</Link>
        <span style={{ color: "#D0021B", margin: "0 6px" }}>/</span>
        <Link href="/how-it-works" style={{ color: "#666666", textDecoration: "none" }}>Guides</Link>
        <span style={{ color: "#D0021B", margin: "0 6px" }}>/</span>
        <span style={{ color: "#1A1A1A" }}>{guide.title}</span>
      </div>

      <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
        {/* Left sidebar */}
        <aside className="guide-left-sidebar" style={{ width: "200px", flexShrink: 0, position: "sticky", top: "80px", alignSelf: "flex-start", border: "1px solid #E0E0E0", padding: "16px" }}>
          <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#D0021B", marginBottom: "16px" }}>
            IN THIS GUIDE
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { id: "kimchi-vs-sauerkraut", label: "Kimchi vs. Sauerkraut" },
              { id: "ingredients", label: "Ingredients You Need" },
              { id: "salting", label: "Salting the Cabbage" },
              { id: "paste", label: "Making the Paste" },
              { id: "packing", label: "Packing and Fermenting" },
              { id: "readiness", label: "How to Know When Ready" },
              { id: "troubleshooting", label: "Troubleshooting" },
            ].map(({ id, label }) => (
              <li key={id} style={{ marginBottom: "4px" }}>
                <a href={`#${id}`} style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "13px", color: "#666666", textDecoration: "none", padding: "6px 0 6px 10px", borderLeft: "3px solid transparent", lineHeight: 1.4 }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Center content */}
        <article style={{ flex: 1, maxWidth: "780px", minWidth: 0 }}>
          <span style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#D0021B", marginBottom: "16px", display: "block" }}>
            {guide.category}
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 56px)", fontWeight: 900, color: "#1A1A1A", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            {guide.title}
          </h1>
          <div style={{ display: "flex", gap: "24px", marginBottom: "32px", flexWrap: "wrap", borderBottom: "1px solid #E0E0E0", paddingBottom: "16px" }}>
            <span style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#666666" }}>Updated 2026</span>
            <span style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#666666" }}>{guide.readTime}</span>
          </div>
          <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#666666", marginBottom: "32px" }}>
            {guide.excerpt}
          </p>

          {/* Cover image */}
          <img
            src={guide.coverImage}
            alt={guide.imageAlt}
            style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", marginBottom: "48px" }}
          />

          {/* Process flow diagram */}
          <div style={{ border: D, padding: "24px", marginBottom: "48px" }}>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "20px" }}>
              Kimchi Process Overview
            </p>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }} className="process-flow">
              {processSteps.map((step, i) => (
                <div key={step} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "24px", height: "24px", backgroundColor: "#D0021B", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <span style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#444444", textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
                      {step}
                    </span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <span style={{ color: "#d4d4d4", fontSize: "16px", flexShrink: 0 }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section id="kimchi-vs-sauerkraut" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                What Makes Kimchi Different from Sauerkraut
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Both kimchi and sauerkraut are lacto-fermented cabbage vegetables, but their processes, flavor profiles, and cultural contexts diverge sharply after that shared starting point. Sauerkraut relies on a pure salt ferment — cabbage, salt, time — which produces a clean, lactic sourness with a crisp texture. Kimchi introduces a complex spice paste containing gochugaru (Korean red pepper flakes), garlic, ginger, and typically fish sauce or salted shrimp. These additions create a layered fermentation environment where multiple microbial species interact, producing a flavor profile that ranges from spicy and pungent when fresh to deeply funky, sour, and complex when fully fermented.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              The salting process differs too. Sauerkraut uses dry salting — the salt is massaged directly into shredded cabbage to draw out moisture. Kimchi uses brine salting — whole or quartered cabbage leaves are submerged in a saltwater solution for 4–8 hours, which draws out moisture more gently and produces a different initial texture. The brine-salted cabbage retains more structural integrity through the fermentation process, a quality prized in Korean kimchi tradition.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Fermentation timing also differs. Fresh kimchi (geotjeori) is consumed immediately, barely fermented. Young kimchi (2–3 days at room temperature) is spicy and slightly tangy. Fully fermented kimchi (7–21 days) is deeply sour and complex. Aged kimchi (months in the refrigerator) develops an almost pickle-forward intensity that forms the backbone of kimchi jjigae (stew). Unlike sauerkraut, kimchi is eaten at every stage and its flavor evolves continuously.
            </p>
            {/* Tip 1 */}
            <div style={{ borderLeft: "4px solid #D0021B", padding: "16px 20px", backgroundColor: "#FFF8F8", margin: "24px 0" }}>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#1A1A1A", lineHeight: 1.7 }}>
                <strong>Tip:</strong> Make your first batch with napa cabbage (baechu kimchi) — it is the most forgiving variety, produces the most brine, and gives you the baseline kimchi experience before experimenting with radish, cucumber, or green onion varieties.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="ingredients" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                Ingredients You Need
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Napa cabbage (baechu):</strong> 1 medium head, approximately 2kg. Napa cabbage is preferred for its high moisture content, tender leaves, and mild flavor that absorbs the paste without overpowering it. Select heads that are dense and heavy with tightly packed inner leaves.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Gochugaru (Korean red pepper flakes):</strong> 4–6 tablespoons, adjusted to heat preference. Gochugaru is not interchangeable with regular chili flakes — its coarse, dry texture, moderate heat, and fruity-smoky flavor are specific to the variety. Find it at Korean grocery stores or order online. The color of your gochugaru directly determines the color and heat of your kimchi.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Fish sauce:</strong> 2–3 tablespoons. Traditional kimchi uses either fish sauce, salted shrimp (saeujeot), or both. Fish sauce accelerates fermentation through its high amino acid content and adds a deep umami backbone. For vegan kimchi, substitute with an equal volume of soy sauce or miso.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Garlic:</strong> 8–10 cloves, freshly minced. Garlic contributes both fermentation substrate and that characteristic pungency that deepens as kimchi ages. Do not substitute garlic powder — fresh garlic produces a fundamentally different fermentation dynamic.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Fresh ginger:</strong> 1 tablespoon, grated. Ginger adds heat, spice, and antimicrobial compounds that help regulate the early fermentation environment. It mellows significantly over time, contributing a warm background note in aged kimchi.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Korean salted shrimp (saeujeot):</strong> 1–2 tablespoons, optional but traditional. Adds umami depth and fermentation complexity. Available at Korean grocery stores, refrigerated.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Green onions:</strong> 4–6 stalks, cut into 1-inch pieces. Add texture and mild onion flavor. Some recipes also include julienned daikon radish (½ cup) for crunch.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Non-iodized salt:</strong> ½ cup for brine, plus extra for dry-salting. Use sea salt, kosher salt, or pickling salt. Iodized table salt inhibits lacto-fermentation bacteria. Per{" "}
              <a href="https://nchfp.uga.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#D0021B", textDecoration: "underline" }}>USDA National Center for Home Food Preservation</a>{" "}
              guidelines, non-iodized salt is essential for safe lacto-fermentation.
            </p>
          </section>

          {/* Section 3 */}
          <section id="salting" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                Salting the Cabbage: The Critical First Step
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Proper salting is the most important determinant of kimchi texture. Under-salted cabbage ferments too quickly and produces mushy results. Over-salted cabbage produces tough, overly salty kimchi that takes weeks to mellow. The goal is to draw out enough moisture to soften the cabbage while maintaining enough structural integrity for it to hold its shape through weeks of fermentation.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Quarter the napa cabbage lengthwise. Make a lengthwise cut through the base to within 2 inches of the top, then tear the head into quarters — this preserves the leaf attachment better than cutting cleanly through. Dissolve ¼ cup non-iodized salt in 4 cups of cold water to make your brine. Submerge the cabbage quarters in the brine for 1–2 hours, turning occasionally. Alternatively, sprinkle the remaining ¼ cup salt between the leaves of the cabbage quarters (the dry-salt method) and leave for 1–2 hours at room temperature.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              The cabbage is ready when it bends without snapping — the leaves should be pliable and slightly wilted but not mushy or translucent. Rinse the salted cabbage thoroughly under cold running water 2–3 times to remove excess salt, tasting as you go. It should taste pleasantly salty but not aggressively so. Drain well and squeeze out excess moisture with your hands before applying the paste.
            </p>
          </section>

          {/* Section 4 */}
          <section id="paste" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                Making the Paste
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              The kimchi paste — yangnyeom — is what distinguishes your kimchi from every other batch you will ever make. The balance of heat, umami, and aromatics is personal, and you'll refine it across every batch. Combine gochugaru, minced garlic, grated ginger, fish sauce, and salted shrimp (if using) in a bowl. Add a small amount of water or apple juice (2–3 tablespoons) to bring the mixture to a spreadable paste consistency. Some recipes include a cooked sweet rice flour porridge (sweet rice flour + water, cooked to a thick paste) which helps the paste adhere to the leaves and feeds fermentation — it's worth including for your first batch.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Taste your paste before applying it. It should be aggressively spicy, deeply umami, garlicky, and slightly sweet. Remember it will mellow significantly during fermentation. If it tastes flat, add more fish sauce or a pinch of salt. If it's too salty, add more gochugaru. The paste should be vibrant red, thick enough to cling to your finger without running, and smell complex and aromatic.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Wear gloves when applying paste — gochugaru stains skin and any porous surface it contacts. Using bare hands will leave your skin orange for 24 hours regardless of washing. Food-grade latex or nitrile gloves protect both your hands and the kimchi from contamination.
            </p>
          </section>

          {/* Section 5 */}
          <section id="packing" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                Packing and Fermenting
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Apply paste to the drained cabbage by working it between every leaf layer, from the outer leaves inward. Use gloved hands to massage the paste evenly throughout. Add the green onions (and daikon, if using) and incorporate them into the paste-coated cabbage. Taste and adjust seasoning at this stage — this is your last easy opportunity before fermentation begins.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Pack the coated kimchi into a clean glass jar or kimchi container, pressing firmly between additions to eliminate air pockets and encourage brine release. Leave 1–2 inches of headspace — kimchi expands during active fermentation. Fold the outer leaves over the packed kimchi as a protective cover layer and press down until brine rises to cover the surface. If insufficient brine develops within 24 hours, add a small amount of 2% salt brine (1 teaspoon salt per 1 cup water) to ensure coverage.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Leave the sealed jar at room temperature (65–75°F) for 1–5 days, pressing down the kimchi once or twice daily to keep it submerged. After 1–2 days, taste a small piece. Young kimchi is fresh, spicy, and barely sour — excellent at this stage. After 3–5 days, it develops more complexity and tang. When you've reached your preferred flavor, refrigerate. Cold fermentation continues slowly, deepening flavor over weeks and months.
            </p>
            {/* Tip 2 */}
            <div style={{ borderLeft: "4px solid #D0021B", padding: "16px 20px", backgroundColor: "#FFF8F8", margin: "24px 0" }}>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#1A1A1A", lineHeight: 1.7 }}>
                <strong>Note:</strong> Press your kimchi down firmly every day during room-temperature fermentation. Carbon dioxide from active fermentation creates air pockets that lift vegetables above the brine, exposing them to oxygen. Daily pressing takes 30 seconds and prevents surface mold.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="readiness" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                How to Know When It&apos;s Ready
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Kimchi has no single &ldquo;ready&rdquo; moment — it passes through distinct stages and each stage has enthusiasts. Day 1–2 (room temperature): fresh kimchi, almost no fermentation tang, maximum crunch. This style is called geotjeori or fresh kimchi and is served alongside food as a condiment. Day 3–5: young kimchi, lightly tangy, still spicy, beginning to soften. Excellent as a side dish. Day 7–14 (room temperature before refrigerating, or several weeks refrigerated): fully fermented, noticeably sour, complex, with spice mellowing. This is the most versatile stage — good as a side dish, in fried rice, or in soup. Months refrigerated: aged kimchi, intensely sour and funky, used primarily for cooking.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              According to{" "}
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4290080/" target="_blank" rel="noopener noreferrer" style={{ color: "#D0021B", textDecoration: "underline" }}>NIH research on fermented food consumption</a>,
              probiotic diversity in kimchi peaks during active fermentation (approximately days 3–7 at room temperature), making this window particularly valuable nutritionally. Taste every day and trust your palate — it&apos;s the most reliable instrument you have.
            </p>
          </section>

          {/* Section 7 */}
          <section id="troubleshooting" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                Troubleshooting Common Kimchi Problems
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Too salty after fermentation:</strong> Insufficient rinsing after brine-salting. Future batches: taste the cabbage after each rinse and stop when the saltiness is moderate. Remedy for current batch: rinse and drain individual pieces before serving, or use in cooked dishes where the salt distributes into a larger liquid base.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Mushy texture:</strong> Over-salting in the brine step, fermentation at too-warm temperatures (above 80°F), or fermentation for too long at room temperature before refrigerating. For future batches: use accurate salt ratios, ferment in a 65–72°F environment, and refrigerate at your preferred sourness level.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Not sour enough after several days:</strong> Fermentation environment is too cool, or kimchi was refrigerated too quickly. If still at room temperature, allow more time. If already refrigerated, move to a warmer spot (65–70°F) for an additional day before tasting again.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Surface mold (fuzzy growth, any color):</strong> Discard immediately. True mold with visible mycelium is not salvageable. Prevent by ensuring vegetables stay submerged, pressing daily, and using clean equipment throughout. Kahm yeast (flat white film) is different — it&apos;s harmless and can be skimmed off, but mold is not.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Too spicy after fermentation:</strong> Reduce gochugaru in future batches. Remedy for current batch: serve alongside starchy foods (rice, noodles) that absorb spice, or use in cooked dishes where heat disperses. Fermentation mellows capsaicin compounds over time — aged kimchi is noticeably milder than fresh.
            </p>
          </section>

          {/* Further reading */}
          <div style={{ marginTop: "24px", marginBottom: "48px", padding: "16px 20px", border: "1px solid #E0E0E0", backgroundColor: "#F7F7F7" }}>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "12px" }}>
              Further Reading
            </p>
            <a href="https://nchfp.uga.edu/" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "14px", color: "#D0021B", textDecoration: "none", marginBottom: "6px" }}>
              → USDA National Center for Home Food Preservation
            </a>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4290080/" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "14px", color: "#D0021B", textDecoration: "none" }}>
              → NIH: Health Benefits of Fermented Foods
            </a>
          </div>

          {/* Related articles */}
          <section style={{ marginTop: "48px", padding: "28px", backgroundColor: "#F7F7F7", borderTop: "3px solid #1A1A1A" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px", fontWeight: 700, color: "#1A1A1A", marginBottom: "16px" }}>
              Recommended Equipment
            </h2>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {relatedArticles.map((article) => (
                <Link key={article.slug} href={`/best/${article.slug}`} style={{ fontFamily: "var(--font-lato)", fontSize: "13px", fontWeight: 700, color: "#D0021B", textDecoration: "none", padding: "8px 16px", border: "1px solid #D0021B" }}>
                  {article.category} →
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Right sidebar */}
        <aside className="guide-right-sidebar" style={{ width: "220px", flexShrink: 0, position: "sticky", top: "80px", alignSelf: "flex-start", border: "1px solid #E0E0E0", padding: "16px" }}>
          <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#D0021B", marginBottom: "16px" }}>
            MORE GUIDES
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {otherGuides.map((g) => (
              <li key={g.slug} style={{ marginBottom: "12px" }}>
                <Link href={`/guides/${g.slug}`} style={{ fontFamily: "var(--font-lato)", fontSize: "13px", color: "#1A1A1A", textDecoration: "none", lineHeight: 1.5, display: "block", padding: "8px 0", borderBottom: "1px solid #E0E0E0" }}>
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <style>{`
        @media (max-width: 1200px) { .guide-right-sidebar { display: none; } }
        @media (max-width: 1024px) { .guide-left-sidebar { display: none; } }
        @media (max-width: 700px) { .process-flow { flex-direction: column; align-items: flex-start !important; } }
      `}</style>
    </div>
  );
}
