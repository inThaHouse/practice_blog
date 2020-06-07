import React from 'react'
import { css } from '@emotion/core'
import { Colors } from '../models/enum/Colors'

interface Props {
  header: string
  margin?: string
  alignment?: string
}

const SmallHeader = ({
  header,
  margin,
  alignment,
}: Props): React.ReactElement => {
  const smallHeaderStyles = css`
    color: ${Colors.LIGHT_GRAY};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: ${alignment ? alignment : 'center'};
    margin: ${margin ?? '40px 0'};
  `

  return <h2 css={smallHeaderStyles}>{header}</h2>
}

export default SmallHeader
