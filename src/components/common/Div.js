import styled from 'styled-components'

const Div = styled.div`
  background-color: ${props => props.bgColor};
  ${props => props.paddingV ? `
    padding-top: ${props.paddingV};
    padding-bottom: ${props.paddingV};` : ''
  }
`

export { Div }