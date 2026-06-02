import { useAuthContext } from "../../contexts/AuthContext.js";
import { LoginForm } from "../../components/LoginForm.jsx";

export default function LoginRoute() {
  const { session, login } = useAuthContext();

  if (session) {
    return <p>You are already signed in.</p>;
  }

  return (
    <section
      style={{
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fafafa",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Sign in</h2>
      <LoginForm onLogin={login} />
    </section>
  );
}
