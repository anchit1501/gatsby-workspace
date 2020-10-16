const Page = require.resolve("../src/templates/page.js")
const { GatsbyImageSharpFluid_srcSetWebp } = require("../src/fragments/srcSetWp.js")
const { PageTemplateFragment } = require("../src/fragments/page.js")
const { FeaturedImageFragment } = require('../src/fragments/featuredImage')
const GET_PAGES = `
${PageTemplateFragment}
${GatsbyImageSharpFluid_srcSetWebp}
${FeaturedImageFragment}
{
    allWpPage {
        edges {
          node {
            ...PageTemplateFragment
          }
        }
      }
}
`

const allPages = []
// let pageNumber = 0
const itemsPerPage = 10

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql, reporter }, options) => {

    /**
     * This is the method from Gatsby that we're going
     * to use to create pages in our static site.
     */
    const { createPage } = actions
    /**
     * Fetch pages method. This accepts variables to alter
     * the query. The variable `first` controls how many items to
     * request per fetch and the `after` controls where to start in
     * the dataset.
     *
     * @param variables
     * @returns {Promise<*>}
     */
    const fetchPages = async (variables) =>
        /**
         * Fetch pages using the GET_PAGES query and the variables passed in.
         */
        await graphql(GET_PAGES, variables).then(({ data }) => {
            /**
             * Extract the data from the GraphQL query results
             */

            const edges = data.allWpPage.edges

            /**
             * Map over the pages for later creation
             */
            edges
                && edges.map((pages) => {
                    allPages.push(pages.node)
                })

            /**
             * If there's another page, fetch more
             * so we can have all the data we need.
             */
            // if (hasNextPage) {
            //     pageNumber++
            //     reporter.info(`fetch page ${pageNumber} of pages...`)
            //     return fetchPages({ first: itemsPerPage, after: endCursor })
            // }

            /**
             * Once we're done, return all the pages
             * so we can create the necessary pages with
             * all the data on hand.
             */
            return allPages
        })

    /**
     * Kick off our `fetchPages` method which will get us all
     * the pages we need to create individual pages.
     */
    await fetchPages({ first: itemsPerPage, after: null }).then((wpPages) => {
        wpPages && wpPages.map((page) => {
            let pagePath = `${page.slug}`

            /**
             * If the page is the front page, the page path should not be the uri,
             * but the root path '/'.
             */
            // if (page.isFrontPage) {
            //     pagePath = '/'
            // }

            createPage({
                path: pagePath,
                component: Page,
                context: {
                    page: page,
                },
            })

            reporter.info(`page created: ${page.slug}`)
        })

        reporter.info(`# -----> PAGES TOTAL: ${wpPages.length}`)
    })
}