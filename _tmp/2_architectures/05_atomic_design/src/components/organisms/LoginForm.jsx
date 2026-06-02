import { useState } from "react";
import { Button } from "../atoms/Button.jsx";
import { Text } from "../atoms/Text.jsx";
import { FormField } from "../molecules/FormField.jsx";

export function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const err = onLogin(username, password);
    if (err) setError(err);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.5rem", maxWidth: 280 }}>
      <FormField label="Username" value={username} onChange={setUsername} autoComplete="username" />
      <FormField label="Password" value={password} onChange={setPassword} type="password" autoComplete="current-password" />
      {error && <Text variant="error">{error}</Text>}
      <Button type="submit">Sign in</Button>
      <Text variant="hint">
        Demo: <code>demo</code> / <code>demo</code>
      </Text>
    </form>
  );
}
