import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  :root{
    --gray-400: #a5a5a5;

    --green-100: #00da9d;
    --green-400: #009fa1;
    --green-linear: linear-gradient(rgba(0, 218, 155, 1), rgba(0, 159, 161, 1));

    --blue-800: #132733;
    --blue-900: #0d1c25;

    --html-color: #ff4e1d;
    --css-color: #0074be;
    --javascript-color: #f7df1e;
    --react-color: #05a5d1;
    --react-native-color: #00d8ff;
    --sass-color: #d56ea3;

    --white: #ffffff;
  }

  html {
    scroll-behavior: smooth;
  }

  body { 
    background: var(--blue-800);
    color: var(--white);
    overflow-x: hidden;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //1rem = 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 1rem = 14px
    }
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Smooch Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* ---- Scroll Bar ---- */

  * {
    &::-webkit-scrollbar{
      width: 1rem;           
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--green-100);    /* color of the scroll thumb */
      border-radius: 50px;       /* roundness of the scroll thumb */
      border: 5px solid var(--blue-800);
    }  
}


`;

export default GlobalStyle;
