import React from "react";
import { LoginForm } from "./LoginForm.jsx";

const sectionStyle = {
  border: "1px solid #ddd",
  borderRadius: 8,
  background: "#fafafa",
  padding: "1rem",
  marginBottom: "1rem",
};

export function AuthPanel({ session, error, onLogin, onLogout }) {
  return (
    <section style={sectionStyle} aria-labelledby="auth-heading">
      <h2 id="auth-heading" style={{ marginTop: 0, fontSize: "1.1rem" }}>
        Account
      </h2>
      {session ? (
        <div>
          <p style={{ margin: "0 0 0.75rem" }}>
            Signed in as <strong>{session.username}</strong>
          </p>
          <button type="button" onClick={onLogout}>
            Sign out
          </button>
        </div>
      ) : (
        <LoginForm onLogin={onLogin} error={error} />
      )}
    </section>
  );
}
