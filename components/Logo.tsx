export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 36 36"
        className="h-9 w-9 text-moss"
      >
        <rect
          width="36"
          height="36"
          rx="10"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M8 21c5-9 15-9 20 0"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <rect x="13" y="16.2" width="10" height="2.8" rx="1.4" fill="currentColor" />
      </svg>
      <span className="font-serif text-[1.7rem] font-semibold leading-none tracking-tight text-ink">
        Liora
      </span>
    </span>
  );
}
