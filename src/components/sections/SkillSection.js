import React from 'react'
import { Section, Div } from '../common'
import { H2, UnorderedList, ListItem } from '../typography'
import Chart from '../Chart'

// import theme
import theme from '../themes/main'
import { ThemeProvider } from 'styled-components'

const { SkillSectionTheme } = theme

const skills = [
  'HTML', 'CSS', 'JS', 'VueJS', 'ReactJS', 'AngularJS',
  'SASS', 'Bootstrap', 'PHP', 'Laravel'
]

const renderSkills = () => {
  return (
    skills.map((item, key) =>
      <ListItem key={key}>{item}</ListItem>
    )
  )
}

const SkillSection = () => (
  <ThemeProvider theme={SkillSectionTheme}>
    <Section>
      <Div className="container py-3 px-3">
        <H2 italic>Technical Skills</H2>
        <Div className="row">
          <Div className="col-3">
            <UnorderedList height="200" className="d-flex flex-column justify-content-between">
              {renderSkills()}
            </UnorderedList>
          </Div>
          <Div className="col-9">
            <Chart />
          </Div>
        </Div>
      </Div>
    </Section>
  </ThemeProvider> 
)

export { SkillSection }