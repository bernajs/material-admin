import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Sidebar, Header } from '../components'
import { Usuarios, Dashboard } from '../views'

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
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/usuarios" component={Usuarios} />
    </Switch>
  )
}
