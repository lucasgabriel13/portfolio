import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    font-size: 2rem;
  }

  img {
    width: 6rem;
    height: 6rem;
  }

  @media screen and (max-width: 425px) {
    h3 {
      font-size: 1.5rem;
    }
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`