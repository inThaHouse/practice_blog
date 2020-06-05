import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ImageList from '../components/ImageList'
import useBlogPosts from '../hooks/use-BlogPosts'
import { Link } from 'gatsby'

export default () => {
  const blog = useBlogPosts()
  console.log(blog)
  return (
    <Layout>
      <Hero />
      <ImageList />
      <h2>latest blog post (still a lot of fucken work to do)</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {blog.map((post: any) => {
          return (
            <Link key={post.slug} to={`/${post.slug}`}>
              {post.slug}
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
