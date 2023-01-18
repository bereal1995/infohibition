import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';

interface IntersectOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

type IntersectCallback = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

export function useIntersect(
  callback: IntersectCallback,
  options?: IntersectOptions
) {
  const ref = useRef<HTMLDivElement>(null);
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callback(entry, observer);
      });
    },
    [callback]
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, handleIntersect, options]);

  return ref;
}
