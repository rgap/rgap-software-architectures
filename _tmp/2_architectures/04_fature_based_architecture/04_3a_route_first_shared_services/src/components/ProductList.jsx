import { formatPrice } from "../lib/format.js";

export function ProductList({ products }) {
  return (
    <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
      {products.map((p) => (
        <li key={p.id} style={{ marginBottom: "0.5rem" }}>
          <strong>{p.name}</strong>{" "}
          <span style={{ color: "#555" }}>({p.category})</span> -- {formatPrice(p.price)}
        </li>
      ))}
    </ul>
  );
}
