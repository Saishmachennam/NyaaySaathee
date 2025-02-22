import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./chatbot.css";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatBoxRef = useRef(null);
  
    useEffect(() => {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }
    }, [messages]);
  
    const sendMessage = async () => {
      if (!input.trim()) return;
  
      const userMessage = { sender: "user", text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
  
      try {
        const addon =
          "If the story is about any legal matter or anything illegal, provide insights, case laws, landmark judgments, legal procedures, how law will handle it in India, applicable acts, and suggest real lawyers.";
        const response = await axios.post("http://127.0.0.1:5000/chat", {
          message: input + " " + addon,
        });
  
        const botMessage = { sender: "bot", text: response.data.response };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Error processing your request. Try again!" },
        ]);
      }
  
      setInput("");
    };
  
    return (
      <div className="chat-container">
        <h2>NYAAY SAATHEE - AI Legal Chatbot</h2>
        <div className="chat-box" ref={chatBoxRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            placeholder="Type your legal query..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    );
  };

  export default Chatbot