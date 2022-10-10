import React, { useState } from "react";
import { TableCell, IconButton, TextField } from "@mui/material";
function Edit({ id, setHidden, handleUpdateApp, deleteApp }) {
  const [app_name, setAppName] = useState("");
  const [app_details, setAppDetails] = useState("");

  const obj = {
    app_name: app_name,
    app_details: app_details,
  };

  function handleUpdate(e) {
    setHidden(false);
    e.preventDefault();
    fetch(`/apps/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((data) => {
        handleUpdateApp(data);
      });
  }

  return (
    <>
      <TableCell>
        <TextField
          type="text"
          value={app_name}
          onChange={(e) => setAppName(e.target.value)}
        />
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          value={app_details}
          onChange={(e) => setAppDetails(e.target.value)}
        />
      </TableCell>
      <TableCell>
        <IconButton onClick={handleUpdate} endIcon>
          Update
        </IconButton>
        <IconButton onClick={deleteApp} endIcon>
          Delete
        </IconButton>
      </TableCell>
    </>
  );
}

export default Edit;
