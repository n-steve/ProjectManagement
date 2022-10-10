import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  TextField,
} from "@mui/material";

function AppForm({ handleAppAdd }) {
  const [app_name, setAppName] = useState("");
  const [app_details, setAppDetails] = useState("");

  const obj = {
    app_name: app_name,
    app_details: app_details,
  };

  function handleAppSubmit(e) {
    e.preventDefault();
    fetch("/apps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((data) => {
        return handleAppAdd(data);
      });
  }

  return (
    <>
      <form>
        <h3>Create Application</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  type="text"
                  value={app_name}
                  helperText="Application Name:"
                  onChange={(e) => setAppName(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  helperText="Application Details"
                  value={app_details}
                  onChange={(e) => setAppDetails(e.target.value)}
                ></TextField>
              </TableCell>
              <TableCell>
                <Button onClick={handleAppSubmit}>Submit</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </>
  );
}
export default AppForm;
