import { useMemo, useState } from "react";

export function useCatalogFilter(products) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [products, query]);

  return { query, setQuery, filtered };
}
