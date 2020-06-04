import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const HeroCtn = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'poppins';
`

const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 45px;

  h1 {
    font-size: 9rem;
    letter-spacing: -3px;
    text-shadow: 9px -9px 0 #fff;
    line-height: 1;
  }

  h3 {
    font-weight: 300;
    font-size: 22px;
  }
`

const Hero = (): React.ReactElement => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "sharingan.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imgContainerStyle = css`
    width: 100%;
  `

  const imgStyle = css`
    border-radius: 50%;
    max-width: 280px;
    margin: auto;
  `

  return (
    <>
      <HeroCtn>
        <div css={imgContainerStyle}>
          <Img css={imgStyle} fluid={image.sharp.fluid} alt={'sharingan'} />
        </div>
        <TextBox>
          <h1>Hi.</h1>
          <h3>Welcome to my blog</h3>
        </TextBox>
      </HeroCtn>
    </>
  )
}

export default Hero
