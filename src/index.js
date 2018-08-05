import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

import { injectGlobal } from 'styled-components'
import globalStyle from './globalStyle'

import './visibility.css'

injectGlobal`
  ${globalStyle}
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
