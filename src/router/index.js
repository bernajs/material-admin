import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Sidebar, Dashboard, Header } from '../components'

export default class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Routes />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/" exact component={Dashboard} />
      <Route path="/" exact component={Dashboard} />
    </Switch>
  )
}
