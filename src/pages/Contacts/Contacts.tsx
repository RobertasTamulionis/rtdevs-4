import { FaMobileAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './contacts.scss';


export default function ContactCard({
  title = "Contacts",
  phone = "465 08 761",
  email = "rtdevs@protonmail.com",
  linkedin = "www.linkedin.com",
  github = "www.github.com",
}) {
  return (
    <section id="contacts" className="section">
      <h1 className="section-heading">{title}</h1>
      <div className="contact-card" role="group">
        <ul className="contact-list">
          <li className="contact-row">
            <span className="contact-icon">
              <FaMobileAlt/>
            </span>
            <a className="contact-link" href={`tel:${phone.replace(/\s+/g, "")}`}>
              {phone}
            </a>
          </li>
          <li className="contact-row">
            <span className="contact-icon">
              <IoIosMail/>
            </span>
            <a className="contact-link" href={`mailto:${email}`}>{email}</a>
          </li>
          <li className="contact-row">
            <span className="contact-icon">
              <FaLinkedin/>
            </span>
            <a className="contact-link" href={`https://${linkedin}`} target="_blank" rel="noreferrer">
              {linkedin}
            </a>
          </li>
          <li className="contact-row">
            <span className="contact-icon">
              <FaGithub/>
            </span>
            <a className="contact-link" href={`https://${github}`} target="_blank" rel="noreferrer">
              {github}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )};