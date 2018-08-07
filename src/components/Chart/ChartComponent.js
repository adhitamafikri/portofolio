import styled from 'styled-components'

export const ChartCanvas = styled.div`
  width: 100%;
  height: 100%;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
`

export const ChartLine = styled.div`
  background: white;
  width: ${props => props.amount ? `${props.amount}%` : 0};
  height: 1rem;
`
