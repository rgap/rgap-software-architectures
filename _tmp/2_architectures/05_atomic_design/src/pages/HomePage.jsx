import { useState, useCallback, useMemo } from "react";
import { MainTemplate } from "../templates/MainTemplate.jsx";
import { LoginForm } from "../components/organisms/LoginForm.jsx";
import { CatalogList } from "../components/organisms/CatalogList.jsx";
import { PRODUCTS } from "../data/products.js";

const DEMO = { username: "demo", password: "demo" };

export function HomePage() {
  const [session, setSession] = useState(null);
  const [query, setQuery] = useState("");

  const login = useCallback((username, password) => {
    if (username === DEMO.username && password === DEMO.password) {
      setSession({ displayName: "Demo explorer" });
      return null;
    }
    return "Unknown username or password.";
  }, []);

  const logout = useCallback(() => {
    setSession(null);
    setQuery("");
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <MainTemplate title="04 — Atomic Design">
      <section
        style={{
          marginBottom: "1.25rem",
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: 8,
          background: "#fafafa",
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Session</h2>
        {!session ? (
          <LoginForm onLogin={login} />
        ) : (
          <div>
            <p style={{ marginTop: 0 }}>
              Signed in as <strong>{session.displayName}</strong>
            </p>
            <button type="button" onClick={logout}>Sign out</button>
          </div>
        )}
      </section>

      <section>
        <h2 style={{ fontSize: "1.1rem" }}>Catalog</h2>
        {!session ? (
          <p style={{ color: "#666" }}>Sign in to browse the catalog.</p>
        ) : (
          <CatalogList
            products={filtered}
            query={query}
            onQueryChange={setQuery}
          />
        )}
      </section>
    </MainTemplate>
  );
}
