import React, { useContext } from "react";
import { Box, CardContent, Card, Avatar } from "@mui/material";
import FetchContext from "./FetchContext";
// import TicketForm from "../Forms/TicketForm";
function Profile() {
  const { user } = useContext(FetchContext);

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
        {user.map((i) => (
          <Card
            key={i.id}
            hover
            select
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
            <h2 align="center">Profile</h2>
            <CardContent
              style={{
                border: "solid",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                {i.first_name} {i.last_name}
              </div>
              <div>
                <p></p>
                {i.email}
              </div>
              <Avatar
                align="right"
                sx={{ width: "30%", height: "30%", border: 3 }}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F50%2F13%2F88%2F501388156728b05a9c0b6fbfa015a397.jpg&f=1&nofb=1&ipt=f7b5338c4807424add50a7fb544f7ea3af248628cf77315e3af7e736df8d4960&ipo=images"
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default Profile;
