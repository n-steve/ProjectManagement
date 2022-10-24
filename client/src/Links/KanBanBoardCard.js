import React, { useState } from "react";
import { Card, CardContent, TextField, Box, Button } from "@mui/material";

function KanBanBoardCard() {
  const [app_name, setAppName] = useState("");
  const [app_details, setAppDetails] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriorty] = useState("");
  const submitKanBan = (e) => {
    e.preventDefault();
    fetch("/apps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ app_name: app_name, app_details: app_details }),
    }).then((r) => {
      if (r.ok) {
        r.json(() =>
          fetch("/tickets", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              issue,
              status,
              priority,
            }),
          }).then((data) => console.log(data))
        );
      }
    });
  };

  return (
    <form onSubmit={submitKanBan}>
      <Card style={{}}>
        <TextField
          maxRows={4}
          type="text"
          value={app_name}
          onChange={(e) => setAppName(e.target.value)}
        />

        <TextField
          type="text"
          value={app_details}
          onChange={(e) => setAppDetails(e.target.value)}
        />
      </Card>
      <label>
        Title:
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Issue:
        <select
          id="ticket_issue"
          name="ticket[issue]"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        >
          <option>Bug</option>
          <option>TypeError</option>
          <option>Code Error</option>
        </select>
      </label>
      <label>
        Status:
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Open</option>
          <option>In Progress</option>
          <option>Complete</option>
        </select>
      </label>
      <label>
        Priority:
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriorty(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Urgent</option>
        </select>
      </label>
      <Button type="submit">submit</Button>
    </form>
  );
}

export default KanBanBoardCard;
