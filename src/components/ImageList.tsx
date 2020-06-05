import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const ImageContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ImageList = (): React.ReactElement => {
  const { image1, image2, image3, image4 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "dragoon.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "ff.jpg" }) {
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

  const images = [image1, image2, image3, image4]

  const imageStyle = css`
    width: 23%;
    background: #222;

    &:hover {
      opacity: 0.5;
    }
  `

  return (
    <ImageContainer>
      {images.map((image, index) => (
        <Img css={imageStyle} key={index} fluid={image.sharp.fluid} />
      ))}
    </ImageContainer>
  )
}

export default ImageList
