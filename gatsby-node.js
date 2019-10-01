const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = async ({ node, getNode, actions }) => {

  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  
}

exports.createPages = async ({ graphql, actions }) => {  
    const { createPage } = actions
    const result = await graphql(`
    query {
        defi {
          tokens{
            name
            symbol
          }
        }
      }
    `)
    
    result.data.defi.tokens.forEach(({ symbol, name }) => {

        console.log(name);

        createPage({
          path: name,
          component: path.resolve(`./src/templates/earn.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            symbol: symbol,
          },
        })
        

      })
      
}