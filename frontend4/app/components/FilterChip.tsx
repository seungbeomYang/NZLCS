"use client";

export default function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "border px-4 py-2.5 type-eyebrow transition-colors " +
        (active
          ? "border-border bg-surface text-foreground"
          : "border-transparent text-muted hover:text-foreground")
      }
    >
      {label}
    </button>
  );
}
