import { useMemo } from "react";
import { PRODUCTS } from "./products.js";

function matchesQuery(product, q) {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  return (
    product.name.toLowerCase().includes(s) ||
    product.category.toLowerCase().includes(s) ||
    String(product.price).includes(s)
  );
}

export function useCatalogFilter(query) {
  return useMemo(
    () => PRODUCTS.filter((p) => matchesQuery(p, query)),
    [query]
  );
}
