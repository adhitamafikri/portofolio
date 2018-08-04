// url('https://fonts.googleapis.com/css?family=Arimo');

import styled from 'styled-components'
import Arimo from './fonts/Arimo-Regular.ttf'

const globalStyle = `
  @font-face {
    src: url(${Arimo});
    font-family: Arimo;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Arimo, Arial, sans-serif;
  }
`

export default globalStyle