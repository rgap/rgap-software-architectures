export function Shell({ title, children }) {
  return (
    <main style={{ fontFamily: "system-ui", padding: "1.5rem", maxWidth: 520 }}>
      <h1 style={{ marginTop: 0 }}>{title}</h1>
      {children}
    </main>
  );
}
