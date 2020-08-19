import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <input className="idNumber" placeholder="Id Number" />
            <input
                placeholder="Password"
                secureTextEntry="true"
                type="password"
            />
            <Link to="/">
                <button>Login</button>
            </Link>
        </div>
    );
}

export default Login;
