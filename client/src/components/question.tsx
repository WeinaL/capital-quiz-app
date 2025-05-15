import React, { useContext } from "react";
import { QuestionContext } from "../QuestionContext";

const Question: React.FC = () => {
  const context = useContext(QuestionContext);
  if (!context) return <p className="text-gray-500">No context</p>;
  const { question, loading, error, fetchNewQuestion } = context;

  if (loading) return <p className="text-gray-500 animate-pulse">Loading...</p>;
  if (error) return <p className="text-error">Error: {error.message}</p>;

  return (
    <div className="mb-6 sm:mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-text mb-4 sm:mb-6">
        {question?.country}
      </h1>
      <button
        onClick={fetchNewQuestion}
        className="w-full sm:w-auto px-4 sm:px-6 py-2.5 bg-primary hover:bg-secondary text-white font-semibold rounded-lg transition-colors"
      >
        Next Question
      </button>
    </div>
  );
};

export default Question;
