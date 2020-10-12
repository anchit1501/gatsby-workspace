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
    result.data.allWpPage.edges.forEach(({ node }) => {
      console.log('node', node)
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/${node.slug}.js`),
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