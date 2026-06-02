import { LoginForm } from "./LoginForm.jsx";

export function AuthSection({ session, onLogin, onLogout }) {
  return (
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
        <LoginForm onLogin={onLogin} />
      ) : (
        <div>
          <p style={{ marginTop: 0 }}>
            Signed in as <strong>{session.displayName}</strong>
          </p>
          <button type="button" onClick={onLogout}>Sign out</button>
        </div>
      )}
    </section>
  );
}
