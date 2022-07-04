import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Olá, sou o Lucas Gonçalves! Desenvolvedor 
        Front-end há mais de 1 ano com conhecimentos sólidos nas tecnologias HTML, CSS, 
        Javascript e React. Sou graduado em Sistemas de Informação e atuo na área de TI há mais de 
        5 anos." />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
