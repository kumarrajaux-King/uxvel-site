'use client';
import { useCallback, useEffect, useRef } from 'react';

const DEFAULTS = { motionLevel: 'cinematic', customCursor: true, theme: 'dark', accent: '#6BD5C6' };

export default function useSite(options) {
  const rootRef = useRef(null);
  const api = useRef(null);
  const opts = useRef({ ...DEFAULTS, ...(options || {}) });

  useEffect(() => {
    let cancelled = false;
    import('@/lib/site-runtime').then((m) => {
      if (cancelled || !rootRef.current) return;
      api.current = m.install(rootRef.current, opts.current);
    });
    return () => {
      cancelled = true;
      if (api.current) api.current.destroy();
      api.current = null;
    };
  }, []);

  const toggleMenu = useCallback(() => { if (api.current) api.current.toggleMenu(); }, []);
  const closeMenu = useCallback(() => { if (api.current) api.current.closeMenu(); }, []);
  const toggleTheme = useCallback(() => { if (api.current) api.current.toggleTheme(); }, []);

  return { rootRef, toggleMenu, closeMenu, toggleTheme };
}
