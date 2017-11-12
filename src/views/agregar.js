import React, { Component } from 'react'
import { Input } from '../components'

export default class Agregar extends Component {
  constructor(props) {
    super(props)
    this.renderInput = this.renderInput.bind(this)
  }

  renderInput() {
    return this.props.location.state.map((input, key) => {
      return (
        <Input
          label={input.title}
          placeholder={input.title}
          id={input.value}
        />
      )
    })
  }

  render() {
    console.log(this.props.location.state)
    return <div>{this.renderInput()}</div>
  }
}
