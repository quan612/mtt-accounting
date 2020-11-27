import styled from "styled-components"

export const ICPWrapper = styled.div`
  display: block;
  padding: 20px 0;
  margin-bottom: 50px;

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  }

  .icp_img {
    @media only screen and (min-width: 600px) {
      width: 50%;
      text-align: center;
      padding: 0 1rem 0 0;
    }

    img {
      box-sizing: border-box;
      width: 100%;
      transition: 0.3s ease-in-out;

      @media (min-width: 600px) {
        /* height: 300px; */
        width: 100%;
        max-width: 600px;
      }
    }
  }

  .icp_content {
    @media only screen and (min-width: 600px) {
      width: 50%;
      max-width: 28em;
    }

    h3 {
      font-size: 2.25rem;
      font-weight: 500;
      color: #056aae;
      line-height: 1.2;
      margin-bottom: 0.5em;
    }

    p {
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      color: #727272;
    }
  }
`
