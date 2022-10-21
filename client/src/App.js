import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Links/Dashboard";

import Login from "./Links/Login";
import Navigation from "./Links/Navigation";
import Profile from "./Links/Profile";
import Projects from "./Links/Projects";
import { FetchContext } from "./Links/FetchContext";
import { Box } from "@mui/material";
function App() {
  const [user, setUser] = useState(false);
  // const [getApp, setGetApp] = useState([]);
  // const [getTicket, setGetTicket] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => {
        // const ticketData = user.apps?.map((i) => i.tickets);

        // setGetTicket(ticketData);
        // setGetApp(user.apps);
        setUser([user]);
      });
    // const timer = setInterval(() => {
    //   fetch("/me")
    //     .then((r) => r.json())
    //     .then((user) => setUser(user));
    // }, 5000);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <FetchContext.Provider value={{ user, setUser }}>
      <Box style={{ background: "lightblue" }}>
        <Navigation />
        <Routes>
          <Route path="/" />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
    </FetchContext.Provider>
  );
}

export default App;
