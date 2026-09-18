import { useState, useCallback } from "react";
import { getAIResponse } from "../config/chatFaqData";

export const useAIChat = (openApp) => {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! I am your Portfolio AI Assistant. Ask me about Hamza's skills, projects, resume, or how to navigate the portfolio!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(
    (input) => {
      if (!input.trim()) return;

      const userMsg = {
        id: `user-${Date.now()}`,
        sender: "user",
        text: input,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      setTimeout(() => {
        const responseData = getAIResponse(input);
        const aiMsg = {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: responseData.text,
          action: responseData.action,
          suggested: responseData.suggested,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, aiMsg]);
        setIsTyping(false);
      }, 500);
    },
    [],
  );

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "ai",
        text: "Chat cleared. What else can I help you with?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  }, []);

  const triggerAction = useCallback(
    (action) => {
      if (action && action.app && openApp) {
        openApp(action.app);
      }
    },
    [openApp],
  );

  return {
    messages,
    isTyping,
    sendMessage,
    clearChat,
    triggerAction,
  };
};

export default useAIChat;
