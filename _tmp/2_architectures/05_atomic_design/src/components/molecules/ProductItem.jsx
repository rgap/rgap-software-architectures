import { formatPrice } from "../../data/format.js";

export function ProductItem({ product }) {
  return (
    <li style={{ marginBottom: "0.5rem" }}>
      <strong>{product.name}</strong>{" "}
      <span style={{ color: "#555" }}>({product.category})</span> —{" "}
      {formatPrice(product.price)}
    </li>
  );
}
