import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import * as C from './styles';

export function Footer() {
  return (
    <C.Footer>
      <img src="/images/logo.svg" alt="logo de Lucas Gonçalves" />

      <div className="rightGroup">
        <span>
          By Lucas Gonçalves
        </span>
        <div className="socialMedias">
          <a
            href="https://www.linkedin.com/in/lucas-gon%C3%A7alves-96719b16a/"
            aria-label="LinkedIn de Lucas Gonçalves"
            target={`_blank`}
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/lucasgabriel13"
            aria-label="Github de Lucas Gonçalves"
            target={`_blank`}
          >
            <FaGithub size={30} />
          </a>
          <a
            href="mailto:lucas.gabriel.goncalves12@gmail.com"
            aria-label="E-mail de Lucas Gonçalves"
          >
            <MdEmail size={30} />
          </a>
        </div>
      </div>

    </C.Footer>
  )
}