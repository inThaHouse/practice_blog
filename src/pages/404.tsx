import React from 'react'
import Layout from '../components/Layout'
import ButtonLink from '../components/Button'
import MainHeader from '../components/MainHeader'
import SmallHeader from '../components/SmallHeader'
import { Colors } from '../models/enum/Colors'

export default () => (
  <Layout>
    <MainHeader headerText={'You in tha wrong place..'} alignment='center' />
    <SmallHeader header={'Click below to find the light!'} margin='10px 0' />
    <ButtonLink
      path=''
      primaryColor={Colors.WHITE}
      secondaryColor={Colors.BLACK}
      buttonText={'Go To Homepage!'}
    />
  </Layout>
)
