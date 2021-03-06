import React from 'react'
import { css } from '@emotion/core'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { Colors } from '../models/enum/Colors'
import { Breakpoints } from '../models/enum/Breakpoints'
import { BlogPostType } from '../models/BlogPostType'

interface BlogListProps {
  blog: BlogPostType[]
  isFull?: boolean
  imgWidth: string
}

interface BlogLinkProps {
  blog: BlogPostType
  isFull?: boolean
  imgWidth: string
}

const blogListTextInfoStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;

  @media (max-width: ${Breakpoints.TABLET}) {
    margin: 0;
  }
`

const BlogLink = ({
  blog,
  isFull,
  imgWidth,
}: BlogLinkProps): React.ReactElement => {
  const blogLinkStyles = css`
    color: ${Colors.BLACK};
    text-decoration: none;
    outline: none;
    font-size: 22px;
    padding: 5px 0;
    font-family: 'Noto sans', sans-serif;
    line-height: 1.3;
    font-weight: 700;
    border-bottom: 1px solid ${Colors.LIGHT_GRAY};
    text-transform: capitalize;
    display: flex;
    align-items: center;
    transition: all 0.1s;
    width: 100%;

    @media (max-width: ${Breakpoints.TABLET}) {
      font-size: 13px;
    }

    &:last-of-type {
      border-bottom: 0;
    }

    &:hover {
      border-bottom: 2px solid ${Colors.LIGHT_GRAY};
    }
  `

  const imageStyles = css`
    width: ${imgWidth};
    margin-right: 25px;

    @media (max-width: ${Breakpoints.MOBILE}) {
      margin-right: 5px;
    }
  `

  const excerptStyles = css`
    @media (max-width: ${Breakpoints.MOBILE}) {
      font-size: 11px;
      line-height: 1;
    }
  `

  const readMoreStyles = css`
    font-weight: bold;
  `

  const blogTextInfoContainerStyles = css`
    display: flex;
    flex-direction: column;
    width: 50%;
  `

  return (
    <>
      <Link css={blogLinkStyles} key={blog.slug} to={`/${blog.slug}`}>
        <Image css={imageStyles} fluid={blog.image.sharp.fluid} />
        <div css={blogTextInfoContainerStyles}>
          {blog.title}
          {isFull && (
            <div>
              <p css={excerptStyles}>{blog.excerpt}</p>
              <p css={readMoreStyles}>read more &#8594;</p>
            </div>
          )}
        </div>
      </Link>
    </>
  )
}

const BlogList = ({
  blog,
  isFull,
  imgWidth,
}: BlogListProps): React.ReactElement => (
  <div css={blogListTextInfoStyles}>
    {blog.map((post: BlogPostType, index: number) => (
      <BlogLink isFull={isFull} key={index} blog={post} imgWidth={imgWidth} />
    ))}
  </div>
)

export default BlogList
