import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ImageList from '../components/ImageList'
import useBlogPosts from '../hooks/use-BlogPosts'
import SmallHeader from '../components/SmallHeader'
import BlogList from '../components/BlogList'
import ButtonLink from '../components/Button'

export default () => {
  const blog = useBlogPosts()

  return (
    <Layout>
      <Hero />
      <SmallHeader header={'Some Random Images'} />
      <ImageList />
      <SmallHeader header={'Latest Blog Post'} />
      <BlogList blog={blog} />
      <ButtonLink
        primaryColor={'#fff'}
        secondaryColor={'#222'}
        buttonText={'See More Posts'}
        path={'blog'}
      />
    </Layout>
  )
}
