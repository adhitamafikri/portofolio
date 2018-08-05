import React from 'react'
import { Container, Section } from '../common'
import { H2, P } from '../typography'

// import theme
import theme from '../themes/main'
import { ThemeProvider } from 'styled-components'

const { introSectionTheme } = theme

const IntroSection = () => (
  <ThemeProvider theme={introSectionTheme}>
    <Section>
      <Container className="container" paddingV="3rem">
        <H2 italic>
          A Brief Introduction
        </H2>
        <P>
          An energetic introverted IT student at Binus 
          University who loves visual thingy and gaming 
          so much. He has been working at an online B2B 
          marketplace as a frontend engineer intern until now.
        </P>
        <P>
          Dealing with HTML, CSS, and Javascript is his 
          everyday task. He likes to learn and utilize 
          new technologies into his projects.
        </P>
      </Container>
    </Section>
  </ThemeProvider>
)

export { IntroSection }