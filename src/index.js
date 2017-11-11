import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import './bootstrap.css'
// import App from './App';
import Navigation from './router'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Navigation />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
