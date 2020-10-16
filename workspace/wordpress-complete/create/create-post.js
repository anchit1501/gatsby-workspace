const Page = require.resolve("../src/templates/post.js")
const { PostDataFragment } = require('../src/fragments/post.js')

const GET_PAGES = `
${PostDataFragment}
query 
  {
      allWpPost {
        ...PostDataFragment
        }
  
}`

const allPosts = []
let pageNumber = 0
const itemsPerPost = 10

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
    const fetchPost = async (variables) =>
        /**
         * Fetch pages using the GET_PAGES query and the variables passed in.
         */
        await graphql(GET_PAGES, variables).then(({ data }) => {
            /**
             * Extract the data from the GraphQL query results
             */

            const edges = data.allWpPost.edges

            /**
             * Map over the pages for later creation
             */
            edges
                && edges.map((posts) => {
                    allPosts.push(posts.node)
                })

            /**
             * If there's another page, fetch more
             * so we can have all the data we need.
             */


            /**
             * Once we're done, return all the pages
             * so we can create the necessary pages with
             * all the data on hand.
             */
            return allPosts
        })

    /**
     * Kick off our `fetchPost` method which will get us all
     * the pages we need to create individual pages.
     */
    await fetchPost({ first: itemsPerPost, after: null }).then((wpPosts) => {
        wpPosts && wpPosts.map((post) => {
            let postPath = `post/${post.slug}`

            /**
             * If the page is the front page, the page path should not be the uri,
             * but the root path '/'.
             */
            // if (page.isFrontPage) {
            //     postPath = '/'
            // }

            createPage({
                path: postPath,
                component: Page,
                context: {
                    post: post,
                },
            })

            reporter.info(`post created: ${post.slug}`)
        })

        reporter.info(`# -----> PAGES TOTAL: ${wpPosts.length}`)
    })
}