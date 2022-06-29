import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Fragment } from "react";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";

import GlobalStyle from "../../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
