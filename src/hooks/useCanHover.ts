import { useEffect, useState } from 'react';

const QUERY = '(hover: hover) and (pointer: fine)';

export function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(QUERY);
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return canHover;
}
