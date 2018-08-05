import styled from 'styled-components'
import { screen_md_min } from './variables'

export const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover, &:focus, &:active {
    color: white;
  }
`

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 3.6rem;

  @media (min-width: ${screen_md_min}) {
    font-size: 4.5rem;
  }
`

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;

  @media (min-width: ${screen_md_min}) {
    font-size: 2.4rem;
  }
`

// generic style for text
const text = `
  font-weight: normal;
  font-size: 1.3rem;
`
// generic style for text: END

export const P = styled.p`
  ${text}
`

export const Italic = styled.i`
  ${text}
`