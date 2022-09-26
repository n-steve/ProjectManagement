import React, { useState } from "react";

function Signup() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First_name:</label>
      <input
        type="text"
        id="first_name"
        value={first_name}
        onChange={(e) => setFirst(e.target.value)}
      />
      <label>Last_name:</label>
      <input
        type="text"
        id="last_name"
        value={last_name}
        onChange={(e) => setLast(e.target.value)}
      />
      <label>Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
