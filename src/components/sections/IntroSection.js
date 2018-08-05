import React from 'react'
import { Container, Section } from '../common'
import { H1 } from '../typography'
import { primaryAccent } from '../variables'

// import theme
import theme from '../themes/main'
import styled, { ThemeProvider } from 'styled-components'

const IntroSection = () => (
  <ThemeProvider theme={theme}>
    <Section className="intro-section">
      <Container className="container p-5">
        <H1 className="welcome-heading">
          Hey,<br/>Welcome to My<br/>Portofolio Site!
        </H1>
      </Container>
    </Section>
  </ThemeProvider>
)

export { IntroSection }