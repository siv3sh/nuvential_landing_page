import { Component, lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
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

class Hero3DErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <Hero3DFallback /> : this.props.children;
  }
}

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl');
    if (!gl) return false;
    (gl as WebGLRenderingContext).getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

function prefersDataSaving() {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return connection?.saveData === true;
}

/** Runs once the page has loaded and the main thread is idle, so 3D never delays first paint. */
function whenIdleAfterLoad(callback: () => void) {
  let idleId: number | undefined;
  let timeoutId: number | undefined;

  const schedule = () => {
    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(callback, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(callback, 200);
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
  const [isStill, setIsStill] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!hasWebGL() || prefersDataSaving()) return;

    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compactQuery = window.matchMedia('(max-width: 768px)');
    let cancelIdle: (() => void) | undefined;

    const update = () => {
      setIsCompact(compactQuery.matches);
      setIsStill(reducedQuery.matches);
    };

    update();
    if (compactQuery.matches) {
      cancelIdle = whenIdleAfterLoad(() => setShouldRender3D(true));
    } else {
      setShouldRender3D(true);
    }

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
        <Hero3DErrorBoundary>
          <Suspense fallback={<Hero3DFallback />}>
            <Hero3D compact={isCompact} active={isVisible} still={isStill} />
          </Suspense>
        </Hero3DErrorBoundary>
      ) : (
        <Hero3DFallback />
      )}
    </div>
  );
}
