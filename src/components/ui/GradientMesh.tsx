export function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Primary blue glow - top left */}
      <div
        className="absolute -top-[15%] -left-[5%] h-[700px] w-[700px] rounded-full opacity-[0.18] blur-[130px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #4F7CFF 0%, transparent 70%)',
        }}
      />
      {/* Cyan glow - right side */}
      <div
        className="absolute top-[25%] -right-[10%] h-[600px] w-[600px] rounded-full opacity-[0.12] blur-[130px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)',
          animationDelay: '5s',
        }}
      />
      {/* Violet glow - bottom */}
      <div
        className="absolute bottom-[5%] left-[15%] h-[500px] w-[500px] rounded-full opacity-[0.08] blur-[130px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)',
          animationDelay: '10s',
        }}
      />
      {/* Subtle top center blue */}
      <div
        className="absolute top-[40%] left-[40%] h-[400px] w-[400px] rounded-full opacity-[0.06] blur-[100px] animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #4F7CFF 0%, transparent 70%)',
          animationDelay: '7s',
        }}
      />
    </div>
  );
}
