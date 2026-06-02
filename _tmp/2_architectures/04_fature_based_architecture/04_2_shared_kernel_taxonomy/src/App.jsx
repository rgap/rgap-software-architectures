import { Shell } from "./shared/ui/Shell.jsx";
import { AuthPanel, useAuth } from "./features/auth/index.js";
import { CatalogPanel } from "./features/catalog/index.js";

export function App() {
  const { session, login, logout } = useAuth();

  return (
    <Shell title="03_2 — Shared kernel taxonomy">
      <AuthPanel session={session} onLogin={login} onLogout={logout} />
      <CatalogPanel session={session} />
    </Shell>
  );
}
