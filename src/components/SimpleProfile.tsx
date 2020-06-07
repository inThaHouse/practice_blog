import React from 'react'
import Image from 'gatsby-image'
import SmallHeader from './SmallHeader'
import { graphql, useStaticQuery } from 'gatsby'

const SimpleProfile = (): React.ReactElement => {
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

  return (
    <>
      <SmallHeader header={'About me'} margin='0 0 10px' alignment='left' />
      <Image fluid={image.sharp.fluid} />
      <p>Hi, I'm a software developer specializing in web development.</p>
    </>
  )
}

export default SimpleProfile
