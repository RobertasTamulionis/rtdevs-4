import { useAppSelector } from "../../store/hooks";
import { contentText } from "../../assets/helpers/languageHelpers";
import { FaJsSquare, FaLaravel, FaHtml5, FaCss3Alt, FaVuejs, FaPhp, FaNodeJs, FaGithub, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiSass, SiRedux, SiAdobexd } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import "./skills.scss";

function Skills() {
  const { currentLanguage } = useAppSelector(state => state.language);
  const { title, tagline, category_1, category_2 } = contentText[currentLanguage].skills;

  return (
    <section className="section skills" id="skills">
      <h1 className="section-heading">{title}</h1>
      <p className="skills__description">{tagline}</p>
      <div className="skills__content">
        <div className="skills__card">
          <h2>{category_1}</h2>
          <div className="tech-orbit">
            <div className="core" aria-hidden />
            <ul className="orbit orbit--1">
              <li data-label="ReactJS"><FaReact /></li>
              <li data-label="JavaScript"><FaJsSquare /></li>
              <li data-label="Next.js"><SiNextdotjs /></li>
              <li data-label="HTML5"><FaHtml5 /></li>
              <li data-label="CSS3"><FaCss3Alt /></li>
              <li data-label="Sass"><SiSass /></li>
              <li data-label="Redux"><SiRedux /></li>
              <li data-label="Adobe XD"><SiAdobexd /></li>
              <li data-label="GitHub"><FaGithub /></li>
            </ul>
          </div>
        </div>
        <div className="skills__card">
          <h2>{category_2}</h2>
          <div className="tech-orbit">
            <div className="core" aria-hidden />
            <ul className="orbit orbit--2">
              <li data-label="TypeScript"><SiTypescript /></li>
              <li data-label="Laravel"><FaLaravel /></li>
              <li data-label="Vue"><FaVuejs /></li>
              <li data-label="PHP"><FaPhp /></li>
              <li data-label="Node.js"><FaNodeJs /></li>
              <li data-label="jQuery"><DiJqueryLogo /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;