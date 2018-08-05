import styled from 'styled-components'

const Button = styled.button`
  background-color: white;
  height: 40px;
  user-select: none;
  border: none;
  border-radius: 4px;
  padding: 0 1.6rem;
  transition: all 0.3s;
  
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
  &:active {
    outline: 0;
  }

  ${props => props.hamburger ? 
    `
      background-color: transparent
      width: 50px;
      height: 40px;
      padding: 0 0.5rem;
      .burger-line {
        background: white;
        width: 100%;
        height: 6px;
        border-radius: 4px;
        margin: 0.5rem 0;
      }
    ` : 
    ''
  }
`

export { Button }