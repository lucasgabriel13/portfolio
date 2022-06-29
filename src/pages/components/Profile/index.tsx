import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { Fade } from "react-awesome-reveal";

import * as C from './styles';

export function Profile() {
  return (
    <C.Section id="about">
      {/*@ts-ignore */}
      <Fade direction="left" triggerOnce>
        <div className="profileContact">
          <img
            src="/images/profile-image.png"
            alt="Foto de perfil do Lucas Gonçalves"
          />
          <div className="socialMedias">
            <a
              href="https://www.linkedin.com/in/lucas-gon%C3%A7alves-96719b16a/"
              aria-label="LinkedIn de Lucas Gonçalves"
              target={`_blank`}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/lucasgabriel13"
              aria-label="Github de Lucas Gonçalves"
              target={`_blank`}
            >
              <FaGithub />
            </a>
            <a
              href="mailto:lucas.gabriel.goncalves12@gmail.com"
              aria-label="E-mail de Lucas Gonçalves"
            >
              <MdEmail />
            </a>
          </div>
        </div>
        <div className="profileDescription">
          <h2>
            Olá, sou o Lucas Gonçalves 👋
          </h2>
          <p>
            Desenvolvedor Web Front-end há mais de 1 ano, com conhecimentos sólidos
            no desenvolvimento de aplicações Front-end e sempre preocupado em levar
            uma excelente experiência ao usuário.
          </p>
          <p>Consegui construir funcionalidades para melhorar os sistemas existentes
            nas organizações onde trabalhei, além da criação de um novo sistema, agregando
            ainda mais valor e entregando mais ferramentas aos clientes.
          </p>
        </div>
      </Fade>
    </C.Section>
  )
}