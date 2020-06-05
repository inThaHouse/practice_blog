import React from 'react'
import useSiteMetadata from '../hooks/use-siteMetadata'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/core'
import GlobalStyles from './GlobalStyles'
import Navigation from './Navigation'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): React.ReactElement => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Navigation />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 70vw;
        `}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
