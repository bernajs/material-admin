import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
  CircularProgress
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
    return this.props.values.map((item, key) => {
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
    return this.props.data.map((item, key) => {
      return (
        <TableRow key={item.id}>
          {this.props.values.map((row, key) => {
            return (
              <TableRowColumn key={item.id + key}>
                {item[row.value]}
              </TableRowColumn>
            )
          })}
        </TableRow>
      )
    })
  }
  render() {
    if (Object.keys(this.props.data).length === 0) {
      return <CircularProgress className="center" />
    }
    return (
      <Table>
        <TableHeader
          adjustForCheckbox={false}
          displaySelectAll={false}
          className="table-row"
        >
          <TableRow>{this.renderHeader()}</TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} stripedRows={true}>
          {this.renderRows()}
        </TableBody>
      </Table>
    )
  }
}
