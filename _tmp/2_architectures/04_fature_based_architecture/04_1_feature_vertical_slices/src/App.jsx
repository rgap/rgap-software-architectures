import { Shell } from "./shared/layout/Shell.jsx";
import { AuthPanel } from "./features/auth/index.js";
import { CatalogPanel } from "./features/catalog/index.js";
import { useAuth } from "./features/auth/index.js";

export function App() {
  const { session, login, logout } = useAuth();

  return (
    <Shell title="03_1 — Vertical feature slices">
      <AuthPanel session={session} onLogin={login} onLogout={logout} />
      <CatalogPanel session={session} />
    </Shell>
  );
}
