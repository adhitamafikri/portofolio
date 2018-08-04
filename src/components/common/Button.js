import React from 'react'
import styled from 'styled-components'

const ButtonComponent = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

const Button = styled(ButtonComponent)`
  &:focus {
    box-shadow: 2px 3px 5px black;
  }
  background-color: white;
`

export { Button }