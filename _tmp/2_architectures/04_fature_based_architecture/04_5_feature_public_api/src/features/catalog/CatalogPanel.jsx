import { CatalogList } from "./CatalogList.jsx";

const panelStyle = {
  border: "1px solid #ddd",
  borderRadius: 8,
  background: "#fafafa",
  padding: "1rem",
};

export function CatalogPanel({ session }) {
  return (
    <section style={panelStyle} aria-labelledby="catalog-heading">
      <h2 id="catalog-heading" style={{ marginTop: 0, fontSize: "1.1rem" }}>
        Catalog
      </h2>
      {session ? (
        <CatalogList />
      ) : (
        <p style={{ margin: 0, color: "#555" }}>Sign in to browse the product catalog.</p>
      )}
    </section>
  );
}
