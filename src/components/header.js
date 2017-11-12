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
    if (this.props.data) {
      const value = this.props.data[0].value
      const data = { nombre: 'Luis Bernardo' }
      console.log(data[value])
    }
    return (
      <AppBar
        title={this.props.title}
        className="header"
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
