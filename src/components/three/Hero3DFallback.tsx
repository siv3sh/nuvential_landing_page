export function Hero3DFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Outer dashed ring */}
      <div
        className="absolute h-72 w-72 rounded-full border border-brand-primary/15 animate-spin-slow"
        style={{ borderStyle: 'dashed' }}
      />
      {/* Mid ring */}
      <div
        className="absolute h-56 w-56 rounded-full border border-brand-secondary/25 animate-spin-slow"
        style={{ borderStyle: 'dashed', animationDuration: '12s', animationDirection: 'reverse' }}
      />
      {/* Core glow orb */}
      <div
        className="h-44 w-44 rounded-full opacity-70 blur-md animate-pulse-glow"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, rgba(79,124,255,0.9), rgba(34,211,238,0.5) 45%, rgba(167,139,250,0.2) 70%, transparent 80%)',
          boxShadow: '0 0 100px rgba(79,124,255,0.4), 0 0 160px rgba(34,211,238,0.15)',
        }}
      />
      {/* Inner solid dot */}
      <div
        className="absolute h-16 w-16 rounded-full opacity-80"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(248,250,252,0.4), rgba(79,124,255,0.3) 60%, transparent)',
        }}
      />
    </div>
  );
}
