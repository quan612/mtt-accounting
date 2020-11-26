import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"

import Resources from "../components/Resources"
import About from "../components/About"
import Contact from "../components/Contact"
import { Link } from "react-scroll"

import PerkContainer from "../components/Perk/PerkContainer"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      {/* <Banner /> */}
      {/* <TextBlock
        id="about"
        title="Developing a new business is never easy, but Startup is here to help"
        paragraph="With a super-fast Gatsby powered website you have the perfect platform to get your idea off the ground. Its the perfect template to help turn your idea into a reality."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock> */}
      <TextBlockImg
        title="What We Do?"
        subtitle="We provide a diversity of services and offer flexible options through digital or mail services."
      >
        <PerkContainer />
      </TextBlockImg>
      <Resources />
      <About />

      <Contact />
    </Layout>
  </>
)
