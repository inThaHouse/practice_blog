import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Breakpoints } from '../models/enum/Breakpoints'

const ImageContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

const imageStyle = css`
  width: 23%;
  background: #222;

  @media (max-width: ${Breakpoints.TABLET}) {
    width: 48%;
    margin-bottom: 15px;
  }

  &:hover {
    opacity: 0.5;
  }
`

const ImageList = (): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "dragoon.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "dragoon.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "seph.webp" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "duo.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const images = Object.values(data)

  return (
    <ImageContainer>
      {images.map((image: any, index) => (
        <Img css={imageStyle} key={index} fluid={image.sharp.fluid} />
      ))}
    </ImageContainer>
  )
}

export default ImageList
