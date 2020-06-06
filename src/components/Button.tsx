import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

interface ButtonProps {
  primaryColor: string
  secondaryColor: string
  buttonText: string
  path: string
}

const ButtonLink = (props: ButtonProps): React.ReactElement => {
  const { primaryColor, secondaryColor, buttonText, path } = props

  const buttonStyles = css`
    font-size: 11px;
    letter-spacing: 1px;
    border: 2px solid ${secondaryColor};
    padding: 15px 25px;
    background: ${primaryColor};
    color: ${secondaryColor};
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
      background: ${secondaryColor};
      color: ${primaryColor};
    }
  `

  const containerStyles = css`
    display: flex;
    justify-content: center;
    margin-top: 30px;
  `

  return (
    <div css={containerStyles}>
      <Link to={`/${path}`} css={buttonStyles}>
        {buttonText}
      </Link>
    </div>
  )
}

export default ButtonLink
