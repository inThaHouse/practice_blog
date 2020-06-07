import React from 'react'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import MainHeader from '../components/MainHeader'
import SmallHeader from '../components/SmallHeader'
import useBlogPosts from '../hooks/use-BlogPosts'
import BlogList from '../components/BlogList'
import { css } from '@emotion/core'
import SimpleProfile from '../components/SimpleProfile'

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
`

const blogListStyles = css`
  width: 80%;

  @media (max-width: 767px) {
    width: 100%;
  }
`

const profileStyles = css`
  width: 20%;

  @media (max-width: 767px) {
    display: none;
  }
`

export default () => {
  const blog = useBlogPosts()

  return (
    <Layout>
      <MainHeader headerText='The Blog!' alignment='center' />
      <SmallHeader
        header={'Where all the good shit happens!!'}
        margin={'10px 0 30px'}
      />
      <Container>
        <div css={blogListStyles}>
          <BlogList isFull={true} blog={blog} imgWidth={'50%'} />
        </div>
        <div css={profileStyles}>
          <SimpleProfile />
        </div>
      </Container>
    </Layout>
  )
}
