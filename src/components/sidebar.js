import React, { Component } from 'react'
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
        <Header title="Administrador" handleToggle={this.handleToggle} icon="menu" />
        <RaisedButton label="Menu" onClick={this.handleToggle} />
        <Drawer open={this.state.open}>
          <Header title="Menú" handleToggle={this.handleToggle} icon="close" />
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}
