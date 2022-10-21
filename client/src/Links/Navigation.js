import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Tabs, Tab, Menu, Button, MenuItem } from "@mui/material";
import FetchContext from "./FetchContext";
function Navigation() {
  const { setUser } = useContext(FetchContext);
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  function logOut() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      <nav>
        <Box
          style={{
            background: "teal",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            style={{ border: "solid", color: "black" }}
          >
            <Tab
              label="Home"
              value={0}
              to="/"
              component={Link}
              style={{ border: "solid" }}
            />
            <Tab label="Profile" value={1} to="/profile" component={Link} />
            <Tab
              label="KanBan Board"
              value={2}
              to="/dashboard"
              component={Link}
            />
            <Tab label="Projects" value={3} to="/projects" component={Link} />
            <Tab label="LogOut" onClick={logOut} />
          </Tabs>
        </Box>
      </nav>
    </>
  );
}
export default Navigation;
