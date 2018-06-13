import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import setGlobalStyles from './global-styles'

setGlobalStyles()

const rootComponent = <App />

ReactDOM.render(rootComponent, document.getElementById('root') as HTMLElement)
// registerServiceWorker()
