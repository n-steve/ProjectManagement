import React, { useContext } from "react";
import AppForm from "../Forms/AppForm";
import { FetchContext } from "./FetchContext";
import { v4 as uuidv4 } from "uuid";
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
// import ProjectList from "./ProjectList";
function Projects() {
  const { user, setUser } = useContext(FetchContext);

  const handleAppAdd = (newApp) => {
    setUser([...user, newApp]);
  };

  const handleAppDelete = (deleteApp) => {
    const updateApp = user?.filter((i) => i.id !== deleteApp.id);
    setUser(updateApp);
  };

  function handleUpdateApp(updateApp) {
    const update = user?.map((i) => (i.id === updateApp.id ? updateApp : i));
    setUser(update);
  }
  console.log(user);
  const displayData = user?.map((i, index) =>
    i.apps?.map((x) => (
      <ProjectContainer
        key={`${x.id}-${uuidv4}`}
        data={i.apps}
        id={x.id}
        appName={x.app_name}
        appDetails={x.app_details}
        tickets={x.tickets}
        handleUpdateApp={handleUpdateApp}
        handleAppDelete={handleAppDelete}
        handleAppAdd={handleAppAdd}
        index={index}
      />
    ))
  );
  console.log(user);

  return (
    <div>
      <h1 style={{ position: "static", textAlign: "center" }}>Projects!</h1>
      <AppForm handleAppAdd={handleAppAdd} />

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow styles={{ backgroundColor: "lightblue" }}>
              <TableCell style={{ fontWeight: "bold" }} align="left">
                <h3>Project Name: Project Details: </h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{displayData}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Projects;
// {user.map((i, index) => (
//   <ProjectContainer
//     key={`${i.id}-${index}-${uuidv4}`}
//     id={i.id}
//     appName={i.app_name}
//     appDetails={i.app_details}
//     handleUpdateApp={handleUpdateApp}
//     handleAppDelete={handleAppDelete}
//     data={i}
//     index={index}
//   />
// ))}
