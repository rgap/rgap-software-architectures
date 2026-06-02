import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

/**
 * Entire UI, state, and helpers live in this single module — intentional for demo.
 * Auth + catalog are simulated in memory (no network).
 */

const DEMO = { username: "demo", password: "demo" };

const CATALOG = [
  { id: "p1", name: "Alpine Daypack", category: "Gear", price: 89 },
  { id: "p2", name: "Trail Map: Northern Ridge", category: "Maps", price: 14 },
  { id: "p3", name: "Insulated Bottle 750ml", category: "Gear", price: 32 },
  { id: "p4", name: "Field Notes — Weather", category: "Books", price: 22 },
  { id: "p5", name: "Merino Base Layer", category: "Apparel", price: 64 },
];

function formatPrice(n) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function App() {
  const [session, setSession] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATALOG;
    return CATALOG.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  function onLogin(e) {
    e.preventDefault();
    if (username === DEMO.username && password === DEMO.password) {
      setSession({ displayName: "Demo explorer" });
      setAuthError("");
      setPassword("");
    } else {
      setAuthError("Unknown username or password.");
    }
  }

  function onLogout() {
    setSession(null);
    setQuery("");
  }

  return (
    <main style={{ fontFamily: "system-ui", padding: "1.5rem", maxWidth: 520 }}>
      <h1 style={{ marginTop: 0 }}>00 — Single-file monolith</h1>
      <p style={{ color: "#444" }}>
        Everything lives in <code>main.jsx</code>: auth flow, catalog list, and helpers.
      </p>

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
          <form onSubmit={onLogin} style={{ display: "grid", gap: "0.5rem", maxWidth: 280 }}>
            <label style={{ display: "grid", gap: "0.25rem", fontSize: "0.9rem" }}>
              Username
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </label>
            <label style={{ display: "grid", gap: "0.25rem", fontSize: "0.9rem" }}>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </label>
            {authError ? (
              <p role="alert" style={{ color: "#b00020", margin: 0, fontSize: "0.9rem" }}>
                {authError}
              </p>
            ) : null}
            <button type="submit">Sign in</button>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>
              Demo account: <code>demo</code> / <code>demo</code>
            </p>
          </form>
        ) : (
          <div>
            <p style={{ marginTop: 0 }}>
              Signed in as <strong>{session.displayName}</strong>
            </p>
            <button type="button" onClick={onLogout}>
              Sign out
            </button>
          </div>
        )}
      </section>

      <section>
        <h2 style={{ fontSize: "1.1rem" }}>Catalog</h2>
        {!session ? (
          <p style={{ color: "#666" }}>Sign in to browse the full catalog.</p>
        ) : (
          <>
            <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
              Filter
              <input
                style={{ display: "block", width: "100%", maxWidth: 320, marginTop: "0.25rem" }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or category…"
              />
            </label>
            <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
              {filtered.map((item) => (
                <li key={item.id} style={{ marginBottom: "0.5rem" }}>
                  <strong>{item.name}</strong>{" "}
                  <span style={{ color: "#555" }}>({item.category})</span> —{" "}
                  {formatPrice(item.price)}
                </li>
              ))}
            </ul>
            {filtered.length === 0 ? (
              <p style={{ color: "#666" }}>No matches.</p>
            ) : null}
          </>
        )}
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
