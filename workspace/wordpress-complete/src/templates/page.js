import React from "react"

import Layout from '../components/layout'
import SEO from "../components/seo"


export default ({ pageContext }) => {

  const page = pageContext.page

  return (
    <Layout>
      <SEO title={page.title} />

      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />

    </Layout>
  )
}