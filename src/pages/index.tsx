import Head from "next/head";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Profile } from "../components/Profile";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export default function Home() {

  return (
    <>
      <Head>
        <title>Lucas Gonçalves | Desenvolvedor Front-end</title>
      </Head>
      <Main />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
};