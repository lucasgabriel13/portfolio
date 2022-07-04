import Head from "next/head";
import { ToastContainer } from "react-toastify";
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
        <meta name="description" content="Olá, sou o Lucas Gonçalves! Desenvolvedor 
        Front-end há mais de 1 ano com conhecimentos sólidos nas tecnologias HTML, CSS, 
        Javascript e React. Sou graduado em Sistemas de Informação e atuo na área de TI há mais de 
        5 anos." />
        <meta property='og:title' content='Lucas Gonçalves | Desenvolvedor Front-end' />
        <meta
          property='og:description'
          content='Desenvolver Front-end com conhecimentos sólidos nas tecnologias HTML, CSS, 
          Javascript e React'
        />
        <meta property='og:url' content='https://lucasgoncalves.vercel.app/' />
        <meta property='og:type' content='website' />
      </Head>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        autoClose={5000}
        draggable
        pauseOnHover
      />
      <Main />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};