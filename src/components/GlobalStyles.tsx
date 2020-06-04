import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles = (): React.ReactElement => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html,
          body {
            font-size: 18px;
            line-height: 1.4;
            font-family: sans-serif;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.2;
            color: #222222;
          }

          li {
            list-style: none;
          }
        `}
      />
    </>
  )
}

export default GlobalStyles
