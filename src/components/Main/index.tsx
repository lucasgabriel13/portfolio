import { HtmlHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

import * as C from "./styles";

export function Main({ ...rest }: HtmlHTMLAttributes<any>) {
  return (

    <C.Main {...rest}>

      <motion.img
        id="backgroundImageMain"
        src="/images/background-main.svg"
        alt="Imagem de fundo"
        animate={{ y: [0, 18, 0] }}
        transition={{ ease: "easeOut", duration: 2 }}
      />

      {/*@ts-ignore*/}
      <Fade triggerOnce>
        <section className="title">
          <h1>Lucas Gonçalves</h1>
          <h2>Desenvolvedor Front-end</h2>
          <span>Desenvolvimento Web | Front-end | Tecnologia</span>
        </section>
      </Fade >
      {/*@ts-ignore*/}
      <Fade triggerOnce>
        <section className="photoPerfilMain">
          <img src="/images/photo-main.png" alt="Foto do Lucas Gonçalves" />
        </section>
      </Fade >
      {/*@ts-ignore*/}
      <Fade triggerOnce>
        <motion.img
          animate={{ y: [0, 8, 0] }}
          transition={{ ease: "easeOut", repeat: Infinity }}
          id="scrollDown"
          src="/images/scroll-icon.svg" alt="Setas indicando para rolar a página"
        />
      </Fade >

    </C.Main >
  );
}
