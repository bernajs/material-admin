import React, { Component } from 'react'
import { TextField } from 'material-ui'
export default class Input extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <TextField
          id={this.props.value}
          hintText={this.props.placeholder}
          floatingLabelText={this.props.label}
          floatingLabelFixed={true}
        />
      </div>
    )
  }
}
