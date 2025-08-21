import Project from './Project';
import { projectsList } from '../../assets/helpers/projectsList';
import './projects.scss';

function Projects() {
  return (
    <section className="section projects" id="projects">
      <h1 className='section-heading'>Projects</h1>
      <p className="projects__description">Here’s a selection of my most notable projects, both professional and personal.</p>
      <div className='projects__list'>
        {projectsList.map(p => <Project key={p.name} project={p}/>)}
      </div>
    </section>
  )
}

export default Projects;