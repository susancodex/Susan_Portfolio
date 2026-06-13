import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends Element = Element>(
  options: UseScrollAnimationOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.unobserve(el);
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible] as const;
};

export const useStaggerAnimation = <T extends HTMLElement = HTMLDivElement>(itemsCount: number, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemsCount).fill(false)
  );
  const [containerRef, isContainerVisible] = useScrollAnimation<T>();

  useEffect(() => {
    if (!isContainerVisible) return;

    setVisibleItems(new Array(itemsCount).fill(false));

    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < itemsCount; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleItems((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * delay)
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [isContainerVisible, itemsCount, delay]);

  return [containerRef, visibleItems] as const;
};
