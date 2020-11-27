import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"

import Services from "../components/Services"
import Resources from "../components/Resources"
import About from "../components/About"
import Contact from "../components/Contact"
import { Link } from "react-scroll"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <Banner />
      <Services />
      <About />
      <Resources />
      <Contact />
    </Layout>
  </>
)
