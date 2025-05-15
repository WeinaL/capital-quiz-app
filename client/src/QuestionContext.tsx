import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Question {
  id: number;
  country: string;
  capital: string;
}

interface QuestionContextType {
  question: Question | null;
  loading: boolean;
  error: Error | null;
  fetchNewQuestion: () => void;
}

export const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

interface QuestionProviderProps {
  children: ReactNode;
}

export const QuestionProvider: React.FC<QuestionProviderProps> = ({ children }) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchQuestion = async () => {
    try {
      const response = await fetch("/getQuestion");
      const data = await response.json();
      setQuestion(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchNewQuestion = () => {
    setLoading(true);
    setError(null);
    fetchQuestion();
  };

  return (
    <QuestionContext.Provider value={{ question, loading, error, fetchNewQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};
