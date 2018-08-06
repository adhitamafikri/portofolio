import styled from 'styled-components'

const Image = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || '100%'};
  object-fit: ${props => props.objectFit || ''};
  border-radius: ${props => props.rounded ? '50%' : '0%'};
`

export { Image }