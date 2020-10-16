const PostData = `
  fragment PostData on WpPostConnection {
        edges {
          node {
            content
            slug
            title
          }
        }
  }`

module.exports.PostData = PostData