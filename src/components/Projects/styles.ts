import styled from 'styled-components'

export const Section = styled.section`
  max-width: 1116px;
  margin: 0 auto 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
      display: flex;
      align-items: center;
      gap: 20px;
      
      h3{ 
        font-size: 4rem;
      }
    }

  .projectsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap:5.25rem;
    flex-wrap: wrap;

    .projectContent{
      max-width: 19rem;
      max-height: 28.75rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--green-800);
      border-radius: 8px;
      position: relative;
      margin-top: 2.25rem;
      padding: 1.25rem;

      &::after {
        content: "";
        width: 80%;
        height: 0.625rem;
        background: var(--green-linear);
        position:absolute;
        border-radius: 8px;
        margin: -1.25rem auto;
      }
      
      h2 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--white);
      }

      img{
        width: 100%;
      }

      p {
        font-size: 1.3rem;
        line-height: 24px;
        letter-spacing: 0.05em;
        margin-top: 1.25rem;
        max-height: 6.875rem;
      }

      footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
        margin-top: 2.25rem;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 8.375rem;
          height: 2.875rem;
          background: var(--blue-900);
          border-radius: 8px;
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--green-400);

          transition: 0.5s;

          &:hover {
            background-color: var(--green-400);
            color: var(--white);
          }
        }
      }

    }

  }

  .githubLink{
      margin-top: 4.125rem;
      color: var(--green-400);
      display: flex;
      align-items: center;  
      gap: 9px;
      position: relative;

      span{
        font-size:2.25rem;
        text-transform:uppercase;
        font-weight: 700;
        color: var(--white);
      }


      &::before{
        content: "";
        width: 0;
        height:2px;
        background: var(--green-400);
        position: absolute;
        bottom: 0;
        right: 0;
        transition: 0.2s;
      }

      &:hover{
        &::before{
          content: "";
          width: 83%;
          height:2px;
          background: var(--green-400);
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
`