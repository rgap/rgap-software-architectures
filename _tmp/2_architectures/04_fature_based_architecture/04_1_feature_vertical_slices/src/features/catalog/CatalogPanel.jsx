import { CatalogList } from "./CatalogList.jsx";

export function CatalogPanel({ session }) {
  return (
    <section>
      <h2 style={{ fontSize: "1.1rem" }}>Catalog</h2>
      {!session ? (
        <p style={{ color: "#666" }}>Sign in to browse the catalog.</p>
      ) : (
        <CatalogList />
      )}
    </section>
  );
}
