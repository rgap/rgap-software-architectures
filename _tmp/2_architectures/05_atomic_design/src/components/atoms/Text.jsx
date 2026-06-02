const variants = {
  error: { margin: 0, fontSize: "0.9rem", color: "#b00020" },
  hint: { margin: 0, fontSize: "0.8rem", color: "#666" },
  body: { margin: 0 },
};

export function Text({ variant = "body", children }) {
  return <p style={variants[variant]}>{children}</p>;
}
