import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ pageContext }) => {

    const { title, content } = pageContext
    console.log('context', pageContext)
    return (
        <Layout>
            <SEO title={title} />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>)
}
export default About
