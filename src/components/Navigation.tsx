import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { Colors } from '../models/enum/Colors'

const NavigationCtn = styled('div')`
  background: ${Colors.DARK_BLUE};
  padding: 15px 15vw;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
`

const navItemStyles = css`
  text-decoration: none;
  color: ${Colors.WHITE};
  margin: 0 10px;
  font-size: 10px;
  font-family: 'Lato' sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:first-of-type {
    margin-left: 0;
  }
`

const Navigation = (): React.ReactElement => {
  const navLinks = ['home', 'about', 'blog']

  return (
    <NavigationCtn>
      {navLinks.map((navLink) => {
        return navLink === 'home' ? (
          <Link key={navLink} css={navItemStyles} to='/'>
            {navLink}
          </Link>
        ) : (
          <Link css={navItemStyles} key={navLink} to={`/${navLink}`}>
            {navLink}
          </Link>
        )
      })}
    </NavigationCtn>
  )
}

export default Navigation
