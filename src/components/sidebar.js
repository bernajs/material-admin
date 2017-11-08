import React, { Component } from 'react'
import { Drawer, MenuItem, RaisedButton } from 'material-ui'
import Header from './header'
export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div>
        <Header handleToggle={this.handleToggle} />
        <RaisedButton label="Menu" onClick={this.handleToggle} />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}
