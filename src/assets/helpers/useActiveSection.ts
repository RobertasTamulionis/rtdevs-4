import { useEffect, useRef, useState } from "react";

export function useActiveSection(
  sectionIds: string[],
  opts?: { rootSelector?: string; topOffset?: number }
) {
  const { rootSelector = ".content", topOffset = 80 } = opts || {};
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const root = document.querySelector(rootSelector) as HTMLElement | null;
    if (!root) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const getByRatio = () => {
      let bestId: string | null = null;
      let best = -1;
      for (const id of sectionIds) {
        const r = ratiosRef.current[id] ?? 0;
        if (r > best) {
          best = r;
          bestId = id;
        }
      }
      return best > 0 ? bestId : null;
    };

    const getEdge = () => {
      const first = sections[0];
      const last = sections[sections.length - 1];

      if (root.scrollTop <= 2 && first) return first.id;

      const second = sections[1];
      if (first && second) {
        const activationLine = root.scrollTop + topOffset;
        const secondTop = second.offsetTop; 
        if (activationLine < secondTop) return first.id;
      }

      const epsilon = 2;
      if (root.scrollTop + root.clientHeight >= root.scrollHeight - epsilon && last) {
        return last.id;
      }

      return null;
    };

    const applyNext = () => {
      const edge = getEdge();
      const candidate = edge ?? getByRatio();

      if (!candidate) return;

      setActiveId((prev) => (prev === candidate ? prev : candidate));
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          ratiosRef.current[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        }
        applyNext();
      },
      {
        root,
        rootMargin: `-${topOffset}px 0px -${topOffset}px 0px`,
        threshold: thresholds,
      }
    );

    sections.forEach((s) => io.observe(s));

    const onScroll = () => applyNext();
    root.addEventListener("scroll", onScroll, { passive: true });

    applyNext();

    return () => {
      io.disconnect();
      root.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds.join("|"), rootSelector, topOffset]);

  return activeId;
}