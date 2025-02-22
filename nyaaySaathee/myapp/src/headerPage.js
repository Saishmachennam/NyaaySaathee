import React from "react";
import { Link } from "react-router-dom";
import "./headerPage.css";

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-title-container">
                <img 
                    src="https://res.cloudinary.com/daftefhtt/image/upload/v1740117346/la5ui5ya7usfxhrkjh45.jpg" 
                    alt="logo"
                    className="logo-header"
                />
                <h1 className="header-title">NYAAY SATHEE</h1>
            </div>
            <nav className="nav-links">
                <Link to="/chatbot" className="nav-item">Chatbot</Link>
                <Link to="/login" className="nav-item">Login</Link>
                <Link to="/judgements" className="nav-item">Judgements</Link>
                <Link to="/acts" className="nav-item">Acts</Link>
                <Link to="/schemes" className="nav-item">Schemes</Link>
                <Link to="/account" className="nav-item">Account</Link>
            </nav>
        </header>
    );
};

export default Header;