import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "../../assets/helpers/gsapHelpers";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useActiveSection } from '../../assets/helpers/useActiveSection';
import { toggleNav } from '../../store/slices/nav-slice';
import { SECTION_IDS, scrollToSection } from '../../assets/helpers/navHelpers';
import { contentText } from "../../assets/helpers/languageHelpers";
import Logo from '../Logo/Logo';
import './nav-mobile.scss';
import LanguageToggle from "../LanguageToggle/LanguageToggle";

function NavMobile() {
  const dispatch = useAppDispatch();
  const { active } = useAppSelector(state => state.nav);
  const { currentLanguage } = useAppSelector(state => state.language);
  const activeId = useActiveSection([...SECTION_IDS], { rootSelector: ".content", topOffset: 80 });
  const textTranslations = contentText[currentLanguage].nav;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const toggleRef  = useRef<HTMLButtonElement>(null);
  const listRef    = useRef<HTMLElement>(null);
  const btnRefs    = useRef<HTMLButtonElement[]>([]);
  const switchRef = useRef<HTMLDivElement>(null);
  btnRefs.current = [];

  const addBtnRef = (el: HTMLButtonElement | null) => {
    if (el && !btnRefs.current.includes(el)) btnRefs.current.push(el);
  };

  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

      const bars = toggleRef.current?.querySelectorAll("span") ?? [];

      // Burger -> X
      tl.current
        .to(bars[0], { y: 0, rotate: 45, duration: 0.18 }, 0)
        .to(bars[1], { opacity: 0, scaleX: 0.2, duration: 0.18 }, 0)
        .to(bars[2], { y: 0, rotate: -45, duration: 0.18 }, 0);

      // Expand the wrapper to full-screen glass
      tl.current.to(wrapperRef.current, {
        backgroundColor: "rgba(22,28,29,0.8)",
        width: () => window.innerWidth - 40,
        height: () => window.innerHeight - 40,
        duration: 0.25,
        ease: "power4.in",
      });

      // Reveal list & allow interaction
      tl.current.to(listRef.current, {
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.15,
      });

      // Stagger links in (and have the switch come in last if you prefer)
      const staggerTargets = [...btnRefs.current, switchRef.current].filter(Boolean) as Element[];
      tl.current.to(staggerTargets, {
        y: 0,
        autoAlpha: 1,
        duration: 0.15,
        stagger: 0.10,
        ease: "back.inOut"
      });

      const onResize = () => {
        if (tl.current && tl.current.progress() > 0) {
          gsap.set(wrapperRef.current, {
            width: window.innerWidth - 40,
            height: window.innerHeight - 40,
          });
        }
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    });
    return () => ctx.revert();
  }, []);


  useEffect(() => {
    if (!tl.current) return;
    active ? tl.current.play() : tl.current.reverse();
    document.documentElement.style.overflow = active ? "hidden" : "";
  }, [active]);

  const onLinkClick = (id: string) => {
    dispatch(toggleNav());
    scrollToSection(id, 'mobile-nav');
  };

  return (
    <div className='nav-mobile'>
      <Logo/>
      <div className="nav-mobile__nav-wrapper" ref={wrapperRef}>
        <button
          className="nav-mobile__toggle-btn"
          ref={toggleRef}
          onClick={() => dispatch(toggleNav())}
          aria-expanded={active}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-mobile__nav-list" ref={listRef}>
          {SECTION_IDS.map((id, i) => {
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
                >
                  {textTranslations[i]}
                </button>
              </div>
            );
          })}
        </nav>
         <div className="nav-mobile__switch-wrapper" ref={switchRef}>
          <LanguageToggle/>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;