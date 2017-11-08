import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './bootstrap.css'
// import App from './App';
import Navigation from './router'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
  <MuiThemeProvider>
    <Navigation />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
