import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { Nav } from "./components/Nav.jsx";

export function RootLayout() {
  const { session } = useAuthContext();
  const [page, setPage] = useState("home");

  return (
    <div style={{ fontFamily: "system-ui", maxWidth: 520, margin: "0 auto", padding: "1.5rem" }}>
      <h1 style={{ marginTop: 0 }}>03_3a -- Route-first + shared services</h1>
      <Nav page={page} setPage={setPage} loggedIn={!!session} />
      <hr style={{ margin: "1rem 0" }} />
      <Outlet page={page} />
    </div>
  );
}

function Outlet({ page }) {
  switch (page) {
    case "login":
      return <LazyRoute load={() => import("../login/index.jsx")} />;
    case "home":
      return <LazyRoute load={() => import("../home/index.jsx")} />;
    default:
      return <LazyRoute load={() => import("../not-found/index.jsx")} />;
  }
}

/**
 * Bare-bones lazy loader -- in production use React.lazy + Suspense or a real router.
 */
function LazyRoute({ load }) {
  const [Mod, setMod] = useState(null);

  if (!Mod) {
    load().then((m) => setMod(() => m.default || m.Route));
    return <p>Loading...</p>;
  }

  return <Mod />;
}
