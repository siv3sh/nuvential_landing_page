import { type ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ children, reverse = false, className = '' }: MarqueeProps) {
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div
        className={`flex shrink-0 items-center gap-12 pr-12 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-12 pr-12 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
