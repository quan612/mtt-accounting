import styled from "styled-components"

export const CardWrapper = styled.div`
  flex-basis: 45%;
  /* flex-grow: 1; */
  padding: 0 20px;
  margin-left: -20px;
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    flex-basis: 47%;
    flex-grow: 1;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    padding: 0 10px;
  }

  img {
    box-sizing: border-box;
    width: 100%;
    height: 340px;
    transition: 0.3s ease-in-out;
    border-radius: 20px;

    @media (min-width: 768px) {
      height: 280px;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 5px 10px 5px 0px rgba(214, 214, 214, 1);
      transition: 0.3s ease-in-out;
    }
  }

  h3 {
    text-align: center;
    margin-top: 10px;
  }

  p {
    text-align: left;
  }
`
