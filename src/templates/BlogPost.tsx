import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

// @ts-ignore
const PostTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <p>created by {mdx.frontmatter.author}</p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default PostTemplate
