import { useMemo, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { getProducts, filterProducts } from "../../services/catalog.js";
import { ProductList } from "../../components/ProductList.jsx";

export default function HomeRoute() {
  const { session, logout } = useAuthContext();
  const [query, setQuery] = useState("");
  const products = getProducts();
  const filtered = useMemo(() => filterProducts(products, query), [products, query]);

  return (
    <>
      {session && (
        <p>
          Signed in as <strong>{session.displayName}</strong>{" "}
          <button type="button" onClick={logout} style={{ marginLeft: "0.5rem" }}>
            Sign out
          </button>
        </p>
      )}

      <h2 style={{ fontSize: "1.1rem" }}>Catalog</h2>
      {!session ? (
        <p style={{ color: "#666" }}>Sign in to browse the catalog.</p>
      ) : (
        <>
          <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
            Filter
            <input
              style={{ display: "block", width: "100%", maxWidth: 320, marginTop: "0.25rem" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or category..."
            />
          </label>
          <ProductList products={filtered} />
          {filtered.length === 0 && <p style={{ color: "#666" }}>No matches.</p>}
        </>
      )}
    </>
  );
}
