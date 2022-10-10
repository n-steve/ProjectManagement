import React, { useState } from "react";
import TicketForm from "../Forms/TicketForm";
import {
  TableRow,
  TableCell,
  Collapse,
  TableHead,
  TableBody,
  Box,
  Typography,
  Table,
  Button,
  IconButton,
} from "@mui/material";
import Edit from "./Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExapndLessIcon from "@mui/icons-material/ExpandLess";
import Delete from "@mui/icons-material/Delete";
import EditButton from "@mui/icons-material/Edit";

function ProjectContainer(props) {
  const {
    id,
    appname,
    appdetails,
    handleAppDelete,
    handleTickets,
    tickets,
    handleUpdateApp,
  } = props;
  console.log(props);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openTicket, setOpenTicket] = useState(false);

  const deleteApp = () => {
    fetch(`/users/apps/${id}`, { method: "DELETE" })
      .then((r) => r.json())
      .then((data) => {
        return handleAppDelete(data);
      });
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {!hidden ? (
          <>
            <TableCell>
              <IconButton size="small" onClick={() => setOpen(!open)}>
                {!open ? <ExpandMoreIcon /> : <ExapndLessIcon />}
              </IconButton>
              {appname}
            </TableCell>
            <TableCell align="left">{appdetails}</TableCell>
            <TableCell>
              <IconButton onClick={() => setHidden(!hidden)}>
                {!hidden ? (
                  <EditButton />
                ) : (
                  <Edit
                    setHidden={setHidden}
                    handleUpdateApp={handleUpdateApp}
                    id={id}
                    deleteApp={deleteApp}
                  />
                )}
              </IconButton>
              <IconButton onClick={() => deleteApp(id)}>
                <Delete />
              </IconButton>
            </TableCell>
          </>
        ) : (
          <Edit />
        )}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                align="left"
              >
                Ticket {id}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Issue</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>
                      <Button onClick={() => setOpenTicket(!openTicket)}>
                        Create Ticket
                      </Button>
                    </TableCell>
                    <TableCell>
                      {!openTicket ? null : (
                        <TicketForm handleTickets={handleTickets} />
                      )}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tickets.map((x) => (
                    <TableRow key={x.id}>
                      <TableCell align="right">{x.title}</TableCell>
                      <TableCell aling="right">{x.description}</TableCell>
                      <TableCell align="right">{x.issue}</TableCell>
                      <TableCell align="right">{x.status}</TableCell>
                      <TableCell>{x.priority}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ProjectContainer;
// {tickets.map((i, index) => (
//   <ul key={`${i.id}-${index}`}>
//     <li>{i.title}</li>
//     <li>{i.description}</li>
//     <li>{i.issue}</li>
//     <li>{i.status}</li>
//     <li>{i.priority}</li>
//   </ul>
// ))}

// const deleteData = () => {
//   fetch(`/users/apps/:id`, { method: "DELETE" })
//     .then((r) => r.json())
//     .then((data) => {
//       return data;
//     });
// };

/* <TableRow onClick={(e) => console.log("click", e, id)}>
{hidden ? (
  <Edit
    setHidden={setHidden}
    handleUpdateApp={handleUpdateApp}
    id={id}
    deleteApp={deleteApp}
  />
) : (
  <>
    <TableCell sortDirection="asc">
      {id} {appname}
    </TableCell>
    <TableCell>{appdetails}</TableCell>
    <TableCell>
      <Button onClick={toggleButton}>{!hidden ? "Edit" : null}</Button>
    </TableCell>
  </>
)} */
