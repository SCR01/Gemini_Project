import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { createContext, useState } from 'react';

export const Context = createContext();

const AI_API_KEY = "AIzaSyB1eoeEtwItvXQ3XMyiQpqGP8skU6w8X44"; // ⚠️ Move to .env
const ai = new GoogleGenerativeAI(AI_API_KEY);

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    if (!prompt || prompt.trim() === '') {
      console.error('Empty prompt provided');
      return null;
    }

    try {
      setLoading(true);

      if (!previousPrompts.includes(prompt)) {
        setPreviousPrompts(prev => [...prev, prompt]);
      }

      setRecentPrompt(prompt);

      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
      const chat = model.startChat({ history: [] });

      const result = await chat.sendMessage(prompt);
      const response = await result.response.text();

      const cleanResponse = response.replace(/\*\*/g, '');

      setResultData(cleanResponse);
      setShowResult(true);

    } catch (error) {
      console.error("Error in onSent:", error);
    } finally {
      setLoading(false);
    }
  };

  // 👉 Add this
  const clearChat = () => {
    setInput('');
    setRecentPrompt('');
    setPreviousPrompts([]);
    setShowResult(false);
    setResultData('');
  };

  return (
    <Context.Provider value={{
      input,
      setInput,
      recentPrompt,
      setRecentPrompt,
      previousPrompts,
      setPreviousPrompts,
      onSent,
      showResult,
      setShowResult,
      loading,
      setLoading,
      resultData,
      setResultData,
      clearChat // 🆕 Export clearChat
    }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
