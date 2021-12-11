const path = require("path")
exports.onCreateWebpackConfig =  ({ actions }) => {
  // const { createPage } = actions
  actions.setWebpackConfig({
    resolve: {modules: [path.resolve(__dirname,"src"),"node_modules"]}
  })
}
