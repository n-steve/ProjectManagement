import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
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
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Delete from "@mui/icons-material/Delete";
import EditButton from "@mui/icons-material/Edit";
import FetchContext from "./FetchContext";

function ProjectContainer(props) {
  const {
    id,
    appName,
    appDetails,
    tickets,
    handleAppAdd,
    handleUpdateApp,
    handleAppDelete,
  } = props;
  const { user, setUser } = useContext(FetchContext);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openTicket, setOpenTicket] = useState(false);
  const deleteApp = () => {
    fetch(`/apps/${id}`, { method: "DELETE" }).then((data) =>
      handleAppDelete(data)
    );
  };
  const [appId, setAppId] = useState(id);

  // const handleChange = (newData) => {
  //   Object.entries(x).map((i) => {
  //     const filterData = i.filter((f, index) => {
  //       if ((newData = f));
  //       console.log(f.id, newData.id, f, index);
  //       return f;
  //     });
  //     setX(filterData);
  //   });
  // };

  const handleChange = (newTicket) => {
    setUser([...user, newTicket]);
  };

  // const handleChange = (ticketData) => {
  //   const mapData = x.filter((i) => i.id === ticketData.app_id);

  // console.log(mapData, ticketData.app_id, x);

  // console.log(x.filter((i) => i.id));
  // console.log(
  //   x.map((i) => {
  //     console.log(i, index);
  //     if (i.id === i.id) return x;
  //   })
  // );
  // const handleChange = (newData) => {
  //   const mapData = x.map((i) => {
  //     if (i.id) return x;
  //   });

  //   console.log("click: ", mapData, newData);
  // };

  return (
    <React.Fragment>
      <TableRow
        selected
        hover
        size="small"
        style={{ margin: "50%", float: "center" }}
        sx={{
          "& > *": { borderBottom: "unset" },
          backgroundColor: "lightblue",
        }}
      >
        {!hidden ? (
          <>
            <TableCell>
              <h4 align="left">
                <IconButton size="small" onClick={() => setOpen(!open)}>
                  {!open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </IconButton>
                {id}
                {appName} {""}
                {appDetails}
              </h4>
            </TableCell>
            <TableCell></TableCell>
            {/* Buttons below to Click Edit or Delete */}
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
        <TableCell colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                align="left"
              >
                Ticket
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Issue</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>
                      {!openTicket ? (
                        <Button
                          size="small"
                          variant="contained"
                          onClick={() => setOpenTicket(!openTicket)}
                        >
                          Create Ticket
                        </Button>
                      ) : (
                        <TicketForm
                          handleChange={handleChange}
                          appId={appId}
                          handleAppAdd={handleAppAdd}
                          setOpenTicket={setOpenTicket}
                        />
                      )}
                    </TableCell>
                    {/* <TableCell>
                      {!openTicket ? null : (
                        <TicketForm
                          setOpenTicket={setOpenTicket}
                          data={data}
                          id={id}
                        />
                      )}
                    </TableCell> */}
                  </TableRow>
                </TableHead>

                {tickets?.map((x, index) => (
                  <TableBody key={`${x.id}-${index}-${uuidv4}`}>
                    <TableRow>
                      <TableCell>
                        {x.id}
                        {x.app_id}
                      </TableCell>
                      <TableCell aling="right">{x.title}</TableCell>
                      <TableCell aling="right">{x.description}</TableCell>
                      <TableCell align="right">{x.issue}</TableCell>
                      <TableCell align="right">{x.status}</TableCell>
                      <TableCell>{x.priority}</TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default ProjectContainer;
