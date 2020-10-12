import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {
                post.featuredImage && <img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
            }
        </div>
    )
}