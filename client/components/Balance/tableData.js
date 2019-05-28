import React, { Component } from "react";
import Table from "@material-ui/core/Table";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
export default class TableData extends Component {
  render() {
    return (
      <TableRow>
        <TableCell>
          <span>{this.props.obj.createdAt}</span>
        </TableCell>
        <TableCell>
          <span>{this.props.obj.payee}</span>
        </TableCell>
        <TableCell>
          <span>{this.props.obj.amount}</span>
        </TableCell>
        <TableCell>
          <span>{this.props.obj.category}</span>
        </TableCell>
        <TableCell>
          <span>{this.props.obj.comment}</span>
        </TableCell>
        {/* <TableCell colSpan="1">
      <button className="btn btn-primary">Edit</button>
     </TableCell>
     <TableCell colSpan="1">
      <button className="btn btn-danger">Delete</button>
     </TableCell> */}
      </TableRow>
    );
  }
}
