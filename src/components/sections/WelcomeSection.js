import React from 'react'
import { Section, Div } from '../common'
import { H1, Italic } from '../typography'

// import theme
import { ThemeProvider } from 'styled-components'

const WelcomeSection = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Section className="welcome-section">
      <Div className="container py-3 px-3">
        <H1>
          Hey,<br/>Welcome to My<br/>Portofolio Site!
        </H1>
        <Italic>I'm Adhitama Fikri, glad you come to my site :)</Italic>
      </Div>
    </Section>
  </ThemeProvider>
)

export { WelcomeSection }