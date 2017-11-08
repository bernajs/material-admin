import React, { Component } from 'react'
import { AppBar, IconMenu, IconButton } from 'material-ui'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
export default class Header extends Component {
  constructor(props) {
    super(props)
    // this.handleSidebar = this.handleSidebar.bind(this)
  }

  //   handleSidebar() {
  //     this.props.handleSidebar()
  //   }
  render() {
    return (
      <AppBar
        title="Title"
        iconElementLeft={
          <IconButton
            onClick={() => {
              this.props.handleToggle()
            }}
          >
            <MenuIcon />
          </IconButton>
        }
      />
    )
  }
}
