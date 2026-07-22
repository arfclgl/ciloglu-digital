type NetworkPatternProps = {
  className?: string;
};

export default function NetworkPattern({ className = "" }: NetworkPatternProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <pattern
          id="cd-network-grid"
          x="0"
          y="0"
          width="72"
          height="72"
          patternUnits="userSpaceOnUse"
        >
          <line x1="6" y1="6" x2="42" y2="6" stroke="currentColor" strokeWidth="0.75" />
          <line x1="6" y1="6" x2="6" y2="42" stroke="currentColor" strokeWidth="0.75" />
          <line x1="6" y1="6" x2="42" y2="42" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="6" cy="6" r="2.25" fill="currentColor" />
          <circle cx="42" cy="6" r="1.5" fill="currentColor" />
          <circle cx="6" cy="42" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cd-network-grid)" />
    </svg>
  );
}
