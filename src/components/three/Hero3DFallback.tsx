export function Hero3DFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="h-48 w-48 rounded-full animate-pulse-glow"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #A5B4FC 0%, #6366F1 45%, #4338CA 80%)',
          boxShadow: '0 30px 80px -20px rgba(79,70,229,0.45), inset -12px -16px 40px rgba(13,148,136,0.35)',
        }}
      />
      <div
        className="absolute h-60 w-60 rounded-full border border-brand-secondary/40 animate-spin-slow"
        style={{ borderStyle: 'dashed' }}
      />
    </div>
  );
}
