import styled from "styled-components"

export const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  background: black;

  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;

    img {
      width: 90px;

      @media (min-width: 768px) {
        width: 100px;
      }

      @media (min-width: 1200px) {
        width: 120px;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: linear-gradient(45deg, #060c21, #0d0139);
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;
    padding-right: 10px;

    li {
      list-style: none;
      font-size: 1.5rem;
      font-weight: 500;
      margin-left: 0;
      padding: 0.75rem 0;
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: #fff;
        transition: 0.3s;
        padding-bottom: 5px;

        &.active {
          border-bottom: 2px solid #4056a1;
        }
      }
      &:hover {
        cursor: pointer;
        a {
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: black;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;

      li {
        margin-left: 1rem;
      }
    }
  }
`
