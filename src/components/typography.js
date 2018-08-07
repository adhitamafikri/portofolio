import styled from 'styled-components'
import { screen_md_min } from './variables'

export const H1 = styled.h1`
  font-size: 3.6rem;
  font-style: ${props => props.italic ? 'italic' : 'normal'}
  line-height: 1.25;
  margin-bottom: 1rem;

  @media (min-width: ${screen_md_min}) {
    font-size: 4.5rem;
  }
`
export const H2 = styled.h2`
  font-size: 1.8rem;
  font-style: ${props => props.italic ? 'italic' : 'normal'}
  line-height: 1.25;
  margin-bottom: 3rem;

  @media (min-width: ${screen_md_min}) {
    font-size: 2.4rem;
  }
`

// generic style for text
const text = `
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.56;
  margin-bottom: 0;
`
// generic style for text: END

export const P = styled.p`
  ${text}
`
export const Italic = styled.i`
  ${text}
`
export const Strong = styled.strong`
  ${text}
`

export const Link = styled.a`
  ${text}
  color: white;
  text-decoration: none;
  &:hover, &:focus, &:active {
    color: white;
  }
`

// generic styles for List
const List = `
  list-style-type: none;
  margin-bottom: 0;
  padding-left: 0;
`
// generic styles for List: END

export const UnorderedList = styled.ul`
  ${List}
  height: ${props => `${props.height}px` || 'auto'};
`
export const OrderedList = styled.ol`
  ${List}
  height: ${props => `${props.height}px` || 'auto'};
`
export const ListItem = styled.li`
  
`
