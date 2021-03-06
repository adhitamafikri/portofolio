import styled from 'styled-components'

const Navbar = styled.nav`
  background-color: ${props => props.theme.backgroundColor || 'black'};
  width: 100%;
  color: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  z-index: 1030;

  > div {
    width: inherit;
    height: 60px;
  }
`

export default Navbar