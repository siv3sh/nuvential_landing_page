export function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-[18%] -left-[8%] h-[640px] w-[640px] rounded-full opacity-50 blur-[110px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #C7D2FE 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[22%] -right-[10%] h-[560px] w-[560px] rounded-full opacity-45 blur-[110px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #99F6E4 0%, transparent 70%)',
          animationDelay: '5s',
        }}
      />
      <div
        className="absolute bottom-[4%] left-[18%] h-[480px] w-[480px] rounded-full opacity-40 blur-[110px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #FED7CC 0%, transparent 70%)',
          animationDelay: '10s',
        }}
      />
    </div>
  );
}
