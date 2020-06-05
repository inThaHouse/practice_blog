import { graphql, useStaticQuery } from 'gatsby'

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map((data: any) => {
    return {
      title: data.frontmatter.title,
      author: data.frontmatter.author,
      slug: data.frontmatter.slug,
      excerpt: data.excerpt,
    }
  })
}

export default useBlogPosts
