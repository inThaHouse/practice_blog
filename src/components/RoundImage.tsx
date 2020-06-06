import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const RoundImage = (props: any) => {
  const { image } = props

  const imgContainerStyle = css`
    width: 100%;
  `

  const imgStyle = css`
    border-radius: 50%;
    margin: auto;
    max-width: 280px;
  `

  return (
    <div css={imgContainerStyle}>
      <Img css={imgStyle} fluid={image.sharp.fluid} />
    </div>
  )
}

export default RoundImage
