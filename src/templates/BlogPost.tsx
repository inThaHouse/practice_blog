import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import MainHeader from '../components/MainHeader'
import SmallHeader from '../components/SmallHeader'
import ButtonLink from '../components/Button'

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
      <MainHeader headerText={mdx.frontmatter.title} alignment='center' />
      <SmallHeader
        header={`Written by ${mdx.frontmatter.author}`}
        margin={'10px 0'}
      />
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <ButtonLink
        path='blog'
        primaryColor={'white'}
        secondaryColor={'black'}
        buttonText={'See more Blog Posts!'}
      />
    </Layout>
  )
}

export default PostTemplate
