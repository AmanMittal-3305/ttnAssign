import React, { useState } from "react";
import Children from "./Children";
import './Message.css'

function MessagePassing() {
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <h1>Message Passing (Parent)</h1>

      <input
        type="text"
        placeholder="Enter some message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Children message={message} />
    </div>
  );
}

export default MessagePassing;
