import React from "react";
import { Link } from "react-router-dom";
import "./login.css"
const Login = () => {
    return (<div className="login-con">
        <div className="login-container">
            <button className="login-button"><Link to="/officialsLogin" className="login-button-text">Login as Official</Link></button>
            <button className="login-button"><Link to="/citizensLogin" className="login-button-text">Login as Citizen</Link></button>
        </div>
        </div>
    );
};

export default Login;