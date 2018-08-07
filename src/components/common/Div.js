import styled from 'styled-components'

const Div = styled.div`
  background-color: ${props => props.bgColor};
  background-image: ${props => `url(${props.bgImage})` || ''};
  background-size: ${props => props.bgSize || ''};
  background-position: ${props => props.bgPosition || ''};
  border-radius: ${props => props.rounded ? '50%' : '0%'};
  ${props => props.square ? `
    width: ${props.size};
    height: ${props.size};` : ''
  }
  ${props => props.tile ? `
    background-color: ${props.theme.tileColor || 'transparent'};
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    transition: all 0.8s;` : ''
  }
`

export { Div }