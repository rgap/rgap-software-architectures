export const DEMO = { username: "demo", password: "demo" };

export function validateCredentials(username, password) {
  if (username === DEMO.username && password === DEMO.password) {
    return { ok: true, session: { username: DEMO.username } };
  }
  return { ok: false, error: "Invalid username or password" };
}
