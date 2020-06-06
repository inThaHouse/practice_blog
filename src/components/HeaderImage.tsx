import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 40vh;
`

const HeaderImage = (): React.ReactElement => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ff7-wp.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground
      Tag='section'
      fluid={image.sharp.fluid}
      fadeIn='soft'></ImageBackground>
  )
}

export default HeaderImage
