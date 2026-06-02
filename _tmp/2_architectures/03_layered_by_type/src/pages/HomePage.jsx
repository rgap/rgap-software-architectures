import { useAuth } from "../hooks/useAuth.js";
import { LoginForm } from "../components/LoginForm.jsx";
import { CatalogList } from "../components/CatalogList.jsx";

export function HomePage() {
  const { session, login, logout } = useAuth();

  return (
    <main style={{ fontFamily: "system-ui", padding: "1.5rem", maxWidth: 520 }}>
      <h1 style={{ marginTop: 0 }}>02 — Layered by technical type</h1>
      <p style={{ color: "#444" }}>
        <code>components/</code>, <code>hooks/</code>, <code>services/</code>,{" "}
        <code>utils/</code>, <code>pages/</code>.
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
          <CatalogList />
        )}
      </section>
    </main>
  );
}
