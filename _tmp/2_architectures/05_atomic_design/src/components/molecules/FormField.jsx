import { Input } from "../atoms/Input.jsx";

export function FormField({ label, value, onChange, type = "text", autoComplete }) {
  return (
    <label style={{ display: "grid", gap: "0.25rem", fontSize: "0.9rem" }}>
      {label}
      <Input value={value} onChange={onChange} type={type} autoComplete={autoComplete} />
    </label>
  );
}
