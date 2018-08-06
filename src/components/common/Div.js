import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.rounded ? '50%' : '0%'};
  ${props => props.square ? `
    width: ${props.size};
    height: ${props.size};` : ''
  }
  ${props => props.paddingV ? `
    padding-top: ${props.paddingV};
    padding-bottom: ${props.paddingV};` : ''
  }
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1rem;
`

const Tile = Div.extend`
  background-color: ${props => props.theme.tileColor || 'transparent'};
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`

const ContainerComponent = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
)

const Container = styled(ContainerComponent)`
  &&& {
    background-color: ${props => props.bgColor};
    ${props => props.paddingV ? `
      padding-top: ${props.paddingV};
      padding-bottom: ${props.paddingV};` : ''
    }
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`

export { Div, Container, Tile }