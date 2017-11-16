import React, { Component } from 'react'
import { FAB, DataTable } from '../components'
import { connect } from 'react-redux'
import { get_usuarios } from '../actions/usuario_actions'
import { set_title } from '../actions/general'

class Usuarios extends Component {
  componentDidMount() {
    this.props.get_usuarios()
    this.props.set_title('Usuarios')
  }
  render() {
    const data = [
      {
        title: 'Nombre',
        value: 'nombre',
        type: 'string',
        col: 12,
        header: true
      },
      {
        title: 'Apellido',
        value: 'apellido',
        type: 'string',
        col: 6,
        header: true
      },
      { title: 'Edad', value: 'edad', type: 'number', col: 6, header: true }
    ]
    return (
      <div className="col-12">
        <div className="row">
          <FAB position="top-right" route="usuario" data={data} title="Agregar usuario" />
          <DataTable data={this.props.usuarios} values={data} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ usuarios }) {
  return { usuarios }
}

export default connect(mapStateToProps, { get_usuarios, set_title })(Usuarios)
