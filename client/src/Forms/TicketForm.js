// import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
function TicketForm({ handleTickets }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriorty] = useState("");
  // const [app_id, setAppId] = useState(0);
  function handleTicketSubmit(e) {
    if (e.target.value) e.preventDefault();
    fetch(`/tickets/:app_id/app`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        issue: issue,
        status: status,
        priority: priority,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        handleTickets(data);
      });
  }
  return (
    <>
      <form>
        <label>Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Issue:</label>
        <select
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        >
          <option>Bug</option>
          <option>TypeError</option>
          <option>Code Error</option>
        </select>
        <label>Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Open</option>
          <option>In Progress</option>
          <option>Complete</option>
        </select>
        <label>Priority:</label>
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
        <Button onClick={handleTicketSubmit}>Submit</Button>
      </form>
    </>
  );
}
export default TicketForm;
