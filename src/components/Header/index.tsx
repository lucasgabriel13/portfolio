import { useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { Fade } from "react-awesome-reveal";

import * as C from "./styles";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleToggleOpenMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (


    <C.Header>
      {/*@ts-ignore */}
      <Fade direction="down" triggerOnce>
        <img src="/images/logo.svg" alt="Logo Lucas Gonçalves" />
      </Fade>

      <nav className={`${menuIsOpen && "show"}`}>
        {/*@ts-ignore */}
        <Fade direction="down" triggerOnce>
          <ul className="menu">
            <li>
              <a href="#about" onClick={handleToggleOpenMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleToggleOpenMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleToggleOpenMenu}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleToggleOpenMenu}>
                Contato
              </a>
            </li>
          </ul>
        </Fade>
        {/*@ts-ignore */}
        <Fade direction="down" triggerOnce>
          <CgMenuRightAlt
            className="toggle openMenu"
            onClick={handleToggleOpenMenu}
          />
        </Fade>

        <CgClose className="toggle closeMenu" onClick={handleToggleOpenMenu} />

      </nav>
    </C.Header >

  );
}
