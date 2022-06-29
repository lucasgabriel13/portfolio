import { FaGithub } from 'react-icons/fa';
import repos from '../../../../projects.json';
import * as C from './styles';

export function Projects() {

  return (
    <C.Section id="projects">
      <div className="title">
        <img src="/images/arrow-down.svg" alt="Seção de Projetos" />
        <h3>Projetos</h3>
      </div>

      <div className="projectsContainer">
        {repos?.map((repo) => (
          <div className="projectContent" key={repo.id}>
            <h2>{repo.name}</h2>
            <img src={repo.photo_url} alt={repo.name} />
            <p>
              {repo.description}
            </p>
            <footer>
              <a href={repo.github_url}>
                Repositório
              </a>
              <a href={repo.homepage}>
                Acessar
              </a>
            </footer>
          </div>
        ))}
      </div>

      <a
        className="githubLink"
        href="https://github.com/lucasgabriel13"
        target={`_blank`}
      >
        <FaGithub size={30} />
        <span>Ver mais projetos</span>
      </a>

    </C.Section>
  )
}
