import React, { useState } from 'react';
import axios from 'axios';


const Chatbot = ({setisloginned}) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputValue, sender: 'user' }]);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent",
        {
          contents: [
            {
              parts: [
                { text: inputValue }
              ]
            }
          ]
        },
        {
          headers: {
            "X-goog-api-key": "AIzaSyBydQpbpSGs6UvbdrDs3Ge0rpP04kY7DNw",
            "Content-Type": "application/json"
          }
        }
      );

      const aiReply = response.data.candidates[0].content.parts[0].text;
      setMessages((prev) => [...prev, { text: aiReply, sender: 'bot' }]);
    } catch (error) {
      console.error(error);
    }

    setInputValue('');
  };
  function logout() {
        setisloginned(false)
  }

  return (
 
    <div>


        
      <h1>Welcome to ChatBot</h1>
      <div id="inputResponse">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'user' : 'bot'}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="input"
          placeholder="Type a Message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
           <button type="submit" onClick={logout} >logout</button>
      </form>
    </div>
  );
};

export default Chatbot;