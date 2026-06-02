import { useCallback, useState } from "react";
import { validateCredentials } from "../services/auth.js";

export function useAuth() {
  const [session, setSession] = useState(null);

  const login = useCallback((username, password) => {
    const result = validateCredentials(username, password);
    if (result.ok) {
      setSession(result.session);
      return null;
    }
    return result.error;
  }, []);

  const logout = useCallback(() => setSession(null), []);

  return { session, login, logout };
}
