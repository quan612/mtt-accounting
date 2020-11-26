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
  margin: 0 auto;
  margin-top: 90px;

  @media screen and (max-width: 750px) {
    margin-top: 30px;
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

  .content_cell_80 {
    width: 80%;
  }

  .eib {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
`
