import { useId } from 'react';

export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  const gradientId = `nu-wave-${useId().replace(/:/g, '')}`;

  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="6" y1="30" x2="34" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4F46E5" />
          <stop offset="0.5" stopColor="#0D9488" />
          <stop offset="1" stopColor="#F2705B" />
        </linearGradient>
      </defs>
      <path
        d="M8 30V19a6 6 0 0 1 12 0v2a6 6 0 0 0 12 0V10"
        stroke={`url(#${gradientId})`}
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-text-heading">
      <LogoMark />
      Nuential
    </span>
  );
}
