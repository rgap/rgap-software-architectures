export function Nav({ page, setPage, loggedIn }) {
  const link = (label, target) => (
    <button
      type="button"
      onClick={() => setPage(target)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        textDecoration: page === target ? "underline" : "none",
        fontWeight: page === target ? 700 : 400,
        fontSize: "0.95rem",
        padding: "0.25rem 0.5rem",
      }}
    >
      {label}
    </button>
  );

  return (
    <nav style={{ display: "flex", gap: "0.25rem" }}>
      {link("Home", "home")}
      {!loggedIn && link("Login", "login")}
    </nav>
  );
}
