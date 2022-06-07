import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  max-width: 1116px;
  height: 5.625rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    height: 5.625rem;
    a {
      display: inline-block;
      font-size: 1.75rem;
      height: 5.625rem;
      line-height: 5.625rem;
      position: relative;

      & + a {
        margin-left: 3.125rem;
      }
      transition: 1s;

      &::after {
        content: "";
        width: 0;
        height: 2px;
        background: var(--green-100);
        bottom: 0;
        left: 0;
        position: absolute;
      }

      &:hover {
        &::after {
          content: "";
          width: 100%;
          height: 2px;
          background: var(--green-100);
          bottom: 0;
          left: 0;
          position: absolute;
          transition: 0.5s;
        }
      }
    }
  }
`;
