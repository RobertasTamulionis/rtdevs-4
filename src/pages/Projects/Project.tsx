import { useAppSelector } from "../../store/hooks";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { type LocalizedProject } from "../../assets/helpers/projectsList";

type ProjectProps = {
  project: LocalizedProject;
};

function Project({ project }: ProjectProps) {
  
  const { name, description, link, git, image } = project;

  return (
     <div className="project">
         <div className="project__image">
            <img src={image} />
          </div>
          <h4 className="project__name">{name}</h4>
          <p className="project__description">{description}</p>
          <div className="project__links">
            <a className="project__link" href={link} target="_blank" rel="noopener noreferrer">
              <FaLink/>
            </a>
            { git &&  
              <a className="project__link" href={git} target="_blank" rel="noopener noreferrer">
                <FaGithub/>
              </a>
            }
          </div>
      </div>
  )
}

export default Project