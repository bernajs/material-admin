import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Drawer, MenuItem, RaisedButton, AppBar } from 'material-ui'
import Header from './header'
import { connect } from 'react-redux'
import { toggle_sidebar } from '../actions/general'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: true }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
    // this.props.toggle_sidebar()
  }

  render() {
    return (
      <div>
        <Header
          title="Administrador"
          handleToggle={this.handleToggle}
          icon="menu"
        />
        <Drawer open={this.state.open} containerClassName="sidebar">
          <Header title="Menú" handleToggle={this.handleToggle} icon="close" />
          <NavLink to="/dashboard" activeClassName="active">
            <MenuItem className="menu-item">Dashboard</MenuItem>
          </NavLink>
          <MenuItem className="menu-item">Categorías</MenuItem>
          <MenuItem className="menu-item">Negocios</MenuItem>
          <NavLink to="/usuarios" activeClassName="active">
            <MenuItem className="menu-item">Usuarios</MenuItem>
          </NavLink>
        </Drawer>
      </div>
    )
  }
}

export default (Sidebar)
// export default connect(null, { toggle_sidebar })(Sidebar)
