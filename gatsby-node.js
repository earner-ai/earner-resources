const { createFilePath } = require(`gatsby-source-filesystem`)

require("source-map-support").install()
require("ts-node").register()

exports.onCreateNode = async options => {
  return Promise.all([
    // require("./src/lib/gatsby-onCreateNode-readingTime").onCreateNode(options),
    // require("./src/lib/gatsby-onCreateNode-excerpt").onCreateNode(options)
    // add your other onCreateNode functions here
  ])
}

exports.createPages = require("./src/lib/createPages").createPages

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/me/)) {
    page.matchPath = `/me/*`

    // Update the page.
    createPage(page)
  }
}
