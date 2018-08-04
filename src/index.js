import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'

import { injectGlobal } from 'styled-components'
import globalStyle from './styles/globalStyle'
import './styles/visibility.css'
import './styles/typography.css'

injectGlobal`
  ${globalStyle}
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
