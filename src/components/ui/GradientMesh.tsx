export function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full opacity-20 blur-[120px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #4F7CFF 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full opacity-15 blur-[120px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)',
          animationDelay: '5s',
        }}
      />
      <div
        className="absolute bottom-[10%] left-[20%] h-[400px] w-[400px] rounded-full opacity-10 blur-[120px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)',
          animationDelay: '10s',
        }}
      />
    </div>
  );
}
