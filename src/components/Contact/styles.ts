import styled from "styled-components";

export const Section = styled.section`
  max-width: 1116px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 9.25rem 0;
  

  .content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 4.5rem;
    gap: 10rem;
    flex-wrap: wrap;
  }

  .contactInformation{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6rem;

    .title{
      h3{
        font-size: 2.375rem;
      }
      p {
        font-size: 1.5rem;
        margin-top: 2.25rem;
      }
    }

    .socialMediasGroup{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--green-400);

      a {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
        
        & + a {
          margin-top: 3rem;
        }

        transition: color 0.4s;
        &:hover {
          color: var(--white);
          
          span {
            color: var(--green-400);
          }
        }

        span {
          font-size: 1.3rem;
          color: var(--white);
        }
      }
    }
  }

  .contactForm{
      max-width: 30.5rem;
      max-height: 33.75rem;
      background-color: var(--green-800);
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      padding: 1.5rem 3rem;

      label{
        font-size: 1.375rem;
        color: var(--white);
      }
      input {
        width: 100%;
        height: 3.5rem;
        border: 1px solid #545454;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
        font-size: 1.375rem;
        background: transparent;
        color: var(--white);
        outline: none;

        &:focus{
          border: 1px solid var(--green-100);
        }

        &.error{
          margin-bottom: 0;
          border: 1px solid red;
        }
      }

      .error{
        font-size: 1.2rem;
        color: red;
        margin-bottom: 1rem;
      }

      textarea {
        width: 100%;
        height: 10rem;
        outline: none;
        background: transparent;
        border: 1px solid #545454;
        border-radius: 8px;
        padding: 1rem;
        font-size: 1.375rem;
        color: var(--white);
        resize: none;

        &:focus{
          border: 1px solid var(--green-100);
        }

        &.error{
          margin-bottom: 0;
          border: 1px solid red;
        }
      }

      button{
        width: 11.375rem;
        height: 3.375rem;
        margin-top: 2rem;
        border-radius: 8px;
        border: 0;
        background: var(--green-400);
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--white);
        margin-left: auto;

        transition: filter 0.3s;

        &:hover{
          filter: brightness(0.8);
        }
      }
    }

    @media screen and (max-width:1024px){
      .content{
        grid-template-columns: 1fr;
      }

      .contactInformation{
        padding: 0 2rem;
      }

      .contactForm{
        width: 100%;
        margin: 0 auto;
      }
    }
`