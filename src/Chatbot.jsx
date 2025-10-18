import React, { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Call Hugging Face API
    try {
      const res = await fetch(
        "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer ",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: {
              question: input,
              context: "SYBAU",
            },
          }),
        }
      );

      const data = await res.json();
      const botReply = data.answer || "Hmm, I’m not sure about that.";

      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Error: Could not connect to AI." },
      ]);
    }
  };

  return (
    <div>
      {/* Chat Button */}
      <button
        className="chat-button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#ffffffff",
          color: "white",
          border: "none",
          borderRadius: "50% 15% 50% 50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
      <i className="fa-solid fa-comment" 
         style={{color: "#333333f3",
         fontSize: "24px",
         textAlign: "center",
      }}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          data-aos="fade-left"
          className="chat-window"
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            height: "500px",
            border: "none",
            borderRadius: "10px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              fontSize: "14px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  margin: "8px 0",
                  color: msg.sender === "user" ? "black" : "gray",
                }}
              >
                <b>{msg.sender === "user" ? "You" : "Bot"}:</b> {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #cccccc49",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a question..."
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                borderRadius: "0 0 0 10px",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "10px",
                border: "none",
                background: "#161616ff",
                color: "white",
                borderRadius: "0 0 10px 0",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
