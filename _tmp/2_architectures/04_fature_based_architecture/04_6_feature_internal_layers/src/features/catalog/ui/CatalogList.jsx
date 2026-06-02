import { useCatalogFilter } from "../model/useCatalogFilter.js";
import { formatPrice } from "../model/format.js";

export function CatalogList() {
  const { query, setQuery, filtered } = useCatalogFilter();

  return (
    <div>
      <label style={{ display: "grid", gap: "0.35rem", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
        Search catalog
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by name or category"
          autoComplete="off"
        />
      </label>
      <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
        {filtered.map((p) => (
          <li key={p.id} style={{ marginBottom: "0.35rem" }}>
            <strong>{p.name}</strong> — {p.category} — {formatPrice(p.price)}
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <p style={{ marginTop: "0.5rem", color: "#666", fontSize: "0.9rem" }}>No matches.</p>
      )}
    </div>
  );
}
