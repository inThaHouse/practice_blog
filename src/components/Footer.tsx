import React from 'react'
import { css } from '@emotion/core'
import { Colors } from '../models/enum/Colors'

const footerStyles = css`
  font-size: 11px;
  text-align: center;
  border-top: 1px solid ${Colors.GRAY};
  padding: 10px 0;
  margin-top: 1rem;
`

const Footer = (): React.ReactElement => {
  return <footer css={footerStyles}>crafted with 🖤 by inThaHouse</footer>
}

export default Footer
