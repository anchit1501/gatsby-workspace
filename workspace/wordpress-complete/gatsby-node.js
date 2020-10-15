const createPages = require("./create/create-page")
// const createPosts = require("./create/create-post")

exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {
    await createPages({ actions, graphql, reporter }, options)
    // await createPosts({ actions, graphql, reporter }, options)
}