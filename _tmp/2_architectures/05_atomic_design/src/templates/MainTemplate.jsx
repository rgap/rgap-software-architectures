export function MainTemplate({ title, children }) {
  return (
    <main style={{ fontFamily: "system-ui", padding: "1.5rem", maxWidth: 520 }}>
      <h1 style={{ marginTop: 0 }}>{title}</h1>
      <p style={{ marginTop: "0.5rem", color: "#444" }}>
        Atoms, molecules, organisms — this template wires layout and page content.
      </p>
      {children}
    </main>
  );
}
