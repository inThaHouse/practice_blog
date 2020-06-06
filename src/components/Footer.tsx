import React from 'react'
import { css } from '@emotion/core'

const footerStyles = css`
  font-size: 11px;
  text-align: center;
  border-top: 1px solid #f1f1f1;
  padding: 10px 0;
`

const Footer = (): React.ReactElement => {
  return <footer css={footerStyles}>crafted with 🖤 by inThaHouse</footer>
}

export default Footer
