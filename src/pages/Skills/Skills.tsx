import { FaJsSquare, FaLaravel, FaHtml5, FaCss3Alt, FaVuejs, FaPhp, FaNodeJs, FaGithub, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiSass, SiRedux, SiAdobexd } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import "./skills.scss";

function Skills() {
  return (
    <section className="section skills" id="skills">
      <h1 className="section-heading">Skills</h1>
      <p className="skills__description">
        Over the past 6 years as a web developer, I’ve worked with a wide range of tools and technologies. Some have become part of my everyday workflow, while others I’ve used to solve specific challenges. To give a clearer picture, I’ve grouped my skills into two categories:
      </p>
      <div className="skills__content">
        <div className="skills__card">
          <h2>Comfortable</h2>
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
          <h2>Additional Experience</h2>
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