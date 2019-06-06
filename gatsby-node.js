const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // This allows us to do create page instead of actions.createPage

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `posts${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postlayout.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}
