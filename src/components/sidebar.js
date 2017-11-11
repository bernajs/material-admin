import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Drawer, MenuItem, RaisedButton, AppBar } from 'material-ui'
import Header from './header'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: true }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div>
        <Header
          title="Administrador"
          handleToggle={this.handleToggle}
          icon="menu"
        />
        <RaisedButton label="Menu" onClick={this.handleToggle} />
        <Drawer open={this.state.open}>
          <Header title="Menú" handleToggle={this.handleToggle} icon="close" />
          <NavLink to="/dashboard" activeClassName="active">
            <MenuItem>Dashboard</MenuItem>
          </NavLink>
          <MenuItem>Categorías</MenuItem>
          <MenuItem>Negocios</MenuItem>
          <NavLink to="/usuarios" activeClassName="active">
            <MenuItem>Usuarios</MenuItem>
          </NavLink>
        </Drawer>
      </div>
    )
  }
}
