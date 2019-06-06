import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

// Static query
// Can be used anywhere. Does not accept variables. Also Can't use context.

// Page Query
// Must be used on pages

const postlayout = props => {
  const { markdownRemark } = props.data
  const { location } = props
  return (
    <Layout location={location}>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
    </Layout>
  )
}

export default postlayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
