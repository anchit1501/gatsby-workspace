export default imageData = graphql`
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