import { useState } from "react";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { RootLayout } from "./routes/root/index.jsx";

/**
 * Minimal "router" -- no library, just state-based page switching.
 * Replace with React Router / TanStack Router in a real app.
 */
const ROUTES = {
  home: () => import("./routes/home/index.jsx"),
  login: () => import("./routes/login/index.jsx"),
  notFound: () => import("./routes/not-found/index.jsx"),
};

export function Router() {
  return (
    <AuthProvider>
      <RootLayout routes={ROUTES} />
    </AuthProvider>
  );
}
