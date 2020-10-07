const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
        allWpPage {
            edges {
              node {
                title
                content
                slug
              }
            }
          }
    }

  `).then(result => {
        console.log('post', result)
        result.data.allWpPage.edges.forEach(({ node }) => {
            createPage({
                path: node.slug,
                component: path.resolve(`./src/pages/page-2.js`),
                context: {
                    slug: node.slug,
                    title: node.title,
                    content: node.content
                },
            })
        })
    }
    )
}