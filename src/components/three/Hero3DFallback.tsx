export function Hero3DFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="h-48 w-48 rounded-full opacity-60 blur-sm animate-pulse-glow"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(79,124,255,0.8), rgba(34,211,238,0.4) 50%, transparent 70%)',
          boxShadow: '0 0 80px rgba(79,124,255,0.4), 0 0 120px rgba(34,211,238,0.2)',
        }}
      />
      <div
        className="absolute h-56 w-56 rounded-full border border-brand-secondary/30 animate-spin-slow"
        style={{ borderStyle: 'dashed' }}
      />
    </div>
  );
}
