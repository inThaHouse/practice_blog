import React from 'react'
import { css } from '@emotion/core'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { BlogPostType } from '../models/BlogPostType'

interface BlogListProps {
  blog: BlogPostType[]
}

interface BlogLinkProps {
  blog: BlogPostType
}

const blogListCtnStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const blogLinkStyles = css`
  color: #222;
  text-decoration: none;
  outline: none;
  font-size: 22px;
  padding: 5px 0;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.3;
  font-weight: 700;
  border-bottom: 1px solid #f3f3f3;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  transition: all 0.1s;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  &:hover {
    border-bottom: 2px solid #f3f3f3;
  }
`

const BlogLink = ({ blog }: BlogLinkProps): React.ReactElement => {
  return (
    <Link css={blogLinkStyles} key={blog.slug} to={`/${blog.slug}`}>
      <Image
        css={css`
          width: 80px;
          height: 80px;
          margin-right: 20px;
        `}
        fluid={blog.image.sharp.fluid}
      />
      {blog.title}
    </Link>
  )
}

const BlogList = ({ blog }: BlogListProps): React.ReactElement => (
  <div css={blogListCtnStyles}>
    {blog.map((post: BlogPostType, index) => (
      <BlogLink key={index} blog={post} />
    ))}
  </div>
)

export default BlogList
