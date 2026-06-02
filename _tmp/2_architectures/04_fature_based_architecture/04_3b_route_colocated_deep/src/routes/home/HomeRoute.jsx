import { useAuth } from "./auth/useAuth.js";
import { AuthSection } from "./auth/AuthSection.jsx";
import { CatalogSection } from "./catalog/CatalogSection.jsx";

export function HomeRoute() {
  const { session, login, logout } = useAuth();

  return (
    <main style={{ fontFamily: "system-ui", padding: "1.5rem", maxWidth: 520 }}>
      <h1 style={{ marginTop: 0 }}>03_3b — Route-colocated deep nesting</h1>
      <p style={{ color: "#444" }}>
        No global <code>features/</code> — the home route owns its sections.
      </p>
      <AuthSection session={session} onLogin={login} onLogout={logout} />
      <CatalogSection session={session} />
    </main>
  );
}
