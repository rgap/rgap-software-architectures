import { useState } from "react";

export function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const err = onLogin(username, password);
    if (err) setError(err);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.5rem", maxWidth: 280 }}>
      <label style={{ display: "grid", gap: "0.25rem", fontSize: "0.9rem" }}>
        Username
        <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
      </label>
      <label style={{ display: "grid", gap: "0.25rem", fontSize: "0.9rem" }}>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
      </label>
      {error && (
        <p role="alert" style={{ color: "#b00020", margin: 0, fontSize: "0.9rem" }}>
          {error}
        </p>
      )}
      <button type="submit">Sign in</button>
      <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>
        Demo: <code>demo</code> / <code>demo</code>
      </p>
    </form>
  );
}
