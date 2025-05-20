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

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const QuestionProvider: React.FC<QuestionProviderProps> = ({ children }) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchQuestion = async () => {    try {
      console.log('Fetching question from API ' + API_URL);
      const response = await fetch(`${API_URL}/getQuestion`);
      console.log('Response status:', response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`Failed to fetch question: ${response.status} ${errorText}`);
      }
      const data = await response.json();
      console.log('Received data:', data);
      setQuestion(data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err instanceof Error ? err : new Error('Getting question failed!'));
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
    try {
      const response = await fetch(`${API_URL}/getQuestion`);
      if (!response.ok) {
        throw new Error('Failed to fetch question');
      }
      const data = await response.json();
      setQuestion(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Getting question failed!'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <QuestionContext.Provider value={{ question, loading, error, fetchNewQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};
