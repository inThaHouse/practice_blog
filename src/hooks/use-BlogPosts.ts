import { graphql, useStaticQuery } from 'gatsby'
import { BlogPostType } from '../models/BlogPostType'

const useBlogPosts = (): BlogPostType[] => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)
  console.log(data)
  return data.allMdx.nodes.map((data: any) => ({
    title: data.frontmatter.title,
    author: data.frontmatter.author,
    slug: data.frontmatter.slug,
    excerpt: data.excerpt,
    image: data.frontmatter.image,
  }))
}

export default useBlogPosts
