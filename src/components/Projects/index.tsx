import { FaGithub } from 'react-icons/fa';
import repos from '../../../projects.json';
import { Title } from '../Title';
import * as C from './styles';
import { Fade } from "react-awesome-reveal";


export function Projects() {

  return (

    <C.Section id="projects">

      {/*@ts-ignore */}
      <Fade direction="left" triggerOnce>
        <Title title="Projetos" />
      </Fade>
      {/*@ts-ignore */}
      <Fade direction="left" triggerOnce>
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
      </Fade >
      {/*@ts-ignore */}
      <Fade direction="left" triggerOnce>
        <a
          className="githubLink"
          href="https://github.com/lucasgabriel13"
          target={`_blank`}
        >
          <FaGithub size={30} />
          <span>Ver mais projetos</span>
        </a>
      </Fade>

    </C.Section>

  )
}
