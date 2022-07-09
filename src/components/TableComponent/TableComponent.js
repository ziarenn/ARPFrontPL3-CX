import React, { Component } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
export default class TableComponent extends Component {
  render() {
    return (
      <TableContainer
        component={Paper}
        sx={{ maxWidth: "1000px", display: "block", mx: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Currency code</TableCell>
              <TableCell align="center">Currency name</TableCell>
              <TableCell align="center">Exchange rate (PLN)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.currencyTable.map((el, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{el.code}</TableCell>
                  <TableCell align="center">{el.currency}</TableCell>
                  <TableCell align="center">{el.mid.toFixed(2)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
