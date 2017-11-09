import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn
} from 'material-ui'

export default class DataTable extends Component {
  constructor(props) {
    super(props)
    this.renderRows = this.renderRows.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
  }

  renderHeader() {
    return this.props.data.map((item, key) => {
      return <TableHeaderColumn key={key}>{item.title}</TableHeaderColumn>
    })
  }

  renderRows(header) {
    const data = [
      { nombre: 'Luis Bernardo', apellido: 'García López', edad: 23 },
      { nombre: 'Luis Bernardo', apellido: 'García López', edad: 23 },
      { nombre: 'Luis Bernardo', apellido: 'García López', edad: 23 },
      { nombre: 'Luis Bernardo', apellido: 'García López', edad: 23 }
    ]
    return data.map((item, key) => {
      return (
        <TableRow>
          {this.props.data.map((row, key) => {
            return <TableRowColumn>{item[row.value]}</TableRowColumn>
          })}
        </TableRow>
      )
    })
  }
  render() {
    return (
      <Table>
        <TableHeader
          adjustForCheckbox={false}
          displaySelectAll={false}
          className="table-row"
        >
          {this.renderHeader()}
        </TableHeader>
        <TableBody displayRowCheckbox={false} stripedRows={true}>
          {this.renderRows()}
        </TableBody>
      </Table>
    )
  }
}
