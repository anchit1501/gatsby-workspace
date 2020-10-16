const GatsbyImageSharpFluid_srcSetWebp = `
    fragment GatsbyImageSharpFluid_srcSetWebp on WpMediaItem {
      localFile {
        childImageSharp {
            fluid {
              srcSetWebp
            }
          }
    }
  }
`

module.exports.GatsbyImageSharpFluid_srcSetWebp = GatsbyImageSharpFluid_srcSetWebp