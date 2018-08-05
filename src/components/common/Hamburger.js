import React from 'react'
import styled from 'styled-components'

const HamburgerButton = ({ className, onClick }) => (
  <button className={className} onClick={onClick}>
    <div className="line my-2"></div>
    <div className="line my-2"></div>
    <div className="line my-2"></div>
  </button>
)

const Hamburger = styled(HamburgerButton)`
  background-color: transparent;
  width: 40px;
  height: 50px;
  .line {
    background: white;
    width: 100%;
    height: 6px;
    border-radius: 6px;
  }
`

export { Hamburger }