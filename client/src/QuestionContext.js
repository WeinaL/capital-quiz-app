import React, { createContext, useState, useEffect } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuestion = async () => {
    try {
      const response = await fetch("/getQuestion");
      const data = await response.json();
      setQuestion(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchNewQuestion = async () => {
    setLoading(true);
    setError(null);
    fetchQuestion();
  };

  return (
    <QuestionContext.Provider
      value={{ question, loading, error, fetchNewQuestion }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
