import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className ?? "h-6 w-6"}
    >
      {children}
    </svg>
  );
}

export function IconWatch({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="7" y="3" width="10" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 8h4M10 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}

export function IconAlert({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="16" r="0.9" fill="currentColor" />
    </Svg>
  );
}

export function IconJewelry({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M5 13c3.5-6 10.5-6 14 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="9" y="11.2" width="6" height="2.4" rx="1.2" fill="currentColor" />
    </Svg>
  );
}

export function IconFall({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="8" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 9.5 7.5 13l3 2.5M7.5 13 4 16.5M12 11h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconFamily({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="9" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="9" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 18c.6-3 2.6-4.5 4.5-4.5S13 15 13.6 18M13.2 18c.3-2.2 1.6-3.3 3-3.3 1.5 0 2.7 1.2 3.2 3.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 18s-6.5-4.2-6.5-8.2A3.4 3.4 0 0 1 12 7.5a3.4 3.4 0 0 1 6.5 2.3C18.5 13.8 12 18 12 18Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 3.5 13.4 9 19 10.5 13.4 12 12 17.5 10.6 12 5 10.5 10.6 9 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconScreen({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 18h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}

export function IconDrop({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 4s5.5 6.2 5.5 10.2A5.5 5.5 0 1 1 6.5 14.2C6.5 10.2 12 4 12 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M13 3 6 13h5l-1 8 8-12h-5l0-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="7" y="3" width="10" height="18" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 17h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}
