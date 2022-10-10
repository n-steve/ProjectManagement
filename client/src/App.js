import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Links/Dashboard";

import Login from "./Links/Login";
import Navigation from "./Links/Navigation";
import Profile from "./Links/Profile";
import Projects from "./Links/Projects";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route path="/" />
        <Route path="/dashboard" element={<DashBoard user={user} />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/projects"
          element={<Projects user={user} setUser={setUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
