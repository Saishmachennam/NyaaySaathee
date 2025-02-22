import React from "react";
import Header from './headerPage'; // Importing the Header
import './loginPage.css';
import "./account.css";

const Account = () => {
  return (
    <>
      <Header /> {/* Adding the Header at the top */}
      <div className="account-container">
        <h2>My Account</h2>
        <div className="account-details">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Role:</strong> Citizen</p>
          <button className="logout-button">Logout</button>
        </div>
      </div>
    </>
  );
};

export default Account;
