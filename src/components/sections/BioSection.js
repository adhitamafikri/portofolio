import React from 'react'
import { Section, Container, Div, Tile, Image } from '../common'
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
      <Container className="container" py3>
        <H2 italic>Bio</H2>
        <Div className="row">
          <Div className="col-6">
            <Tile px1>
              <P>Name: Adhitama Fikri</P>
            </Tile>
            <Tile px1>
              <P>DOB: Jakarta, February 16th 1997</P>
            </Tile>
            <Tile px1>
              <P>Status: Single</P>
            </Tile>
            <Tile px1>
              <P>Hobbies: musics, eating, gaming, movies</P>
            </Tile>
          </Div>
          <Div className="col-6">
            <Tile className="photo-holder"
                  rounded square size="120px"
                  bgImage={Photo} bgSize="cover" />
          </Div>
        </Div>
      </Container>
    </Section>
  </ThemeProvider>
)

export { BioSection }