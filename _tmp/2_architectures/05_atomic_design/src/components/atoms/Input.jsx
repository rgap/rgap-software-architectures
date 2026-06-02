export function Input({ value, onChange, type = "text", placeholder, autoComplete, style }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      style={style}
    />
  );
}
