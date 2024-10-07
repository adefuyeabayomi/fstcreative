import React, { useState, useEffect } from "react";
import { useSocket } from "../../contexts/SocketContext";

const ChatPage: React.FC = () => {
  const { socket } = useSocket();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (socket) {
      // Listen for messages from the server
      socket.on("message", (message: string) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (socket) {
        socket.off("message");
      }
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket && input) {
      // Emit a message to the server
      socket.emit("message", input);
      setInput(""); // Clear the input
    }
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatPage;
