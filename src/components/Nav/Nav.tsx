import { Fragment, useRef } from "react";
import { useActiveSection } from "../../assets/helpers/useActiveSection";
import { SECTION_IDS, scrollToSection } from "../../assets/helpers/navHelpers";
import "./nav.scss";
 
function Nav() {
  const btnRef = useRef<HTMLDivElement | null>(null);
  const activeId = useActiveSection(SECTION_IDS, { rootSelector: ".content", topOffset: 80 });
 
  return (
    <Fragment>
      <nav className="nav">
        {SECTION_IDS.map((id) => (
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
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </div>
        ))}
      </nav>
    </Fragment>
  );
}

export default Nav;
