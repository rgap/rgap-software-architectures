export function Shell({ title, children }) {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: "1.5rem",
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginTop: 0 }}>{title}</h1>
      {children}
    </div>
  );
}
