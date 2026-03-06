"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the provided CSS class(es) are added.
 * Pass `once: false` to reverse the animation when scrolling back up.
 */
export function useScrollAnimation(
  inViewClass = "in-view",
  options: IntersectionObserverInit = { threshold: 0.12 },
  once = true
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add(inViewClass);
        if (once) observer.disconnect();
      } else if (!once) {
        el.classList.remove(inViewClass);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [inViewClass, options, once]);

  return ref;
}
