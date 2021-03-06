import React from "react"
import { graphql } from "gatsby"
import {
  Text,
  TextVariants,
  TextContent,
} from "@patternfly/react-core"
import Layout from "../gatsby-theme-patternfly/components/Layout"
import BlogIndexLayout from "src/components/BlogIndexLayout"
import MetadataHeader from "src/components/SiteMetadata"

export default function BlogIndexPage( { data, pageContext, location } ) {
  
  return (
    <Layout>
      <MetadataHeader title="News" />
      <TextContent>
        <Text component={TextVariants.h1}>News</Text>
      </TextContent>
      <BlogIndexLayout data={data} pageContext={pageContext} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      skip: $skip,
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          timeToRead
          wordCount {
            words
          }
          fields {
            slug
          }
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            tags
            featured_image {
              alt
              src
              title
            }
            title
          }
        }
      }
    }
    allTags: allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`
