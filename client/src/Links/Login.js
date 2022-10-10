import React, { useState } from "react";
import LoginForm from "../Forms/LoginForm";
import Registration from "../Forms/Registration";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <h1>Hello</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p>
            Create an Account!
            <button onClick={() => setShowLogin(false)}>Register Here!</button>
          </p>
        </>
      ) : (
        <>
          <Registration onLogin={onLogin} />
          <p>
            Already have an Account?
            <button onClick={() => setShowLogin(true)}>Login Here!</button>
          </p>
        </>
      )}
    </>
  );
}
export default Login;
