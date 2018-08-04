import React from 'react'
import styled from 'styled-components'

const CollapseComponent = ({ children, isExpanded }) => {
  return (
    <div className={['collapse', isExpanded ? 'show' : ''].join(' ')}>
      {children}
    </div>
  )
}

const Collapse = styled(CollapseComponent)`
  transition: all 1s;
  transform: scaleY(0);
  &.show {
    transform: scaleY(1);
  }
`

export { Collapse }