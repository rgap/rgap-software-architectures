import { CatalogList } from "./CatalogList.jsx";

export function CatalogPanel({ session }) {
  if (!session) {
    return (
      <section>
        <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Catalog</h2>
        <p style={{ marginTop: 0, color: "#666" }}>Sign in to browse the catalog.</p>
      </section>
    );
  }

  return (
    <section>
      <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Catalog</h2>
      <CatalogList />
    </section>
  );
}
