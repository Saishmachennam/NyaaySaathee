import React from "react";
import { Link } from "react-router-dom";
import './officialsLoginPage.css'

const OfficialsLogin=()=>{
    return(
        <div className="login-page-container">
            <input type="input" className="username"/>
            <input type="input" className="password"/>
            <button className="login-button"><Link to="/officials" className="login-btn">Login</Link></button>
        </div>
    )
}

export default OfficialsLogin 