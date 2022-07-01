import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  background: var(--blue-900);
  background-image: url('/images/background-main.svg');
  background-size: 100vw;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;

  font-size: 1.5rem;
  color: #a5a5a5;

  .rightGroup{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span{
      margin-bottom: 1rem;
    }

    .socialMedias {
    a {
      transition: color 0.3s;
      &:hover{
        color: var(--green-100);
      }

      & + a {
        margin-left: 1rem;
      }
    }
  }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }
`