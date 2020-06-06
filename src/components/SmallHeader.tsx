import React from 'react'
import { css } from '@emotion/core'

const smallHeaderStyles = css`
  color: #ccc;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  margin: 40px 0;
`

interface Props {
  header: string
}

const SmallHeader = ({ header }: Props): React.ReactElement => (
  <h2 css={smallHeaderStyles}>{header}</h2>
)

export default SmallHeader
