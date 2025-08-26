import { useAppSelector } from "../../store/hooks";
import { useRef } from "react";
import { useActiveSection } from "../../assets/helpers/useActiveSection";
import { SECTION_IDS, scrollToSection } from "../../assets/helpers/navHelpers";
import { contentText } from "../../assets/helpers/languageHelpers";
import "./nav.scss";

function Nav() {
  const btnRef = useRef<HTMLDivElement | null>(null);
  const { currentLanguage } = useAppSelector(state => state.language);
  const activeId = useActiveSection(SECTION_IDS, { rootSelector: ".content", topOffset: 80 });
  const textTranslations = contentText[currentLanguage].nav;
  
  
  return (
      <nav className="nav">
        <div className="nav__list">
          {SECTION_IDS.map((id, i) => (
              <div
                key={id}
                ref={id === "home" ? btnRef : undefined}
                className={`nav__link-wrapper ${activeId === id ? "is-active" : ""}`}
              >
                <button
                  onClick={() => scrollToSection(id)}
                  aria-current={activeId === id ? "page" : undefined}
                  data-active={activeId === id || undefined}
                >
                  {textTranslations[i]}
                </button>
              </div>
            ))}
        </div>
      </nav>
  );
}

export default Nav;
