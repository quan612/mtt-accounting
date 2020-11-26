import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import styled from "styled-components"

const TextBlockImg = ({ title, children, subtitle, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "grey-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.15,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <BackgroundImage
      id="services"
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
    >
      <TextBlockImgWrapper>
        <div className="content-container">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 25 },
            }}
            transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
          >
            <div className="special-section">
              <h2>{title}</h2>
            </div>
            <p>{subtitle}</p>
          </motion.div>
          {children}
        </div>
      </TextBlockImgWrapper>
    </BackgroundImage>
  )
}

const TextBlockImgWrapper = styled.section`
  padding: 100px 30px;

  .content-container {
    @media (min-width: 1200px) {
      max-width: 1100px;
    }
  }

  p {
    margin-bottom: 50px;
    color: black;
  }
`

export default TextBlockImg
