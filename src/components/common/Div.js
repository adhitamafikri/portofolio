import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: ${props => props.bgColor};
  ${props => props.paddingV ? `
    padding-top: ${props.paddingV};
    padding-bottom: ${props.paddingV};` : ''
  }
`

const ContainerComponent = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
)

const Container = styled(ContainerComponent)`
  &&&{
    background-color: ${props => props.bgColor};
    ${props => props.paddingV ? `
      padding-top: ${props.paddingV};
      padding-bottom: ${props.paddingV};` : ''
    }
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`

export { Div, Container }