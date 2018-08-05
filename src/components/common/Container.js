import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
`

export { Container }