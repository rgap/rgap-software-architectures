import React from "react";

export function Shell({ title, children }) {
  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: "1.5rem",
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginTop: 0, fontSize: "1.5rem" }}>{title}</h1>
      {children}
    </main>
  );
}
