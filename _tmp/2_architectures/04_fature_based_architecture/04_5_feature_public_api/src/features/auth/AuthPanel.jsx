import { LoginForm } from "./LoginForm.jsx";

const panelStyle = {
  border: "1px solid #ddd",
  borderRadius: 8,
  background: "#fafafa",
  padding: "1rem",
  marginBottom: "1rem",
};

export function AuthPanel({ session, onLogin, onLogout }) {
  return (
    <section style={panelStyle} aria-labelledby="auth-heading">
      <h2 id="auth-heading" style={{ marginTop: 0, fontSize: "1.1rem" }}>
        Account
      </h2>
      {session ? (
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <p style={{ margin: 0 }}>Signed in as <strong>{session.username}</strong></p>
          <button type="button" onClick={onLogout}>
            Sign out
          </button>
        </div>
      ) : (
        <LoginForm onLogin={onLogin} />
      )}
    </section>
  );
}
