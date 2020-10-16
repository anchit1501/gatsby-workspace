const PostDataFragment = `
  fragment PostDataFragment on WpPostConnection {
        edges {
          node {
            content
            slug
            title
          }
        }
  }`

module.exports.PostDataFragment = PostDataFragment