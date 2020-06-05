import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const NavContainer = styled('div')`
  background: #212933;
  padding: 10px 15vw;
`

const linkStyles = css`
  text-decoration: none;
  color: #fff;
  margin: 10px;
  font-size: 10px;
  font-family: 'Lato' sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:first-of-type {
    margin-left: 0;
  }
`

const Navigation = (): React.ReactElement => {
  const navLinks = ['home', 'about', 'blog']

  return (
    <NavContainer>
      {navLinks.map((navLink) => {
        return navLink === 'home' ? (
          <Link key={navLink} css={linkStyles} to='/'>
            {navLink}
          </Link>
        ) : (
          <Link css={linkStyles} key={navLink} to={`/${navLink}`}>
            {navLink}
          </Link>
        )
      })}
    </NavContainer>
  )
}

export default Navigation
