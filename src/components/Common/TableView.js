import React, { Component } from 'react';
import {withStyles, Table, TableBody, TableHead, TableRow, TableCell, Paper } from '@material-ui/core';

class TableView extends Component {
  render() {
    const {rows, columns} = this.props;
    return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {columns ? 
              columns.map((col, i) => {
                return (
                  <TableCell key={i}>{col.label}</TableCell>
                )
              })
            : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? 
            rows.map((row, i) => {
              return columns.map((col, colIndex) => {
                return (
                  <TableCell>
                    {row[col.name]}
                  </TableCell>
                )
              })
            })
          : null}
        </TableBody>
      </Table>
    </Paper>);
  }
}

export default TableView;
