import styled from "styled-components";

export const Main = styled.main`
  width: 1116px;
  height: calc(100vh - 6.25rem);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  #backgroundImageMain {
    position: absolute;
    z-index: -1;
    margin-left: -18rem;
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

    span{
      font-size: 2rem;
      font-weight: 400;
    }
  }
  
`;
