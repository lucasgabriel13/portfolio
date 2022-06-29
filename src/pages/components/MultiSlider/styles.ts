import styled from 'styled-components';

export const Div = styled.div`
    .skills {
      display: flex;
      align-items: center;
      gap: 20;
      max-width: 1116px;
      margin-top: 3rem;
    }

    @media screen and (max-width: 1075px) {
      .skills{
        max-width: 85%;
        padding: 0  1rem;
      }
    }
`