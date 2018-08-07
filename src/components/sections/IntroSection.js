import React from 'react'
import { Section, Div } from '../common'
import { H2, P } from '../typography'

// import theme
import { ThemeProvider } from 'styled-components'

const IntroSection = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Section>
      <Div className="container py-3 px-3">
        <H2 italic>
          A Brief Introduction
        </H2>
        <Div className="mb-2">
          <P>
            An energetic introverted IT student at Binus 
            University who loves visual thingy and gaming 
            so much. He has been working at an online B2B 
            marketplace as a frontend engineer intern until now.
          </P>
        </Div>
        <Div>
          <P>
            Dealing with HTML, CSS, and Javascript is his 
            everyday task. He likes to learn and utilize 
            new technologies into his projects.
          </P>
        </Div>
      </Div>
    </Section>
  </ThemeProvider>
)

export { IntroSection }