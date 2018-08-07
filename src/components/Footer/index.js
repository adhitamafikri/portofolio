import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Div, Button } from '../common'
import { H2 } from '../typography';

const FooterComponent = styled.footer`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
`

const Footer = ({ theme, changeThemeDefault, changeThemeAlternate }) => (
  <ThemeProvider theme={theme}>
    <FooterComponent>
      <Div className="container py-3 px-3">
        <H2>Try Different Feel!</H2>
        <Button onClick={changeThemeDefault} className="mr-3">Main Theme</Button>
        <Button onClick={changeThemeAlternate}>Elegant Theme</Button>
      </Div>
    </FooterComponent>
  </ThemeProvider>
)

export default Footer
