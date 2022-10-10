import React, { useState, useEffect } from "react";
import AppForm from "../Forms/AppForm";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
} from "@mui/material";
import ProjectContainer from "../Links/ProjectContainer";
function Projects({ user }) {
  const [getData, setGetData] = useState([]);
  const [getApp, setGetApp] = useState([]);
  const [getTicket, setGetTicket] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/users/:user_id`)
      .then((r) => r.json())
      .then((data) => {
        setGetApp(data.apps);
        setGetTicket(data.tickets);
        setGetData(data);
      });
  }, []);

  const handleTickets = (newTicket) => {
    setGetTicket([...getTicket, newTicket]);
  };

  const handleAppAdd = (newApp) => {
    const applicationsInfo = getData.apps;
    setGetData([...applicationsInfo, newApp]);
  };
  const handleAppDelete = (deleteApp) => {
    const applicationInfo = getData.apps;
    const updateApp = applicationInfo.filter((i) => i.id !== deleteApp.id);
    setGetData(updateApp);
  };

  const handleUpdateApp = (updateApp) => {
    const update = getData.apps.map((i) =>
      i.id === updateApp.id ? updateApp : i
    );
    setGetData(update);
  };

  const displayData = getData.apps?.map((i) => {
    console.log(i);
    return (
      <ProjectContainer
        key={i.id}
        id={i.id}
        appname={i.app_name}
        appdetails={i.app_details}
        tickets={i.tickets}
        handleAppDelete={handleAppDelete}
        handleTickets={handleTickets}
        handleAppAdd={handleAppAdd}
        handleUpdateApp={handleUpdateApp}
      />
    );
  });

  return (
    <>
      <h1 style={{ position: "static", textAlign: "center" }}>Projects!</h1>
      <AppForm getData={getData} handleAppAdd={handleAppAdd} />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="left">App Name: </TableCell>
              <TableCell align="left">App Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{displayData}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Projects;
