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
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement('canvas');
        return !!canvas.getContext('webgl') || !!canvas.getContext('experimental-webgl');
      } catch {
        return false;
      }
    })();

    if (prefersReduced || !hasWebGL) {
      setShouldRender3D(false);
    } else if (isMobile) {
      setShouldRender3D(false);
    } else {
      setShouldRender3D(true);
    }
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
