import { HtmlHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

import * as C from "./styles";

export function Main({ ...rest }: HtmlHTMLAttributes<any>) {
  return (
    //@ts-ignore
    <Fade triggerOnce >
      <C.Main {...rest}>

        <motion.img
          id="backgroundImageMain"
          src="/images/background-main.svg"
          alt="Imagem de fundo"
          animate={{ y: [0, 18, 0] }}
          transition={{ ease: "easeOut", duration: 2 }}
        />

        <section className="title">
          <h1>Lucas Gonçalves</h1>
          <h2>Desenvolvedor Front-end</h2>
          <span>Desenvolvimento Web | Front-end | Tecnologia</span>
        </section>

        <section className="photoPerfilMain">
          <img src="/images/photo-main.png" alt="Foto do Lucas Gonçalves" />
        </section>


        <motion.img
          animate={{ y: [0, 8, 0] }}
          transition={{ ease: "easeOut", repeat: Infinity }}
          id="scrollDown"
          src="/images/scroll-icon.svg" alt="Setas indicando para rolar a página"
        />

      </C.Main>
    </Fade >
  );
}
