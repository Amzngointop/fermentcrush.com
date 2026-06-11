import type { Product } from "@/data/products";

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div style={{ overflowX: "auto", marginBottom: "40px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "var(--font-lato)",
          fontSize: "14px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#1A1A1A" }}>
            {["Product", "Best For", "Key Feature", "Top Con", "Link"].map((h) => (
              <th
                key={h}
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr
              key={p.id}
              style={{
                backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F7F7F7",
                borderBottom: "1px solid #E0E0E0",
              }}
            >
              <td style={{ padding: "12px 16px", fontWeight: 600, color: "#1A1A1A" }}>
                {p.name}
              </td>
              <td style={{ padding: "12px 16px", color: "#666666" }}>{p.badge}</td>
              <td style={{ padding: "12px 16px", color: "#666666" }}>{p.pros[0]}</td>
              <td style={{ padding: "12px 16px", color: "#666666" }}>{p.cons[0]}</td>
              <td style={{ padding: "12px 16px" }}>
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#D0021B",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  View →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
