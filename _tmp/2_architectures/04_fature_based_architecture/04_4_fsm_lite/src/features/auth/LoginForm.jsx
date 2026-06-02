import React, { useState } from "react";

export function LoginForm({ onLogin, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: "0.5rem",
        maxWidth: "280px",
      }}
    >
      <div>
        <label htmlFor="login-username" style={{ display: "block", marginBottom: "0.25rem" }}>
          Username
        </label>
        <input
          id="login-username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
      </div>
      <div>
        <label htmlFor="login-password" style={{ display: "block", marginBottom: "0.25rem" }}>
          Password
        </label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      {error ? (
        <p style={{ color: "#b00020", margin: 0, fontSize: "0.875rem" }} role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit">Sign in</button>
      <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>
        Demo: username <strong>demo</strong>, password <strong>demo</strong>
      </p>
    </form>
  );
}
