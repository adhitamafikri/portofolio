import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'

import { injectGlobal } from 'styled-components'
import globalStyle from './globalStyle'

injectGlobal`
  ${globalStyle}
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
