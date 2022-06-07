import * as C from "./styles";

export function Header() {
  return (
    <C.Header>
      <img src="/images/logo.svg" alt="Logo Lucas Gonçalves" />

      <nav>
        <a href="#">Sobre</a>
        <a href="#">Skills</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
      </nav>
    </C.Header>
  );
}
