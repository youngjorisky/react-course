import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";
import LoadingSpinnerImage from "../assets/loading-spinner.gif";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function enterKey(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  function escapeKey(event) {
    if (event.key === "Escape") {
      setInputText("");
    }
  }

  function handleKeyDown(event) {
    enterKey(event);
    escapeKey(event);
  }

  async function sendMessage() {
    if (inputText === "") {
      return;
    }
    if (isLoading) return;
    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="loading" src={LoadingSpinnerImage} />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
