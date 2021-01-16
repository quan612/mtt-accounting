import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { ResourcesWrapper } from "./style"
import ResourceContent from "./ResourceContent"
import ResourceLink from "./ResourceLink"

const Resources = () => {
  const [meta, setMeta] = useState(null)

  const title = "Resources"

  let data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Discuss product requirements.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              fileName
              title
              tag
              date
              image
            }
            html
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    setMeta({
      frontmatter: data.allMarkdownRemark.edges[0].node.frontmatter,
      html: data.allMarkdownRemark.edges[0].node.html,
    })
  }, [data.allMarkdownRemark.edges])

  const setContentView = meta => {
    console.log(meta)
    setMeta(meta)
  }

  return (
    <ResourcesWrapper id="resources">
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

        <main className="mt-12">
          <div className="flex flex-wrap md:flex-no-wrap  mb-16">
            {/* <!-- main post --> */}
            {meta && <ResourceContent meta={meta} />}

            {/* <!-- sub-main posts --> */}
            <div className="w-full md:w-2/5 lg:w-2/5">
              <div className="ml-4">
                {data.allMarkdownRemark.edges &&
                  data.allMarkdownRemark.edges.map((edge, index) => {
                    let sub = {}
                    sub.frontmatter = edge.node.frontmatter
                    sub.html = edge.node.html
                    return (
                      <ResourceLink
                        key={index}
                        sub={sub}
                        setContentView={subContext =>
                          setContentView(subContext)
                        }
                      />
                    )
                  })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ResourcesWrapper>
  )
}

export default Resources
