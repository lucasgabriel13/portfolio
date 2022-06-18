import { HtmlHTMLAttributes } from "react";
import * as C from "./styles";

export function Main({...rest}: HtmlHTMLAttributes<any>) {
  return (
    <C.Main {...rest}>
      <img
        id="backgroundImageMain"
        src="/images/background-main.svg"
        alt="Imagem de fundo"
      />

      <section className="title">
        <h1>Lucas Gonçalves</h1>
        <h2>Desenvolvedor Front-end</h2>
        <span>Desenvolvimento Web | Front-end | Tecnologia</span>
      </section>

      <section className="photoPerfilMain">
        <img src="/images/photo-main.png" alt="Foto do Lucas Gonçalves"/>
      </section>
    </C.Main>
  );
}
