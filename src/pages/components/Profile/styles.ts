import styled from "styled-components";

export const Section = styled.section`
  max-width: 1116px;
  margin: 12rem auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .profileContact{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    .socialMedias{
      font-size: 3.75rem;
      color: var(--green-400);

      a {
        display: inline-block;
        transition: 0.5s;

        &:hover{
          transform: translateY(-2px);
        }

        & + a {
          margin-left: 3.375rem;
        }
      }
      
    }
  }

  .profileDescription {
    max-width: 640px;

    h2 {
      font-size: 3rem;

      div{
        display: inline-block;
        margin-left: 1rem;
      }
    }

    p {
      font-size: 2rem;
      margin-top: 2rem;
    }
    
  }

`