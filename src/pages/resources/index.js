import React from "react"
import Layout from "../../components/layout"

import Resources from "../../components/Resources"
import Contact from "../../components/Contact"

const ResourcePage = ({ location }) => (
  <>
    <Layout>
      <Resources location={location} />
      <Contact />
    </Layout>
  </>
)

export default ResourcePage
