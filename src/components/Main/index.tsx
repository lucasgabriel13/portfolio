import { HtmlHTMLAttributes } from "react";
import { motion } from "framer-motion";

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

      <motion.section
        className="title"
        animate={{ x: [-1000, 8] }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1>Lucas Gonçalves</h1>
        <h2>Desenvolvedor Front-end</h2>
        <span>Desenvolvimento Web | Front-end | Tecnologia</span>
      </motion.section>

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
  );
}
