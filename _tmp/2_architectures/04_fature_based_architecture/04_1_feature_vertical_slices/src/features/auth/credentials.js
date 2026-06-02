const DEMO = { username: "demo", password: "demo" };

export function validateCredentials(username, password) {
  if (username === DEMO.username && password === DEMO.password) {
    return { ok: true, session: { displayName: "Demo explorer" } };
  }
  return { ok: false, error: "Unknown username or password." };
}
