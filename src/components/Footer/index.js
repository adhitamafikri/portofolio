import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Container, Button } from '../common'
import theme from '../themes/main'
import { H2 } from '../typography';

const { FooterTheme } = theme

const FooterComponent = styled.footer`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
  margin-top: -1px;
`

const Footer = () => (
  <ThemeProvider theme={FooterTheme}>
    <FooterComponent>
      <Container className="container py-3">
        <H2>Why not trying different vibes?</H2>
        <Button onClick={() => alert('Main')}
          className="mr-3">Main Theme</Button>
        <Button onClick={() => alert('elegant')}>Elegant Theme</Button>
      </Container>
    </FooterComponent>
  </ThemeProvider>
)

export default Footer
