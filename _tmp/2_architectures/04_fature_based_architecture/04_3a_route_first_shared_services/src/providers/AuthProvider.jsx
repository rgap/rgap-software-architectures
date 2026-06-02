import { useCallback, useState } from "react";
import { AuthContext } from "../contexts/AuthContext.js";
import { validateCredentials } from "../services/auth.js";

export function AuthProvider({ children }) {
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

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
