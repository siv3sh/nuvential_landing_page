import { lazy, Suspense, useEffect, useState } from 'react';
import { Hero3DFallback } from './Hero3DFallback';

const Hero3D = lazy(() =>
  import('./Hero3D').then((m) => ({ default: m.Hero3D }))
);

interface Hero3DWrapperProps {
  className?: string;
}

export function Hero3DWrapper({ className = '' }: Hero3DWrapperProps) {
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement('canvas');
        return !!canvas.getContext('webgl') || !!canvas.getContext('experimental-webgl');
      } catch {
        return false;
      }
    })();
    if (!hasWebGL) return;

    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const update = () => setShouldRender3D(!reducedQuery.matches && !mobileQuery.matches);

    update();
    reducedQuery.addEventListener('change', update);
    mobileQuery.addEventListener('change', update);
    return () => {
      reducedQuery.removeEventListener('change', update);
      mobileQuery.removeEventListener('change', update);
    };
  }, []);

  if (!shouldRender3D) {
    return (
      <div className={className}>
        <Hero3DFallback />
      </div>
    );
  }

  return (
    <div className={className}>
      <Suspense fallback={<Hero3DFallback />}>
        <Hero3D />
      </Suspense>
    </div>
  );
}
