import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Sidebar, Header } from '../components'
import { Agregar, Usuarios, Dashboard } from '../views'
import { connect } from 'react-redux'
import { sidebar_status } from '../actions/general'

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar />
          <div
            className={`container ${this.props.sidebarStatus
              ? ''
              : 'container-collapsed'}`}
          >
            <h3 className="title">{this.props.title}</h3>
            <div className="row sub-container">
              <Routes />
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
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/usuarios" component={Usuarios} />
      <Route path="/agregar/:id" component={Agregar} />
    </Switch>
  )
}

function mapStateToProps({ general }) {
  return { sidebarStatus: general.sidebarStatus, title: general.title }
}

export default connect(mapStateToProps, { sidebar_status })(Navigation)
