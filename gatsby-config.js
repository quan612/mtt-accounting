/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  siteMetadata: {
    title: "Minh Trang Tran Tax & Consulting Service",
    titleTemplate: "%s | Helping people in all aspects of accounting",
    description: "Providing variety of accounting services",
    author: "Minh Trang Tran",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://xbaccountax.ca",
    twitterUsername: "@mttran",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Raleway, Martel Sans",
            variable: true,
            weights: ["200..900"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
