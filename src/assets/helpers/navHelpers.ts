import { gsap } from "./gsapHelpers";

export const SECTION_IDS: string[] = ["home", "skills", "projects", "contacts"];

export type SectionId = (typeof SECTION_IDS)[number];
type ScrollSource = "default" | "mobile-nav";


export const scrollToSection = (id: SectionId, source: ScrollSource = "default") => {
  const el = document.getElementById(id);
  if (!el) return;

  const scroller = document.querySelector(".content") as HTMLElement | null;
  if (!scroller) return;

  const maxScroll = scroller.scrollHeight - scroller.clientHeight;
  const yPos = el.offsetTop - 50;

  const run = () => {
    if (id === SECTION_IDS[SECTION_IDS.length - 1]) {
      const overshoot = maxScroll + 40;
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
      const finalPos = Math.min(yPos, maxScroll);
      gsap.to(scroller, {
        duration: 1,
        ease: "elastic.out(0.6, 0.7)",
        scrollTo: { y: finalPos }
      });
    }
  };

  if (source === "mobile-nav") {
    gsap.delayedCall(1.2, run);
  } else {
    run();
  }
};
