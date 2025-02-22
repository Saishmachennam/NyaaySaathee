import React from "react";
import { Link } from "react-router-dom";

const CitizensLogin=()=>{
    return(
        <>
            <h1>This is for Citizens Login</h1>
            <button><Link to="/citizens">Login</Link></button>
        </>
    )
}

export default CitizensLogin