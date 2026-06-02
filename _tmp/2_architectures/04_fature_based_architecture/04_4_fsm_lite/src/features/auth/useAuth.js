import { useState, useCallback } from "react";
import { validateCredentials } from "./credentials.js";

export function useAuth() {
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);

  const login = useCallback((username, password) => {
    const result = validateCredentials(username, password);
    if (result.ok) {
      setSession(result.session);
      setError(null);
    } else {
      setError(result.error);
    }
  }, []);

  const logout = useCallback(() => {
    setSession(null);
    setError(null);
  }, []);

  return { session, login, logout, error };
}
