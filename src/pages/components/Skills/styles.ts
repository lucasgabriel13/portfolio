import styled from "styled-components";

export const Section = styled.section`
    max-width: 1116px;
    margin:  10rem auto;
    
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

    .skills{
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