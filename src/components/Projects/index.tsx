import { FaGithub } from 'react-icons/fa';
import repos from '../../../projects.json';
import { Title } from '../Title';
import * as C from './styles';
import { Fade } from "react-awesome-reveal";


export function Projects() {

  return (
    //@ts-ignore
    <Fade direction="left" triggerOnce>
      <C.Section id="projects">
        <Title title="Projetos" />

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
    </Fade>
  )
}
