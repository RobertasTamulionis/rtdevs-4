import { useAppSelector } from "../../store/hooks";
import { contentText } from "../../assets/helpers/languageHelpers";
import { FaMobileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentAttach } from "react-icons/io5";
import './contacts.scss';

export default function ContactCard() {
  const { currentLanguage } = useAppSelector(state => state.language);
  const { title } = contentText[currentLanguage].contacts;

  return (
    <section id="contacts" className="section">
      <h1 className="section-heading">{title}</h1>
      <div className="contact-card" role="group">
        <ul className="contact-list">
          <li className="contact-row">
            <span className="contact-icon">
              <FaMobileAlt/>
            </span>
            <a className="contact-link" href={`tel:${'465 08 761'.replace(/\s+/g, "")}`}>
              + 465 08 761
            </a>
          </li>
          <li className="contact-row">
            <span className="contact-icon">
              <IoIosMail/>
            </span>
            <a className="contact-link" href='mailto:rtdevs@protonmail.com'>rtdevs@protonmail.com</a>
          </li>
          <li className="contact-socials">
            <a className="contact-socials__social" href='https://linkedin.com/in/robertas-tamulionis' target="_blank" rel="noreferrer">
              <span className="contact-socials__social-icon">
                <FaLinkedin/>
              </span>
              <p className="contact-socials__social-title">Linkedin</p>
            </a>

            <a className="contact-socials__social" href='https://github.com/RobertasTamulionis?tab=repositories' target="_blank" rel="noreferrer">
              <span className="contact-socials__social-icon">
                <FaGithub/>
              </span>
              <p className="contact-socials__social-title">Github</p>
            </a>

             <a className="contact-socials__social" href='/src/assets/cv/R.T.CV.Norwegian.pdf' target="_blank" rel="noreferrer" download>
              <span className="contact-socials__social-icon">
                <IoDocumentAttach />
              </span>
              <p className="contact-socials__social-title">CV(no)</p>
            </a>
             <a className="contact-socials__social" href='/src/assets/cv/R.T.CV.English.pdf' target="_blank" rel="noreferrer" download>
              <span className="contact-socials__social-icon">
                <IoDocumentAttach />
              </span>
              <p className="contact-socials__social-title">CV(en)</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )};