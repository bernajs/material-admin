import React, { Component } from 'react'
import { DataTable } from '../components'
import { connect } from 'react-redux'
import { get_usuarios } from '../actions/usuario_actions'

class Usuarios extends Component {
  componentDidMount() {
    this.props.get_usuarios()
  }
  render() {
    const data = [
      { title: 'Nombre', value: 'nombre' },
      { title: 'Apellido', value: 'apellido' },
      { title: 'Edad', value: 'edad' }
    ]
    return <DataTable data={this.props.usuarios} values={data} />
  }
}

function mapStateToProps({ usuarios }) {
  return { usuarios }
}

export default connect(mapStateToProps, { get_usuarios })(Usuarios)
