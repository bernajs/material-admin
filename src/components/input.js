import React, { Component } from 'react'
import { TextField } from 'material-ui'
export default class Input extends Component {
  componentDidMount() {}

  render() {
    const type = this.props.type ? this.props.type : 'string'
    const col = `col-lg-${this.props.col ? this.props.col : '5'}`
    return (
      <div className={`form-group col-sm-12 ${col}`}>
        <TextField
          id={this.props.value}
          hintText={this.props.placeholder}
          floatingLabelText={this.props.label}
          floatingLabelFixed={true}
          type={this.props.type}
        />
      </div>
    )
  }
}
