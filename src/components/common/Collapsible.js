import React from 'react'
import styled from 'styled-components'

const CollapsibleComponent = ({ children, isExpanded }) => (
  <div className={['collapsible', isExpanded ? 'show' : ''].join(' ')}>
    {children}
  </div>
)

const Collapsible = styled(CollapsibleComponent)`
  &&& {
    background: purple;
    width: 100%;
    color: red;
  }
`

export { Collapsible }