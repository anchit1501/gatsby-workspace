
export const postData = graphql`
  fragment PostData on WpPostConnection {
        edges {
          node {
            content
            slug
            title
            ...ImageData
          }
        }
  }`

export const imageData = graphql`
  fragment ImageData on WpPost{
    featuredImage {
      node {
        altText
        title
        caption
        sourceUrl
      }
    }
  }
  `