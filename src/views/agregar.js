import React, { Component } from 'react'
import { Input } from '../components'
import { connect } from 'react-redux'
import { set_title } from '../actions/general'

class Agregar extends Component {
  constructor(props) {
    super(props)
    this.renderInput = this.renderInput.bind(this)
  }

  componentDidMount() {
    this.props.set_title(this.props.location.title)
  }

  renderInput() {
    return this.props.location.state.map((input, key) => {
      return (
        <Input label={input.title} placeholder={input.title} id={input.value} />
      )
    })
  }

  render() {
    console.log(this.props.location.state)
    return <div>{this.renderInput()}</div>
  }
}

export default connect(null, { set_title })(Agregar)
