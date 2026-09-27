export function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={`font-wordmark text-[1.7rem] font-medium leading-none tracking-tight sm:text-[1.9rem] ${
        invert ? "text-ivory" : "text-ink"
      } ${className}`}
    >
      QiLyra
    </span>
  );
}
