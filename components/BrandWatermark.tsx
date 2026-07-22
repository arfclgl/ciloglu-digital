type BrandWatermarkProps = {
  tone?: "accent" | "navy";
  className?: string;
};

export default function BrandWatermark({
  tone = "accent",
  className = "",
}: BrandWatermarkProps) {
  const colorClass = tone === "navy" ? "text-navy" : "text-accent";

  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      fill="none"
      className={`pointer-events-none select-none ${colorClass} ${className}`}
    >
      <path
        d="M8 25L16 18L21 22L32 11"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 11H32V18"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="25" r="1.3" fill="currentColor" />
      <circle cx="16" cy="18" r="1.3" fill="currentColor" />
      <circle cx="21" cy="22" r="1.3" fill="currentColor" />
    </svg>
  );
}
