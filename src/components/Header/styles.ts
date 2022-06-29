import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  max-width: 1116px;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.625rem;
    .menu {
      li {
        display: inline-block;
        font-size: 1.75rem;
        line-height: 5.625rem;
        position: relative;

        & + li {
          margin-left: 3.125rem;
        }

        a {
          transition: 0.5s;

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
    }

    .toggle {
      font-size: 3rem;
      color: var(--green-100);
      cursor: pointer;
      visibility: hidden;
      opacity: 0;
    }

    .closeMenu {
      position: fixed;
      top: 1.5rem;
      right: 1rem;
      visibility: hidden;
      opacity: 0;
      z-index: 1;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 3rem;
    }

    nav {
      
      .menu {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        transition: 0.2s;

        width: 100%;
        height: 100vh;

        top: -50rem;
        left: 0;

        margin: 0;

        li + li {
          margin: 0;
        }
      }

      .openMenu {
        visibility: visible;
        opacity: 1;
      }
    }

    nav.show {
      .menu {
        top: 0;
        background: var(--blue-800);
        z-index: 1;
      }
      .closeMenu {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;
