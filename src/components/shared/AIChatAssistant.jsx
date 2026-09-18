import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CreateWindowContext } from "../../context/WindowContext";
import useAIChat from "../../hooks/useAIChat";
import useOutsideClick from "../../hooks/useOutsideClick";
import { FaPaperPlane, FaTrash, FaTimes, FaRobot } from "react-icons/fa";
import "./aichat.scss";

const defaultPrompts = [
  "What are your core skills?",
  "Show me your projects",
  "How can I contact you?",
  "Can I see your resume?",
];

const AIChatAssistant = () => {
  const {
    assistantOpen,
    setAssistantOpen,
    portfolioMode,
    openApp,
    animationsEnabled,
  } = useContext(CreateWindowContext);

  const [input, setInput] = useState("");
  const panelRef = useRef(null);
  const messagesEndRef = useRef(null);

  const { messages, isTyping, sendMessage, clearChat, triggerAction } = useAIChat(openApp);
  const isWindows = portfolioMode === "windows";

  useOutsideClick(panelRef, () => {
    setAssistantOpen(false);
  }, assistantOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!panelRef.current || !assistantOpen || !animationsEnabled) return;
    if (isWindows) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" },
      );
    } else {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, scale: 0.85, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "back.out(1.5)" },
      );
    }
  }, [assistantOpen, isWindows, animationsEnabled]);

  if (!assistantOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  const handleChipClick = (text) => {
    sendMessage(text);
  };

  return (
    <div
      ref={panelRef}
      className={`ai-assistant-shell ${isWindows ? "copilot-shell" : "siri-shell"}`}
    >
      <div className="ai-header">
        <div className="ai-title">
          {isWindows ? (
            <>
              <div className="copilot-icon">
                <FaRobot />
              </div>
              <div>
                <strong>Portfolio Copilot</strong>
                <small>AI Assistant</small>
              </div>
            </>
          ) : (
            <>
              <div className="siri-orb">
                <div className="siri-glow"></div>
              </div>
              <div>
                <strong>Siri Assistant</strong>
                <small>macOS Portfolio AI</small>
              </div>
            </>
          )}
        </div>

        <div className="ai-actions">
          <button className="clear-btn" onClick={clearChat} title="Clear Chat">
            <FaTrash />
          </button>
          <button className="close-btn" onClick={() => setAssistantOpen(false)} aria-label="Close">
            <FaTimes />
          </button>
        </div>
      </div>

      <div className="ai-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-bubble-wrap ${msg.sender}`}>
            <div className="chat-bubble">
              <p>{msg.text}</p>
              {msg.action && (
                <button className="action-btn" onClick={() => triggerAction(msg.action)}>
                  ⚡ {msg.action.label}
                </button>
              )}
              <span className="timestamp">{msg.timestamp}</span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-bubble-wrap ai">
            <div className="chat-bubble typing">
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="ai-suggestions">
        {defaultPrompts.map((p, idx) => (
          <button key={idx} className="chip" onClick={() => handleChipClick(p)}>
            {p}
          </button>
        ))}
      </div>

      <form className="ai-input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={isWindows ? "Ask Copilot anything about Hamza..." : "Ask Siri anything..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="send-btn" disabled={!input.trim()}>
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default AIChatAssistant;
