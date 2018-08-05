import styled from 'styled-components'
import { primaryAccent } from '../variables'

const Collapsible = styled.div`
  background: ${primaryAccent};
  width: 100%;
  height: 100%;
  padding: 1em;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  position: absolute;
  visibility: ${props => props.isExpanded ? 'visible' : 'hidden'};
  opacity: ${props => props.isExpanded ? 1 : 0};
  bottom: ${props => props.isExpanded ? '-100%' : 0};
  left: 0;
  z-index: -1;
`

export { Collapsible }