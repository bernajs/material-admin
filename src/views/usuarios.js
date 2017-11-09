import React, { Component } from 'react'
import { DataTable } from '../components'

class Usuarios extends Component {
  render() {
    const data = [
      { title: 'Nombre', value: 'nombre' },
      { title: 'Apellido', value: 'apellido' },
      { title: 'Edad', value: 'edad' }
    ]
    return <DataTable data={data} />
  }
}

export default Usuarios
