import type { NextPage } from "next";
import Head from "next/head";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lucas Gonçalves | Desenvolvedor Front-end</title>
      </Head>
      <Main />
      <Profile />
    </>
  );
};

export default Home;
