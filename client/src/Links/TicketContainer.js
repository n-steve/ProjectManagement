import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

function TicketContainer() {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default TicketContainer;
