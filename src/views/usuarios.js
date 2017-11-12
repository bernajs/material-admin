import React, { Component } from 'react'
import { FAB, DataTable } from '../components'
import { connect } from 'react-redux'
import { get_usuarios } from '../actions/usuario_actions'

class Usuarios extends Component {
  componentDidMount() {
    this.props.get_usuarios()
  }
  render() {
    const data = [
      { title: 'Nombre', value: 'nombre', type: 'string', header: true },
      { title: 'Apellido', value: 'apellido', type: 'string', header: true },
      { title: 'Edad', value: 'edad', type: 'number', header: true }
    ]
    return (
      <div>
        <FAB position="top-right" route="usuario" data={data} />
        <DataTable data={this.props.usuarios} values={data} />
      </div>
    )
  }
}

function mapStateToProps({ usuarios }) {
  return { usuarios }
}

export default connect(mapStateToProps, { get_usuarios })(Usuarios)
