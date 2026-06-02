import React from "react";
import { CatalogList } from "./CatalogList.jsx";

const sectionStyle = {
  border: "1px solid #ddd",
  borderRadius: 8,
  padding: "1rem",
};

export function CatalogPanel({ session }) {
  return (
    <section style={sectionStyle} aria-labelledby="catalog-heading">
      <h2 id="catalog-heading" style={{ marginTop: 0, fontSize: "1.1rem" }}>
        Catalog
      </h2>
      {session ? (
        <CatalogList />
      ) : (
        <p style={{ margin: 0, color: "#555" }}>Sign in to browse products.</p>
      )}
    </section>
  );
}
