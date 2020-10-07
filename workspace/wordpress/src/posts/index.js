import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ post }) => {
    console.log('post', post)
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    )
}