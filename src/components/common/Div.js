import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: ${props => props.bgColor};
  background-image: ${props => `url(${props.bgImage})` || ''};
  background-size: ${props => props.bgSize || ''};
  background-position: ${props => props.bgPosition || ''};
  border-radius: ${props => props.rounded ? '50%' : '0%'};
  margin-bottom: 1rem;
  ${props => props.square ? `
    width: ${props.size};
    height: ${props.size};` : ''
  }
  ${props => props.px1 ?
    `
      padding-left: 1rem;
      padding-right: 1rem;` : props.px2 ?
    `
      padding-left: 2rem;
      padding-right: 2rem;` : props.px3 ?
    `
      padding-left: 3rem;
      padding-right: 3rem;` : ''
  }
  ${props => props.py1 ?
    `
      padding-top: 1rem;
      padding-bottom: 1rem;` : props.py2 ?
    `
      padding-top: 2rem;
      padding-bottom: 2rem;` : props.py3 ?
    `
      padding-top: 3rem;
      padding-bottom: 3rem;` : ''
  }
  ${props => props.mb1 ?
    `
      margin-bottom: 1rem;` : props.mb2 ?
    `
      margin-bottom: 2rem;` : props.mb3 ?
    `
      margin-bottom: 3rem;` : ''
  }
`

const Tile = Div.extend`
  background-color: ${props => props.theme.tileColor || 'transparent'};
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const ContainerComponent = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
)

const Container = styled(ContainerComponent)`
  &&& {
    background-color: ${props => props.bgColor};
    ${props => props.py1 ?
      `
        padding-top: 1rem;
        padding-bottom: 1rem;` : props.py2 ?
      `
        padding-top: 2rem;
        padding-bottom: 2rem;` : props.py3 ?
      `
        padding-top: 3rem;
        padding-bottom: 3rem;` : ''
    }
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`

export { Div, Container, Tile }