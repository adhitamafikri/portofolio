import styled from 'styled-components'

const Section = styled.section`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
  transition: all 0.8s;
`

export { Section }