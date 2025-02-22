import { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './headerPage';
import './loginPage.css';

class Home extends Component {
    render() {
        return (
            <div className="portal-container">
                <Header />

                {/* Important Links Section */}
                <div className="important-links">
                    <h3>Important Topics</h3>
                    <ul>
                        <li><a href="https://indiankanoon.org/" target="_blank" rel="noopener noreferrer">Supreme Court of India – Official website for judgments, case status, and legal resources.</a></li>
                        <li><a href="https://nalsa.gov.in/" target="_blank" rel="noopener noreferrer">LMinistry of Law and Justice – Government portal for legal policies, acts, and amendments.</a></li>
                        <li><a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer">National Legal Services Authority (NALSA) – Free legal aid and services for underprivileged citizens.</a></li>
                        <li><a href="https://lawmin.gov.in/actsrules" target="_blank" rel="noopener noreferrer">Bar Council of India – Regulatory body for legal education and profession in India.</a></li>
                        <li><a href="https://doj.gov.in/" target="_blank" rel="noopener noreferrer">Income Tax India – Tax laws, e-filing, and compliance guidelines.</a></li>
                        <li><a href="https://doj.gov.in/" target="_blank" rel="noopener noreferrer">eCourts Services – Online access to case status, judgments, and court hearings.</a></li>

                    </ul>
                </div>

                {/* FAQs Section */}
                <div className="faq-container">
                    <h3>FAQs</h3>
                    <ul>
                        <li><strong>Q1:</strong> How can I get free legal aid in India? <br /><span>A: IYou can seek free legal assistance through NALSA (National Legal Services Authority) or State/District Legal Services Authorities. Visit NALSA for more details.</span></li>
                        <li><strong>Q2:</strong> How do I check the status of my court case online? <br /><span>A: You can check case status on the eCourts Services portal: eCourts by entering the case number or party details.</span></li>
                        <li><strong>Q3:</strong> What should I do if I receive a legal notice? <br /><span>A: Read the notice carefully, understand the claims, and consult a lawyer before responding. Never ignore a legal notice.</span></li>
                        <li><strong>Q3:</strong> Where can I file a consumer complaint? <br /><span>A: Lodge a complaint on consumerhelpline.gov.in.</span></li>

                    </ul>
                </div>

                {/* Chatbot Section */}
                <div className="chatbot-container">
                    {/* Left Side: Text & Button */}
                    <div className="chatbot-text">
                        <h3>Chat with Chatbot</h3>
                        <p>Get Instant Legal Guidance for Your Queries!</p>
                        <h4>✔️ Expert Insights | ✔️ Case Laws | ✔️ Legal Procedures | ✔️ Applicable Acts</h4>
                        <button className="chatbot-button">
                            <Link to="/chatbot" className="chatbot-link">Chat</Link>
                        </button>
                    </div>

                    {/* Right Side: Chatbot Image */}
                    <img src={"./chatbot-imageMain.jpeg"} alt="Chatbot" className="chatbot-image" />

                </div>
            </div>
        );
    }
}

export default Home;


