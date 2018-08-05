import React from 'react'
import { Container, Section } from '../common'
import { H1, Italic } from '../typography'

// import theme
import theme from '../themes/main'
import { ThemeProvider } from 'styled-components'

const { welcomeSectionTheme } = theme

const WelcomeSection = () => (
  <ThemeProvider theme={welcomeSectionTheme}>
    <Section className="welcome-section">
      <Container className="container" paddingV="3rem">
        <H1>
          Hey,<br/>Welcome to My<br/>Portofolio Site!
        </H1>
        <Italic>I'm Adhitama Fikri, glad you come to my site :)</Italic>
      </Container>
    </Section>
  </ThemeProvider>
)

export { WelcomeSection }