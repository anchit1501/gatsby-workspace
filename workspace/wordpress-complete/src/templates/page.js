import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import Img from 'gatsby-image'
import '../assets/scss/index.css'
export default ({ pageContext }) => {

  const page = pageContext.page

  return (
    <Layout>
      <SEO title={page.title} />
      <h1>{page.title}</h1>
      <Img
        className="image-container"
        fluid={page.featuredImage.node.localFile.childImageSharp.fluid}
        alt=""
      />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />

    </Layout>
  )
}