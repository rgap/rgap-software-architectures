export function validateCredentials(username, password) {
  const u = String(username ?? "").trim();
  const p = String(password ?? "");
  if (u === "demo" && p === "demo") {
    return { ok: true, session: { username: "demo" } };
  }
  return { ok: false, error: "Invalid username or password." };
}
