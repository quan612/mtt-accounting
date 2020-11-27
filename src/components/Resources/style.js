import styled from "styled-components"

export const ResourcesWrapper = styled.div`
  /* background-color: #eef1f1; */
  background-color: #fff;

  .gatsby-image-wrapper {
    height: 50vh !important;
  }

  .image-wrapper.gatsby-image-wrapper::before,
  .image-wrapper.gatsby-image-wrapper::after {
    top: 0;
    /* filter: brightness(80%); */
  }

  .resource-links {
    color: black;
    padding: 80px 30px;

    li {
      color: #3f51b5;
      font-size: 1.7rem;
      line-height: 1.8rem;
      padding-bottom: 0.8rem;
      font-weight: 400;
      letter-spacing: 0.02em;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`
