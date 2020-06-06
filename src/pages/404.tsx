import React from 'react'
import Layout from '../components/Layout'
import ButtonLink from '../components/Button'
import MainHeader from '../components/MainHeader'
import SmallHeader from '../components/SmallHeader'

export default () => (
  <Layout>
    <MainHeader headerText={'You in tha wrong place..'} alignment='center' />
    <SmallHeader header={'Click below to find the light!'} margin='10px 0' />
    <ButtonLink
      path=''
      primaryColor={'white'}
      secondaryColor={'black'}
      buttonText={'Go To Homepage!'}
    />
  </Layout>
)
