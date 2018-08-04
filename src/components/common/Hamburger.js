import React from 'react'
import styled from 'styled-components'

const HamburgerButton = ({ className, onClick }) => (
  <button className={className} onClick={onClick}>
    <div className="line my-1"></div>
    <div className="line my-1"></div>
    <div className="line my-1"></div>
  </button>
)

const Hamburger = styled(HamburgerButton)`
  background-color: transparent;
  .line {
    background: white;
    width: 40px;
    height: 5px;
    border-radius: 6px;
  }
`

export { Hamburger }