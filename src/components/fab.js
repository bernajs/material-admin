import React, { Component } from 'react'
import { FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { NavLink } from 'react-router-dom'
const style = {}
export default class FAB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: { position: 'absolute', bottom: 25, right: 25 }
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <NavLink
          to={{
            pathname: `/agregar/${this.props.route}`,
            state: this.props.data,
            title: this.props.title
          }}
        >
          <FloatingActionButton style={this.state.position}>
            <ContentAdd />
          </FloatingActionButton>
        </NavLink>
      </div>
    )
  }
}
