import styled from "styled-components"

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  padding: 100px 25px 0;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (max-width: 750px) {
    padding-top: 80px;
    text-align: center;
  }
`
export const FooterTopWrapper = styled.footer`
  display: block;
  position: relative;
  text-align: center;

  .eib {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  p {
    margin: 0;
  }

  p.footer_text {
    margin-bottom: 40px;
  }

  a._link_top {
    font-size: 20px;
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
  text-align: center;

  @media screen and (max-width: 750px) {
    margin-top: 30px;
  }

  .copy_wrapper,
  a._link {
    font-size: 13px;
    line-height: 28px;
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
