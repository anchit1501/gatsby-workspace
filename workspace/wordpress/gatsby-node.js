const templateHandler = require('./utils');
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
      createPage({
        path: node.slug,
        component: path.resolve(templateHandler(node.slug)),
        context: {
          slug: node.slug,
          title: node.title,
          content: node.content
        },
      })
      //   createPage({
      //     path: node.slug,
      //     component: path.resolve(`./src/templates/${node.slug}.js`),
      //     context: {
      //       slug: node.slug,
      //       title: node.title,
      //       content: node.content
      //     },
      //   })
    })
  }
  )
}