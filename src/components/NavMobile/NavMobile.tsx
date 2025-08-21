import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "../../assets/helpers/gsapHelpers";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useActiveSection } from '../../assets/helpers/useActiveSection';
import { toggleNav } from '../../store/nav-slice';
import { SECTION_IDS, scrollToSection } from '../../assets/helpers/navHelpers';
import Logo from '../Logo/Logo';
import './nav-mobile.scss';

function NavMobile() {
  const dispatch = useAppDispatch();
  const { active } = useAppSelector(state => state.nav);
  const activeId = useActiveSection([...SECTION_IDS], { rootSelector: ".content", topOffset: 80 });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const toggleRef  = useRef<HTMLButtonElement>(null);
  const listRef    = useRef<HTMLElement>(null);
  const btnRefs    = useRef<HTMLButtonElement[]>([]);
  btnRefs.current = [];

  const addBtnRef = (el: HTMLButtonElement | null) => {
    if (el && !btnRefs.current.includes(el)) btnRefs.current.push(el);
  };

  const tl = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // --- initial states (no CSS transitions needed) ---
    gsap.set(wrapperRef.current, {
      position: "absolute",
      right: 20,
      top: 10,
      width: 80,
      height: 80,
      borderRadius: 20,
      backgroundColor: "rgba(22,28,29,0.2)",
      boxShadow: "6px 6px 16px rgba(0,0,0,0.6), -6px -6px 16px rgba(22,28,29,0.05)",
      zIndex: 105,
    });

    const bars = toggleRef.current?.querySelectorAll("span") ?? [];
    gsap.set(bars, {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "100%",
      height: 2,
      background: "var(--orange)",
      borderRadius: 999,
      transformOrigin: "50% 50%",
    });
    // burger offsets
    gsap.set(bars[0], { xPercent: -50, yPercent: -50, y: -8, rotate: 0 });
    gsap.set(bars[1], { xPercent: -50, yPercent: -50, y: 0,  rotate: 0, opacity: 1, scaleX: 1 });
    gsap.set(bars[2], { xPercent: -50, yPercent: -50, y: 8,  rotate: 0 });

    gsap.set(listRef.current, { autoAlpha: 0, pointerEvents: "none" });
    gsap.set(btnRefs.current, { y: 20, autoAlpha: 0 });

    // --- the master timeline ---
    tl.current = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

    // 1) burger -> X (parallel between bars)
    tl.current
      .to(bars[0], { y: 0, rotate: 45, duration: 0.18 }, 0)
      .to(bars[1], { opacity: 0, scaleX: 0.2, duration: 0.18 }, 0)
      .to(bars[2], { y: 0, rotate: -45, duration: 0.18 }, 0);

    // 2) wrapper expands
    tl.current.to(wrapperRef.current, {
      backgroundColor: "rgba(22,28,29,0.8)",
      width: () => window.innerWidth - 40,
      height: () => window.innerHeight - 40,
      duration: 0.55,
      ease: "power2.out",
    });

    // 3) reveal nav list (no overlap)
    tl.current.to(listRef.current, {
      autoAlpha: 1,
      pointerEvents: "auto",
      duration: 0.25,
    });

    // 4) stagger items in (no overlap)
    tl.current.to(btnRefs.current, {
      y: 0,
      autoAlpha: 1,
      duration: 0.35,
      stagger: 0.08,
    });

    // keep sizes correct on resize while open
    const onResize = () => {
      if (tl.current && tl.current.progress() > 0) {
        gsap.set(wrapperRef.current, {
          width: window.innerWidth - 40,
          height: window.innerHeight - 40,
        });
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return () => ctx.revert();
}, []);

  // play/reverse timeline
useEffect(() => {
  if (!tl.current) return;
  active ? tl.current.play() : tl.current.reverse();
  document.documentElement.style.overflow = active ? "hidden" : "";
}, [active]);

  const onLinkClick = (id: string) => {
    dispatch(toggleNav());
    
    scrollToSection(id);
  };

  return (
    <div className='nav-mobile'>
      <Logo/>
       <div className="nav-mobile" style={{ position: "relative", gridColumn: "1 / -1", gridRow: "1 / 2" }}>
      <div className="nav-mobile__nav-wrapper" ref={wrapperRef}>
        <button
          className="nav-mobile__toggle-btn"
          ref={toggleRef}
          onClick={() => dispatch(toggleNav())}
          aria-expanded={active}
          aria-label="Toggle navigation"
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            width: 32,
            height: 32,
            cursor: "pointer",
            WebkitTapHighlightColor: "transparent",
            background: "transparent",
            border: "0",
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-mobile__nav-list" ref={listRef}>
          {SECTION_IDS.map((id) => {
            const isActive = activeId === id;
            return (
              <div
                key={id}
                className={`nav-mobile__link-wrapper${isActive ? ' is-active' : ''}`}
              >
                <button
                  ref={addBtnRef}
                  onClick={() => onLinkClick(id)}
                  aria-current={isActive ? 'true' : undefined}  
                  data-active={isActive || undefined}         
                  style={{ fontSize: 24 }}
                >
                  {id[0].toUpperCase() + id.slice(1)}
                </button>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
    </div>
  );
};

export default NavMobile;