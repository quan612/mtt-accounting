import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { ResourcesContainer } from "./style"

const Resources = () => {
  const title = "Resources"
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "resource-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ResourcesContainer id="resources">
      <div className="content-container">
        <BackgroundImage
          Tag="section"
          fluid={data.file.childImageSharp.fluid}
          className="image-wrapper"
        >
          <div className="special-section">
            <h2>{title}</h2>
          </div>
        </BackgroundImage>
        <div className="resource-links">
          <ol>
            <li>
              <a
                href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
                target="_blank"
              >
                Ontario Tax Test form
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
                target="_blank"
              >
                Ontario Tax Test form
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
                target="_blank"
              >
                Ontario Tax Test form
              </a>
            </li>
          </ol>
        </div>
      </div>
    </ResourcesContainer>
  )
}

export default Resources
