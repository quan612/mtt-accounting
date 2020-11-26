import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background-color: #fff;
  padding-top: 100px;
  padding-left: 25px;
  padding-right: 25px;
  overflow: hidden;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    padding-top: 80px;
    text-align: center;
  }
`
export const FooterTopWrapper = styled.footer`
  display: block;
  position: relative;

  .eib {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  p {
    font-family: "Raleway";
    margin: 0;
  }

  p.footer_text {
    font-size: 18px;
    color: #4b4a4a;
    margin-bottom: 40px;
  }

  a._link_top {
    font-size: 20px;
    font-family: "Raleway";
    font-weight: 600;
    line-height: 25px;
    color: black;
    transition: all 0.2s ease-out;
    text-decoration: none;
  }

  .content_cell_50 {
    width: 50%;

    @media screen and (max-width: 750px) {
      margin-bottom: 12px;
      width: 100%;
    }
  }
`

export const FooterBottomWrapper = styled.footer`
  display: block;
  position: relative;
  margin-top: 90px;

  @media screen and (max-width: 750px) {
    margin-top: 50px;
  }

  .copy_wrapper,
  a._link {
    font-size: 13px;
    font-family: "Raleway";
    line-height: 28px;
    color: #4b4a4a;
    padding-bottom: 60px;
    text-decoration: none;
  }

  /* .content_cell {
    opacity: 0;
    -ms-transform: translate(0, -20px);
    -webkit-transform: translate(0, -20px);
    transform: translate(0, -20px);
} */

  .content_cell_80 {
    width: 80%;
  }
  .eib {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
`

// .credit {
//   font-size: 0.85rem;
//   margin-bottom: 0.5rem;

//   a {
//     padding: 0;
//     font-size: 0.85rem;
//     text-decoration: none;
//     background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
//     -webkit-background-clip: text;
//     background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// }

// a {
//   color: #fff;
//   font-size: 1.75rem;
//   padding: 0 0.5rem;

//   svg {
//     vertical-align: middle;
//   }
// }
