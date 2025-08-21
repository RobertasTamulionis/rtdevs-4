import { gsap } from "./gsapHelpers";

export const SECTION_IDS: string[] = ["home", "skills", "projects", "contacts"];

export type SectionId = (typeof SECTION_IDS)[number];

export const scrollToSection = (id: SectionId) => {
  const el = document.getElementById(id);
  if (!el) return;
  const scroller = document.querySelector(".content") as HTMLElement | null;
  if (!scroller) return;

  const maxScroll = scroller.scrollHeight - scroller.clientHeight;
  const yPos = el.offsetTop - 50;

  if (id === SECTION_IDS[SECTION_IDS.length - 1]) {
    // Last section — overshoot and come back
    const overshoot = maxScroll + 40; // 40px past the bottom
    gsap.to(scroller, {
      duration: 0.8,
      ease: "power2.out",
      scrollTo: { y: overshoot },
      onComplete: () => {
        gsap.to(scroller, {
          duration: 0.6,
          ease: "elastic.out(0.7, 0.4)",
          scrollTo: { y: maxScroll }
        });
      }
    });
  } else {
    // Normal scroll
    const finalPos = Math.min(yPos, maxScroll);
    gsap.to(scroller, {
      duration: 1,
      ease: "elastic.out(0.6, 0.7)",
      scrollTo: { y: finalPos },
    });
  }
};
