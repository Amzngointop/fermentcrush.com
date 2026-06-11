import type { Metadata } from "next";
import Link from "next/link";
import guides from "@/data/guides";
import articles from "@/data/articles";

export const metadata: Metadata = {
  title: "Fermentation Troubleshooting Guide: Fix Every Problem | FermentCrush",
  description:
    "Something went wrong with your ferment? This guide covers every common problem — from kahm yeast to mushy vegetables — and tells you exactly what to do.",
  openGraph: { type: "article" },
  twitter: { card: "summary_large_image" },
};

const guide = guides.find((g) => g.slug === "fermentation-troubleshooting-guide")!;
const otherGuides = guides.filter((g) => g.slug !== "fermentation-troubleshooting-guide");
const relatedSlugs = ["best-mason-jar-lids", "best-kitchen-scales", "best-airtight-food-storage"];
const relatedArticles = relatedSlugs
  .map((s) => articles.find((a) => a.slug === s))
  .filter((a): a is NonNullable<typeof a> => !!a);

const D = "1px dashed #d4d4d4";

export default function TroubleshootingGuidePage() {
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
              { id: "safe-vs-unsafe", label: "Safe vs. Unsafe" },
              { id: "not-bubbling", label: "Not Bubbling" },
              { id: "salt-issues", label: "Salt Problems" },
              { id: "mushy", label: "Mushy Texture" },
              { id: "off-smells", label: "Off Smells" },
              { id: "sourness", label: "Too Sour / Not Sour" },
              { id: "throw-out", label: "When to Discard" },
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

          {/* Decision Tree: Safe or Not? */}
          <div style={{ border: D, padding: "24px", marginBottom: "48px" }}>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", marginBottom: "20px" }}>
              Decision Tree: Safe or Not?
            </p>
            {/* Root node */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }} className="decision-tree">
              {/* Level 1 */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <div style={{ backgroundColor: "#1A1A1A", color: "#fff", padding: "8px 14px", fontFamily: "var(--font-lato)", fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap" }}>
                  Is there visible growth on the surface?
                </div>
              </div>
              <div style={{ display: "flex", gap: "24px", marginLeft: "16px", paddingLeft: "16px", borderLeft: "2px solid #d4d4d4", marginBottom: "12px" }}>
                {/* YES branch */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, color: "#D0021B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>YES →</p>
                  <div style={{ border: D, padding: "10px 14px", marginBottom: "8px" }}>
                    <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", fontWeight: 600, color: "#1A1A1A", marginBottom: "4px" }}>Is it flat, white, and film-like?</p>
                    <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>YES →</p>
                        <div style={{ backgroundColor: "#f7fff7", border: "1px solid #d4d4d4", padding: "8px 10px" }}>
                          <p style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#444", margin: 0 }}>
                            <strong>Kahm yeast.</strong> Harmless. Skim it off, ensure vegetables are submerged. Continue fermenting.
                          </p>
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, color: "#D0021B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>NO →</p>
                        <div style={{ backgroundColor: "#fff8f8", border: "1px solid #D0021B", padding: "8px 10px" }}>
                          <p style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#444", margin: 0 }}>
                            <strong>Fuzzy, colored, or raised growth = mold.</strong> Discard the entire batch. Do not salvage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* NO branch */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>NO →</p>
                  <div style={{ border: D, padding: "10px 14px", marginBottom: "8px" }}>
                    <p style={{ fontFamily: "var(--font-lato)", fontSize: "13px", fontWeight: 600, color: "#1A1A1A", marginBottom: "4px" }}>Does it smell sour and/or tangy?</p>
                    <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>YES →</p>
                        <div style={{ backgroundColor: "#f7fff7", border: "1px solid #d4d4d4", padding: "8px 10px" }}>
                          <p style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#444", margin: 0 }}>
                            <strong>Normal fermentation.</strong> Lactic acid smell is correct. Taste and continue.
                          </p>
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "var(--font-lato)", fontSize: "11px", fontWeight: 700, color: "#D0021B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>NO →</p>
                        <div style={{ border: D, padding: "8px 10px" }}>
                          <p style={{ fontFamily: "var(--font-lato)", fontSize: "12px", color: "#444", margin: 0 }}>
                            Does it smell rotten, putrid, or like rotting meat? <strong>Discard.</strong> Otherwise — still fermenting; give it more time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section id="safe-vs-unsafe" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                How to Tell Safe from Unsafe: Mold vs. Kahm Yeast
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              The most common source of anxiety in home fermentation is surface growth — and most of the time, it&apos;s not the dangerous kind. Kahm yeast is a flat, white, sometimes slightly wrinkled film that forms on the surface of brine when trace oxygen contacts it. It looks alarming but is entirely harmless. The brine and vegetables beneath kahm yeast are safe. Simply skim the film off with a clean spoon and address the root cause: vegetables above the brine line, insufficient weight pressing them down, or headspace allowing oxygen contact.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              True mold is fundamentally different. Mold grows in three dimensions — it&apos;s fuzzy, raised, and filamentous rather than flat. It may be white, but it may also be green, black, pink, or orange. Any fuzzy growth, regardless of color, is mold. Unlike kahm yeast, mold produces mycotoxins that penetrate through the brine and into the ferment itself. You cannot salvage a moldy ferment by removing the surface layer — the mycotoxins have already dispersed. Discard the entire batch, wash your equipment thoroughly with hot soapy water, and start fresh.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Per the{" "}
              <a href="https://nchfp.uga.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#D0021B", textDecoration: "underline" }}>USDA National Center for Home Food Preservation</a>,
              mold growth in fermented vegetables always warrants discarding the entire batch. There are no exceptions to this rule, even if the mold appears only on the surface and the vegetables look fine underneath.
            </p>
            {/* Tip 1 */}
            <div style={{ borderLeft: "4px solid #D0021B", padding: "16px 20px", backgroundColor: "#FFF8F8", margin: "24px 0" }}>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#1A1A1A", lineHeight: 1.7 }}>
                <strong>Tip:</strong> The single most effective mold prevention measure is keeping all vegetables completely submerged below the brine line at all times. A fermentation weight (glass or ceramic) eliminates the guesswork. Without submersion, oxygen reaches the vegetables and mold becomes likely within days.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="not-bubbling" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                My Ferment Isn&apos;t Bubbling
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Visible bubbling is one sign of active fermentation, but its absence does not mean fermentation has failed. Many variables affect whether CO2 production is visible: temperature, salt concentration, jar seal tightness, vegetable sugar content, and the age of your salt. A ferment that looks still may be fermenting slowly but perfectly adequately — taste it, and the developing sourness will tell you far more than visual bubble activity.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Too cold:</strong> Lacto-fermentation slows significantly below 60°F and nearly stops below 55°F. If your kitchen runs cool, move your ferment to a warmer spot — on top of the refrigerator, near a heating vent, or in a small insulated cooler with a heat mat. The ideal temperature range is 65–75°F.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Too much salt:</strong> Salt concentrations above 3% significantly inhibit even salt-tolerant lacto-bacteria. If you suspect over-salting, taste the brine — it should taste pleasantly salty, not overwhelming. Future batches: use a kitchen scale and verify your ratio (2% salt by vegetable weight is standard). For your current batch, add additional unchlorinated water to dilute the brine concentration.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Iodized salt:</strong> Iodine is antimicrobial — even small quantities inhibit lactic acid bacteria. Check your salt packaging: if it says &ldquo;iodized,&rdquo; this is likely your issue. Unfortunately there is no remedy for an iodized salt ferment already in progress. Future batches: use sea salt, kosher salt, or pickling salt labeled &ldquo;non-iodized.&rdquo;
            </p>
          </section>

          {/* Section 3 */}
          <section id="salt-issues" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                Vegetables Are Too Salty or Not Salty Enough
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Salt calibration is the most common source of failed ferments, and the fix is the same in both directions: use a kitchen scale and measure by weight, not volume. Volume measurements of salt are notoriously inaccurate because different salt crystals pack differently — a teaspoon of fine sea salt contains roughly twice the salt of a teaspoon of kosher salt. The only reliable method is weight. The standard for most vegetable ferments is 2% salt by total vegetable weight.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Too salty result:</strong> Your ferment has completed successfully but tastes unpleasantly salty when eaten. Rinse individual portions before serving to reduce surface salt. Alternatively, use the ferment primarily in cooked dishes (stir-fries, soups, rice dishes) where the salt distributes into a larger volume of food. Future batches: use 1.5–2% salt and taste the brine before packing.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Not salty enough result:</strong> Fermentation proceeded too rapidly, vegetables are soft or mushy, and the flavor may be flat or slightly off. This is harder to salvage. You can try adding additional brine (1 teaspoon salt per cup of water, dissolved) to bring the brine closer to a safe concentration, but the texture cannot be recovered. Future batches: measure precisely and err toward the higher end of the 2% range in warm-weather fermentation.
            </p>
          </section>

          {/* Section 4 */}
          <section id="mushy" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                Mushy Texture: Causes and Fixes
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Mushy fermented vegetables are the result of excessive enzymatic activity breaking down pectin in cell walls. The main culprits are: fermentation temperature above 75°F (pectinase enzymes are significantly more active at higher temperatures), salt concentration below 1.5% (insufficient osmotic protection of cell walls), and fermentation duration that exceeds the texture window for your salt-temperature combination. Old or damaged vegetables also contribute — cellular damage before fermentation means the cells have already begun breaking down before your ferment starts.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              There is no reliable way to rescue already-mushy vegetables. The pectin degradation is irreversible. Use mushy ferments in cooked applications — fermented vegetable soups, stir-fries, and fermented vegetable sauces all benefit from soft texture and complex fermented flavor. Prevention is the only fix: accurate salt ratios, temperatures below 75°F, and high-quality, fresh vegetables.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              A traditional technique for maintaining crispness in pickles and sauerkraut is adding tannin-rich materials — grape leaves, oak leaves, horseradish leaves, or black tea — to the jar. Tannins inhibit pectinase activity. Add 2–3 fresh leaves to the bottom of the jar before packing vegetables. This is particularly useful in warm-weather fermentation where enzyme activity is harder to control through temperature alone.
            </p>
            {/* Tip 2 */}
            <div style={{ borderLeft: "4px solid #D0021B", padding: "16px 20px", backgroundColor: "#FFF8F8", margin: "24px 0" }}>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "#1A1A1A", lineHeight: 1.7 }}>
                <strong>Note:</strong> According to{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4290080/" target="_blank" rel="noopener noreferrer" style={{ color: "#D0021B", textDecoration: "underline" }}>NIH research on fermented food microbiology</a>,
                fermentation at 65–68°F (18–20°C) consistently produces the best texture outcomes for lacto-fermented vegetables — firmer than warm ferments with comparable probiotic activity.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="off-smells" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                Off Smells: What&apos;s Normal, What&apos;s Not
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Normal fermentation smells:</strong> Sour, tangy, lactic, yeasty, slightly vinegary, sulfurous (especially with cabbage and cruciferous vegetables — this is normal and fades), funky but not unpleasant. A properly fermenting jar of sauerkraut smells like a sour, complex, lightly briny version of the cabbage you started with. Your nose will calibrate quickly — after two or three batches, normal fermentation smell becomes immediately recognizable.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Abnormal fermentation smells:</strong> Putrid (rotting meat or fish that shouldn&apos;t be there), strongly alcoholic beyond a faint background note, chemically off (nail polish remover in vegetables — acetone — indicates yeast-driven fermentation overwhelming the bacterial fermentation), or simply &ldquo;wrong&rdquo; in a way that makes you pull back from the jar. Trust your instincts. If the smell makes you recoil, don&apos;t taste it.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              Sulfur smell from cabbage ferments is the most common &ldquo;is this normal?&rdquo; moment for beginners. Yes, it&apos;s completely normal. Cabbage contains glucosinolates that break down into sulfur compounds during fermentation. The smell is strong and unpleasant but not a sign of spoilage. It dissipates as fermentation progresses and is nearly absent in fully fermented sauerkraut.
            </p>
          </section>

          {/* Section 6 */}
          <section id="sourness" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                Ferment Is Too Sour or Not Sour Enough
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Too sour:</strong> Fermentation continued beyond your preferred acidity level. The fix going forward is simple: taste earlier and refrigerate sooner. Refrigeration slows fermentation dramatically — it doesn&apos;t stop it, but a ferment you refrigerate at the right moment will continue developing slowly for weeks. For a batch that&apos;s already too sour to eat as a side dish, redirect it to cooking. Overly sour sauerkraut is excellent in soup bases, braises, and grain dishes where the acid brightens and balances richly flavored foods.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Not sour enough:</strong> Fermentation was too cool, too short, or too salty. If your ferment is still at room temperature, simply allow more time — taste daily until the sourness reaches your preference. If it&apos;s already refrigerated, bring it back to room temperature for 1–2 days to reactivate fermentation before returning to the cold. Adding a small amount of a previously successful fermented brine (as a starter culture) can jumpstart sluggish fermentation, though this isn&apos;t necessary if temperature and salt ratios are correct.
            </p>
          </section>

          {/* Section 7 */}
          <section id="throw-out" style={{ marginBottom: "48px" }}>
            <div style={{ borderTop: "3px solid #1A1A1A", paddingTop: "16px", marginBottom: "20px", marginTop: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                When to Throw It Out (and When Not To)
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Always discard:</strong> Any batch with fuzzy, three-dimensional mold growth (any color). Any batch with a putrid or rotting smell that doesn&apos;t resemble any kind of sour food smell. Any batch where vegetables are brown, pink, or black in a way that isn&apos;t explained by the natural pigments of the vegetables used. Any batch that has been left unrefrigerated for an extended period after it was already fully fermented (weeks at room temperature after the flavor was finished).
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              <strong>Do not discard:</strong> Kahm yeast (flat white film — skim and continue). Strong sulfur smell in the first 3–4 days of cabbage fermentation. Brine that has turned cloudy (this is normal — lactic acid bacteria and dead yeast cells create cloudiness, which is a sign of healthy fermentation). Color changes to red or purple in red cabbage or beet ferments. Brine overflow (gas pressure — normal in early active fermentation). Soft spots in a batch that is otherwise intact, intact brine line, and good smell.
            </p>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: "17px", lineHeight: 1.7, color: "#333333", marginBottom: "16px" }}>
              When in doubt, use the two-sense test: smell first, then taste a small amount. Lacto-fermented vegetables that are safe will smell sour and taste sour — both in a pleasant, food-like way. The acidic environment created by a successful ferment is its own safety mechanism. If it smells like food you&apos;d want to eat, it almost certainly is.
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
      `}</style>
    </div>
  );
}
