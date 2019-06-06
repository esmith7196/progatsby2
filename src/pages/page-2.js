import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'

const SecondPage = () => (
  <StaticQuery
    query={graphql`
      query front {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              excerpt
              frontmatter {
                title
                slug
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Page two" />
        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )}
  />
)

export default SecondPage
