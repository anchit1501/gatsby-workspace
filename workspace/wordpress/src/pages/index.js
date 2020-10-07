import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Post from '../posts/index'
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allWpPost.edges.map(k => <Post post={k.node} key={k.node.title} />)}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query 
    {
        allWpPost {
            edges {
              node {
                content
                slug
                title
              }
            }
          }
    
  }`
