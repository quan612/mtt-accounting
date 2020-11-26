import styled from "styled-components"

export const ResourcesContainer = styled.div`
  padding: 100px 30px;
  background-color: #eef1f1;

  .gatsby-image-wrapper {
    height: 50vh;
  }

  .image-wrapper.gatsby-image-wrapper::before,
  .image-wrapper.gatsby-image-wrapper::after {
    top: -90px;
    filter: brightness(40%);
  }

  /* .content-container {
    @media (min-width: 1200px) {
      max-width: 1100px;
    }
  } */

  .resource-links {
    color: black;

    li {
      color: #a3573d;
      font-size: 1.7rem;
      line-height: 1.8rem;
      padding-bottom: 0.8rem;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`
