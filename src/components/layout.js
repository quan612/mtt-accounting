import React from "react"
import styled from "styled-components"
import "typeface-gothic-a1"
import "./reset.css"
import Navbar from "../components/Navbar/navbar"
import Footer from "./Footer"
import SEO from "../components/Seo/seo"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <SEO />
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  /* font-family: "Gothic A1", sans-serif; */
  font-family: "Raleway", sans-serif;
  background-color: #fff;

  section {
    padding: 100px 30px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 1.4;
  }

  h1 {
    @media (max-width: 768px) {
      font-size: 4rem;
    }

    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.3;
    }

    @media (min-width: 1080px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 3rem;
    text-align: left;
    background: -webkit-linear-gradient(45deg, #f441a5, #f441a5);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 750px) {
      font-size: 2.4rem;
    }
  }

  h3 {
    color: #ff4f7d;
    font-size: 1.5rem;
    @media screen and (max-width: 750px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-family: "Martel Sans", sans-serif;
    font-size: 0.875rem;
    line-height: 1.45;
    margin: 1rem 0;
    color: #4b4a4a; //#4b4a4a #727272

    @media (min-width: 768px) {
      font-size: 1rem;
    }

    @media (min-width: 1080px) {
      font-size: 1rem;
      line-height: 1.4;
    }
  }

  .content-container {
    margin: 0 auto;
    width: 100%;

    @media (min-width: 1200px) {
      max-width: 1100px;
    }
  }

  .flex-container {
    display: flex;

    &.trio-block {
      flex-direction: column;
      justify-content: center;

      @media (min-width: 991px) {
        flex-direction: row;
      }
    }
  }

  .special-section::before {
    border-bottom: 2px solid #f441a5;
    display: block;
    content: "";
    float: left;
    width: 120px;
    height: 30px;
    margin-left: -90px;
    margin-right: 20px;
  }

  .text-center {
    text-align: center;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }

  .sr-only-focusable:focus,
  .sr-only-focusable:active {
    clip: auto !important;
    -webkit-clip-path: none !important;
    clip-path: none !important;
    height: auto !important;
    margin: auto !important;
    overflow: visible !important;
    width: auto !important;
    white-space: normal !important;
  }
`

export default Layout
