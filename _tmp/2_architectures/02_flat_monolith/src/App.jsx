import { useState } from "react";
import { LoginForm } from "./LoginForm.jsx";
import { CatalogList } from "./CatalogList.jsx";
import { validateCredentials } from "./auth.js";

export function App() {
  const [session, setSession] = useState(null);

  function onLogin(username, password) {
    const result = validateCredentials(username, password);
    if (result.ok) {
      setSession(result.session);
      return null;
    }
    return result.error;
  }

  function onLogout() {
    setSession(null);
  }

  return (
    <main style={{ fontFamily: "system-ui", padding: "1.5rem", maxWidth: 520 }}>
      <h1 style={{ marginTop: 0 }}>01 — Flat architecture</h1>
      <p style={{ color: "#444" }}>
        Multiple files in one <code>src/</code> folder — no subfolders.
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
          <LoginForm onLogin={onLogin} />
        ) : (
          <div>
            <p style={{ marginTop: 0 }}>
              Signed in as <strong>{session.displayName}</strong>
            </p>
            <button type="button" onClick={onLogout}>Sign out</button>
          </div>
        )}
      </section>

      <section>
        <h2 style={{ fontSize: "1.1rem" }}>Catalog</h2>
        {!session ? (
          <p style={{ color: "#666" }}>Sign in to browse the catalog.</p>
        ) : (
          <CatalogList />
        )}
      </section>
    </main>
  );
}
