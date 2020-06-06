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
            height: 100%;
            font-family: sans-serif;

            /* remove margin for the main div that gatsby mounts */
            > div {
              margin-top: 0;
            }
          }

          body {
            margin-top: 50px;
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

          p {
            font-family: 'Noto sans';
            font-size: 13px;
            line-height: 1.75;
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
