import React, { useContext, useState } from "react";
import {
  Box,
  CardContent,
  Card,
  Avatar,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import FetchContext from "./FetchContext";
import Add from "@mui/icons-material/Add";
import ProfileForm from "../Forms/ProfileForm";
// import TicketForm from "../Forms/TicketForm";
function Profile() {
  const { user, setUser } = useContext(FetchContext);

  const [open, setOpen] = useState(false);

  function handleUpdate(updateProfile) {
    const update = user?.map((i) =>
      i.id === updateProfile.id ? updateProfile : i
    );
    setUser(update);
  }

  function handleButton() {
    setOpen(!open);
  }

  return (
    <div>
      <Box
        style={{
          background: "lightblue",
          padding: 50,
          justifyContent: "center",
          marginBottom: 100,

          flexDirection: "row",
        }}
      >
        {user?.map((x) => (
          <Card
            key={x}
            style={{
              backgroundColor: "skyblue",
              maxHeight: "1000%",
              maxWidth: "100%",
              height: 500,
              padding: 4,
              margin: "0 200px 100px 200px",

              flexDirection: "row",
            }}
          >
            <h2 align="center">Profile</h2>{" "}
            <Avatar
              size="large"
              sx={{ width: "30%", height: "30%", border: 3 }}
            >
              <Button>
                <input hidden accept="image" multiple type="file" />
                Uplode Image
              </Button>
            </Avatar>
            {!open ? (
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <ul>
                  <div> {x.first_name}</div>
                  <div>{x.last_name} </div>
                  <div>{x.email}</div>
                </ul>
              </CardContent>
            ) : (
              <ProfileForm />
            )}
          </Card>
        ))}
      </Box>
      )
    </div>
  );
}

export default Profile;
