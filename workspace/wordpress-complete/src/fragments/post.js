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