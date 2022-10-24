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
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => {
        setUser([user]);
      });
    const timer = setInterval(() => {
      fetch("/me")
        .then((r) => r.json())
        .then((user) => setUser(user));
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     fetch("/me")
  //       .then((r) => r.json())
  //       .then((data) => setUser(data));
  //   }, 3000);
  //   return () => clearInterval(timerId);
  // }, [timerId]);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <FetchContext.Provider value={(user, setUser)}>
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
