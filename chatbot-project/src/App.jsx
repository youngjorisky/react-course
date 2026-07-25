import { useState } from "react";
import { ChatInput } from "./Components/ChatInput";
import "./App.css";
import ChatMessages from "./Components/ChatMessages";

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="app-container">
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages chatMessages={chatMessages} />
    </div>
  );
}

export default App;
