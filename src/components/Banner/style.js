import styled from "styled-components"

export const BannerWrapper = styled.div`
  .gatsby-image-wrapper {
    height: 100vh;
    color: #fff;
  }

  .hero-image::before {
    filter: brightness(40%);
  }

  .hero-content {
    height: 100%;
    width: 100%;
    max-width: 400px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    z-index: 999;

    @media (min-width: 768px) {
      max-width: 650px;
    }

    h1 {
      font-size: 4rem;
      line-height: 1.5;

      span {
        background: -webkit-linear-gradient(45deg, #4056a1, #03a9f4);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      margin-top: 0;
      margin-bottom: 2rem;
      line-height: 1.2;
      font-size: 1.15rem;

      @media (min-width: 768px) {
        font-size: 1.35rem;
      }

      @media (min-width: 1200px) {
        font-size: 1.5rem;
      }
    }

    button,
    .anchor {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      max-width: 800px;

      h1 {
        font-size: 4rem;
      }
    }

    @media (min-width: 1200px) {
      h1 {
        font-size: 5rem;
      }
    }
  }
`
