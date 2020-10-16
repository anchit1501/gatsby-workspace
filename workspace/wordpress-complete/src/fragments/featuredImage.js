const FeaturedImageFragment = `
fragment FeaturedImageFragment on WpPage{
    featuredImage {
        node{
          altText
           ...GatsbyImageSharpFluid_srcSetWebp
          
        }
      }
}`
module.exports.FeaturedImageFragment = FeaturedImageFragment