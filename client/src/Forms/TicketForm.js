// import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
function TicketForm({ handleChange, appId }) {
  // const { user, setUser } = useContext(FetchContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriorty] = useState("");
  const [app_id, setAppId] = useState(appId);

  function handleTicketSubmit(e) {
    e.preventDefault();

    fetch(`/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        app_id,
        title,
        description,
        issue,
        status,
        priority,
      }),
    })
      .then((r) => r.json())

      .then((data) => {
        handleChange(data);
      });
  }

  return (
    <>
      <form onSubmit={handleTicketSubmit}>
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
        <Button type="submit">"Submit Ticket"</Button>
      </form>
    </>
  );
}

export default TicketForm;
