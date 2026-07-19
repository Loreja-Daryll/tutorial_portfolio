export default function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`text-[11px] md:text-xs uppercase tracking-[0.2em] text-muted font-medium ${className}`}
    >
      {children}
    </p>
  );
}
