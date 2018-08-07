import Arimo from './fonts/Arimo-Regular.ttf'

const globalStyle = `
  @font-face {
    font-family: 'Arimo';
    src: 
      local('Arimo-Regular')
      url(${Arimo});
    font-style: normal;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Arimo' !important;
  }

  main {
    margin-top: 6rem;
  }

  div {
    transition: all 0.3s;
  }
`

export default globalStyle