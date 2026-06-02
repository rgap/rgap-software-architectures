import { Input } from "../atoms/Input.jsx";
import { ProductItem } from "../molecules/ProductItem.jsx";

export function CatalogList({ products, query, onQueryChange }) {
  return (
    <>
      <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
        Filter
        <Input
          value={query}
          onChange={onQueryChange}
          placeholder="Search by name or category…"
          style={{ display: "block", width: "100%", maxWidth: 320, marginTop: "0.25rem" }}
        />
      </label>
      <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
        {products.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </ul>
      {products.length === 0 && <p style={{ color: "#666" }}>No matches.</p>}
    </>
  );
}
