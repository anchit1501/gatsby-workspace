const PageTemplateFragment = `
    fragment PageTemplateFragment on WpPage {        
        title
        content
        slug
        ...FeaturedImageFragment
    }
`

module.exports.PageTemplateFragment = PageTemplateFragment