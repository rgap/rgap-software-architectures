import { useMemo, useState } from "react";
import { getProducts } from "../services/catalog.js";

export function useCatalogFilter() {
  const [query, setQuery] = useState("");
  const products = getProducts();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [query, products]);

  return { query, setQuery, filtered };
}
