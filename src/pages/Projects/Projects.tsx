import Project from './Project';
import { useAppSelector } from '../../store/hooks';
import { contentText } from '../../assets/helpers/languageHelpers';
import { projectsList } from '../../assets/helpers/projectsList';
import './projects.scss';

function Projects() {
  const { currentLanguage } = useAppSelector(state => state.language);
  const { title, tagline } = contentText[currentLanguage].projects;
  
  return (
    <section className="section projects" id="projects">
      <h1 className='section-heading'>{title}</h1>
      <p className="projects__description">{tagline}</p>
      <div className='projects__list'>
        {projectsList.map(p => <Project key={p[currentLanguage].name} project={p[currentLanguage]}/>)}
      </div>
    </section>
  )
}

export default Projects;