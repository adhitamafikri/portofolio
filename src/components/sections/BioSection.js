import React from 'react'
import { Section, Div } from '../common'
import { H2, P } from '../typography'

// import theme
import { ThemeProvider } from 'styled-components'

// import my photo
import Photo from '../../img/photo.jpg'

const BioSection = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Section>
      <Div className="container py-3 px-3">
        <H2 italic>Bio</H2>
        <Div className="row">
          <Div className="col-6 pr-0">
            <Div tile className="mb-1 px-1">
              <P>Name: Adhitama Fikri</P>
            </Div>
            <Div tile className="mb-1 px-1">
              <P>DOB: Jakarta, February 16th 1997</P>
            </Div>
            <Div tile className="mb-1 px-1">
              <P>Status: Single</P>
            </Div>
            <Div tile className="mb-1 px-1">
              <P>Hobbies: musics, eating, gaming, movies</P>
            </Div>
          </Div>
          <Div className="col-6 d-flex justify-content-center">
            <Div className="photo-holder"
                  rounded square size="120px"
                  bgImage={Photo} bgSize="cover" />
          </Div>
        </Div>
      </Div>
    </Section>
  </ThemeProvider>
)

export { BioSection }