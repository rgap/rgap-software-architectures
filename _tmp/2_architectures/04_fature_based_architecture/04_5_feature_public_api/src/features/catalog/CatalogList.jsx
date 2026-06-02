import { useState } from "react";
import { formatPrice } from "./format.js";
import { useCatalogFilter } from "./useCatalogFilter.js";

export function CatalogList() {
  const [filter, setFilter] = useState("");
  const items = useCatalogFilter(filter);

  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <label style={{ display: "block", fontSize: "0.9rem" }}>
        <span style={{ display: "block", marginBottom: "0.35rem" }}>Search catalog</span>
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by name, category, or price"
          style={{ display: "block", width: "100%", boxSizing: "border-box" }}
          aria-label="Filter products"
        />
      </label>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.5rem" }}>
        {items.map((p) => (
          <li
            key={p.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 6,
              padding: "0.5rem 0.75rem",
              display: "flex",
              justifyContent: "space-between",
              gap: "0.75rem",
              alignItems: "baseline",
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: "0.85rem", color: "#555" }}>{p.category}</div>
            </div>
            <span style={{ fontVariantNumeric: "tabular-nums" }}>{formatPrice(p.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
