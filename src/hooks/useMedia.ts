import { useCallback, useEffect, useState } from 'react';

function useMedia(query: string) {
  const getMatches = useCallback((q: string): boolean => {
    if (typeof window !== 'undefined') return window.matchMedia(q).matches;
    return false;
  }, []);

  const [matches, setMatches] = useState(getMatches(query));

  const updateMatches = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) setMatches(true);
    else setMatches(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(query);
    media.addEventListener('change', updateMatches);

    if (media.matches) setMatches(true);
    return () => media.removeEventListener('change', updateMatches);
  }, [matches, query, updateMatches]);

  return matches;
}

export default useMedia;
