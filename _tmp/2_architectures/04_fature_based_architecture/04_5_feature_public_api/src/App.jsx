import { Shell } from "@/shared/ui/Shell.jsx";
import { AuthPanel, useAuth } from "@/features/auth";
import { CatalogPanel } from "@/features/catalog";

export function App() {
  const { session, login, logout } = useAuth();

  return (
    <Shell>
      <AuthPanel session={session} onLogin={login} onLogout={logout} />
      <CatalogPanel session={session} />
    </Shell>
  );
}
