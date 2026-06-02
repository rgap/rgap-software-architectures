import { useMemo, useState } from "react";
import { PRODUCTS } from "./products.js";
import { formatPrice } from "./format.js";

export function CatalogList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
        Filter
        <input
          style={{ display: "block", width: "100%", maxWidth: 320, marginTop: "0.25rem" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or category…"
        />
      </label>
      <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
        {filtered.map((p) => (
          <li key={p.id} style={{ marginBottom: "0.5rem" }}>
            <strong>{p.name}</strong>{" "}
            <span style={{ color: "#555" }}>({p.category})</span> — {formatPrice(p.price)}
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p style={{ color: "#666" }}>No matches.</p>}
    </>
  );
}
