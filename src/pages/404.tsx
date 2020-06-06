import React from 'react'
import Layout from '../components/Layout'
import ButtonLink from '../components/Button'

export default () => (
  <Layout>
    <h1>You in tha wrong place..</h1>
    <ButtonLink
      path=''
      primaryColor={'white'}
      secondaryColor={'black'}
      buttonText={'Go To Homepage!'}
    />
  </Layout>
)
