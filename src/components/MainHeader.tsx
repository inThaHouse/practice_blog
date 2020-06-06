import React from 'react'
import { css } from '@emotion/core'

interface Props {
  headerText: string
  alignment: string
}

const MainHeader = ({ headerText, alignment }: Props): React.ReactElement => {
  const headerStyles = css`
    font-family: 'Noto sans';
    text-align: ${alignment};
  `

  return <h1 css={headerStyles}>{headerText}</h1>
}

export default MainHeader
