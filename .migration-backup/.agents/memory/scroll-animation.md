---
name: useScrollAnimation generics
description: The useScrollAnimation hook must be called with a generic type parameter to avoid as-any casts.
---

## Rule
`useScrollAnimation` in `src/hooks/useScrollAnimation.tsx` is generic: `useScrollAnimation<T extends Element = Element>()`. Always pass the specific element type at call sites.

**Why:** Without the generic, the returned `RefObject<Element>` is not directly assignable to element-specific ref props (e.g. `RefObject<HTMLHeadingElement>`) and requires `as any` casts that hide type errors.

**How to apply:**
```tsx
const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
const [cardRef, cardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
```
`useStaggerAnimation` returns `[containerRef, visibleItems]` where `containerRef` is `RefObject<Element>` — assign it directly to a wrapping `<div ref={containerRef}>` which accepts `RefObject<Element>`.
