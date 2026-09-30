import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Hero3DFallback } from './Hero3DFallback';

const Hero3D = lazy(() =>
  import('./Hero3D').then((m) => ({ default: m.Hero3D }))
);

interface Hero3DWrapperProps {
  className?: string;
}

interface NetworkInformation {
  saveData?: boolean;
}

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!canvas.getContext('webgl') || !!canvas.getContext('experimental-webgl');
  } catch {
    return false;
  }
}

function isLowEndDevice() {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  const cores = navigator.hardwareConcurrency ?? 4;
  return connection?.saveData === true || cores <= 2;
}

/** Resolves once the page has loaded and the main thread is idle, so 3D never delays first paint. */
function whenIdleAfterLoad(callback: () => void) {
  let idleId: number | undefined;
  let timeoutId: number | undefined;

  const schedule = () => {
    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(callback, { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(callback, 300);
    }
  };

  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });

  return () => {
    window.removeEventListener('load', schedule);
    if (idleId !== undefined) window.cancelIdleCallback(idleId);
    if (timeoutId !== undefined) window.clearTimeout(timeoutId);
  };
}

export function Hero3DWrapper({ className = '' }: Hero3DWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!hasWebGL() || isLowEndDevice()) return;

    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compactQuery = window.matchMedia('(max-width: 768px)');
    let cancelIdle: (() => void) | undefined;

    const update = () => {
      cancelIdle?.();
      cancelIdle = undefined;
      setIsCompact(compactQuery.matches);

      if (reducedQuery.matches) {
        setShouldRender3D(false);
      } else if (compactQuery.matches) {
        cancelIdle = whenIdleAfterLoad(() => setShouldRender3D(true));
      } else {
        setShouldRender3D(true);
      }
    };

    update();
    reducedQuery.addEventListener('change', update);
    compactQuery.addEventListener('change', update);
    return () => {
      cancelIdle?.();
      reducedQuery.removeEventListener('change', update);
      compactQuery.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      rootMargin: '100px',
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {shouldRender3D ? (
        <Suspense fallback={<Hero3DFallback />}>
          <Hero3D compact={isCompact} active={isVisible} />
        </Suspense>
      ) : (
        <Hero3DFallback />
      )}
    </div>
  );
}
