import { useMemo, useState } from "react";
import { PRODUCTS } from "./products.js";

export function useCatalogFilter() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return { query, setQuery, filtered };
}
