import React from 'react'
import { Section, Container, Div, Tile } from '../common'
import { H2, P } from '../typography'

// import theme
import theme from '../themes/main'
import { ThemeProvider } from 'styled-components'

// import my photo
import Photo from '../../img/photo.jpg'

const { BioSectionTheme } = theme

const BioSection = () => (
  <ThemeProvider theme={BioSectionTheme}>
    <Section>
      <Container className="container" paddingV="3rem">
        <H2 italic>Bio</H2>
        <Div className="row">
          <Div className="col-6">
            <Tile>
              <P>Text</P>
            </Tile>
            <Tile>
              <P>Text</P>
            </Tile>
            <Tile>
              <P>Text</P>
            </Tile>
            <Tile>
              <P>Text</P>
            </Tile>
          </Div>
          <Div className="col-6">
            <Tile rounded square size="120px" className="photo-holder">
              {/* <img src={Photo} alt="It's Me"/> */}
            </Tile>
          </Div>
        </Div>
      </Container>
    </Section>
  </ThemeProvider>
)

export { BioSection }