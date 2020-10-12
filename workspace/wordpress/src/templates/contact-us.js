import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactUs = (data) => {

    // const { title, content } = context
    console.log('context contact', data)
    return (
        <Layout>
            <SEO title="Contact" />
            {/* <h1>{title}</h1> */}
            <h2>ContactUs</h2>
            {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        </Layout>)
}
export default ContactUs
