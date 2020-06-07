import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import RoundImage from './RoundImage'
import { Colors } from '../models/enum/Colors'
import { Breakpoints } from '../models/enum/Breakpoints'

const HeroCtn = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Poppins';
  margin-top: 55px;
`

const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 45px;
  margin-bottom: -30px;

  h1 {
    font-size: 9rem;
    letter-spacing: -3px;
    text-shadow: 9px -9px 0 ${Colors.WHITE};
    line-height: 1;
  }

  h3 {
    font-weight: 300;
    font-size: 2.5rem;
  }

  @media (max-width: ${Breakpoints.MOBILE}) {
    bottom: 25px;

    h1 {
      text-shadow: 2px -2px 0 ${Colors.WHITE};
      font-size: 3rem;
    }

    h3 {
      font-size: 1.3rem;
    }
  }
`

const Hero = (): React.ReactElement => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "cloud-strife.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <HeroCtn>
        <RoundImage image={image} />
        <TextBox>
          <h1>Hi.</h1>
          <h3>I'm a Coder.</h3>
          <h3>This is my fake blog.</h3>
        </TextBox>
      </HeroCtn>
    </>
  )
}

export default Hero
