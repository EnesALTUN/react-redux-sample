import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = (props) => {
  const { columns, rows, styles } = props;

  return (
    <Table sx={{ ...styles, minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {columns.map((column, index) => (
            <TableCell key={index}>{column.headerName}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, colIndex) => (
              <TableCell
                key={colIndex}
                component="th"
                scope="row"
                align={column.align ?? "left"}
              >
                {column.field === "index" ? rowIndex + 1 : row[column.field]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
