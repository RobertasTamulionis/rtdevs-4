import { useRef } from "react";
import { useAppSelector } from "../../store/hooks";
import { useActiveSection } from "../../assets/helpers/useActiveSection";
import { SECTION_IDS, scrollToSection } from "../../assets/helpers/navHelpers";
import { contentText } from "../../assets/helpers/languageHelpers";
import "./nav.scss";

function Nav() {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const { currentLanguage } = useAppSelector((state) => state.language);
  const activeId = useActiveSection(SECTION_IDS, {
    rootSelector: ".content",
    topOffset: 80,
  });
  const textTranslations = contentText[currentLanguage].nav;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className="nav" aria-label="Section navigation">
      <ul className="nav__list">
        {SECTION_IDS.map((id, i) => {
          const isActive = activeId === id;
          return (
            <li
              key={id}
              className={`nav__item ${isActive ? "is-active" : ""}`}
            >
              <a
                ref={id === "home" ? linkRef : undefined}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                aria-current={isActive ? "page" : undefined}
                data-active={isActive || undefined}
                className="nav__link"
              >
                {textTranslations[i]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;