import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  // POST REQ to localhost:5000/users/login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/users/login", {
      method: "POST",
      body: e,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          className="idNumber"
          value={username}
          onChange={onUsernameChange}
          placeholder="Username"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
          type="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
