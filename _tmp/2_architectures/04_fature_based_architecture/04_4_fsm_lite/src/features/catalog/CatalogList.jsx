import React from "react";
import { PRODUCTS } from "../../entities/product/products.js";
import { formatPrice } from "../../entities/product/format.js";
import { useCatalogFilter } from "./useCatalogFilter.js";

export function CatalogList() {
  const { query, setQuery, filtered } = useCatalogFilter(PRODUCTS);

  return (
    <div>
      <div style={{ marginBottom: "0.75rem" }}>
        <label htmlFor="catalog-filter" style={{ display: "block", marginBottom: "0.25rem" }}>
          Search
        </label>
        <input
          id="catalog-filter"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by name or category"
          style={{ width: "100%", maxWidth: "320px", boxSizing: "border-box" }}
        />
      </div>
      <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
        {filtered.map((p) => (
          <li key={p.id} style={{ marginBottom: "0.35rem" }}>
            <strong>{p.name}</strong>{" "}
            <span style={{ color: "#666" }}>{p.category}</span>
            {" — "}
            {formatPrice(p.price)}
          </li>
        ))}
      </ul>
    </div>
  );
}
