import { Avatar, Button, Card, CardContent } from "@mui/material";
import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import FetchContext from "../Links/FetchContext";
function ProfileForm() {
  const { user } = useContext(FetchContext);
  const [email, setEmail] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [image, setImage] = useState("");

  const filterUser = user.filter((i) => i.id);
  console.log(filterUser);
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    fetch(`/user/${filterUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        image,
        email,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Card>
        <CardContent>
          <TextField
            value={first_name}
            onChange={(e) => setFirst(e.target.value)}
          ></TextField>
          <TextField
            value={last_name}
            onChange={(e) => setLast(e.target.value)}
          ></TextField>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </CardContent>
      </Card>
    </div>
  );
}
export default ProfileForm;
