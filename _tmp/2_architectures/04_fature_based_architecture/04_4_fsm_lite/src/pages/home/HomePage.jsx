import React from "react";
import { Shell } from "../../shared/ui/Shell.jsx";
import { AuthPanel, useAuth } from "../../features/auth/index.js";
import { CatalogPanel } from "../../features/catalog/index.js";

export function HomePage() {
  const { session, login, logout, error } = useAuth();

  return (
    <Shell title="FSM lite — shop">
      <AuthPanel session={session} error={error} onLogin={login} onLogout={logout} />
      <CatalogPanel session={session} />
    </Shell>
  );
}
