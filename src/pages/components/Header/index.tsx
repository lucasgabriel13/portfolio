import { useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

import * as C from "./styles";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleToggleOpenMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <C.Header>
      <img src="/images/logo.svg" alt="Logo Lucas Gonçalves" />

      <nav className={`${menuIsOpen && "show"}`}>
        <ul className="menu">
          <li>
            <a href="#sobre" onClick={handleToggleOpenMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#" onClick={handleToggleOpenMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={handleToggleOpenMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#" onClick={handleToggleOpenMenu}>
              Contato
            </a>
          </li>
        </ul>
        <CgMenuRightAlt
          className="toggle openMenu"
          onClick={handleToggleOpenMenu}
        />
        <CgClose className="toggle closeMenu" onClick={handleToggleOpenMenu} />
      </nav>
    </C.Header>
  );
}
