import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ pageContext }) => {
    const post = pageContext.post

    return (
        <Layout>
            <SEO title={post.title} />

            <h1> {post.title} </h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

        </Layout>
    )
}
