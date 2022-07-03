import styled from "styled-components";

export const Main = styled.main`
  max-width: 1116px;
  height: calc(100vh - 6.25rem);
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: -1;

  position: relative;

  #backgroundImageMain {
    position: absolute;
    z-index: -1;
    margin-left: -18rem;
  }

  #scrollDown {
    width: 3rem;
    position: absolute;
    bottom: -3rem;
    left: 50%;
  }

  .title {
    h1 {
      font-size: 3.75rem;
      font-weight: 700;
      margin-bottom: -10px;
    }

    h2 {
      font-size: 2.375rem;
      color: var(--green-100);
      font-weight: 700;
    }

    span {
      font-size: 2rem;
      font-weight: 400;
    }
  }


  @media screen and (max-width: 1300px) {
    
    #backgroundImageMain {
      max-width: 100vw;
      margin: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;

    .photoPerfilMain {
      img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    #backgroundImageMain {
      width: 100vw;
    }
    #scrollDown {
      bottom: 3.8rem;
      left: 47%;
    }
    .title {
      margin-top: -5rem;
    }
    .photoPerfilMain {
      display: none;
    }
  }
`;
