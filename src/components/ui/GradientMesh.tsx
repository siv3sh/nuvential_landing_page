export function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-[22%] -left-[16%] h-[760px] w-[760px] rounded-full opacity-60 lg:animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #C7D2FE 0%, rgba(199,210,254,0.35) 35%, transparent 68%)',
        }}
      />
      <div
        className="absolute top-[18%] -right-[18%] h-[680px] w-[680px] rounded-full opacity-50 lg:animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #99F6E4 0%, rgba(153,246,228,0.3) 35%, transparent 68%)',
          animationDelay: '5s',
        }}
      />
      <div
        className="absolute bottom-0 left-[10%] h-[600px] w-[600px] rounded-full opacity-45 lg:animate-mesh-drift"
        style={{
          background: 'radial-gradient(circle, #FED7CC 0%, rgba(254,215,204,0.3) 35%, transparent 68%)',
          animationDelay: '10s',
        }}
      />
    </div>
  );
}
