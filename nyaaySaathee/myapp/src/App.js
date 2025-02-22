import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./homePage";
import Login from "./loginPage";
import Official from "./officialPage";
import OfficialsLogin from "./officialsLoginPage";
import CitizensLogin from "./citizensLoginPage";
import Citizens from "./citizenPage";
import ActsList from "./actsListPage";
import JudgementList from "./judgementsListPage";
import SchemesList from "./schemesListPage";
import Chatbot from "./chatbot";
import Account from "./account";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/acts">Acts</Link></li>
          <li><Link to="/judgements">Judgements</Link></li>
          <li><Link to="/schemes">Schemes</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/account" className="account-link">Account</Link></li>
        </ul>
      </nav>

      {/* Routing Setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/officialsLogin" element={<OfficialsLogin />} />
        <Route path="/officials" element={<Official />} />
        <Route path="/citizensLogin" element={<CitizensLogin />} />
        <Route path="/citizens" element={<Citizens />} />
        <Route path="/acts" element={<ActsList />} />
        <Route path="/judgements" element={<JudgementList />} />
        <Route path="/schemes" element={<SchemesList />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
