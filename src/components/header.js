import React, { Component } from 'react'
import { AppBar, IconMenu, IconButton } from 'material-ui'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
export default class Header extends Component {
  constructor(props) {
    super(props)
    // this.handleSidebar = this.handleSidebar.bind(this)
  }

  //   handleSidebar() {
  //     this.props.handleSidebar()
  //   }
  setIcon() {
    if (this.props.icon === 'menu') {
      return <MenuIcon />
    } else {
      return <CloseIcon />
    }
  }
  render() {
    return (
      <AppBar
        title={this.props.title}
        iconElementLeft={
          <IconButton
            onClick={() => {
              this.props.handleToggle()
            }}
          >
            {this.setIcon()}
          </IconButton>
        }
      />
    )
  }
}
