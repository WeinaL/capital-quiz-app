import React, { useContext } from "react";
import { QuestionContext } from "../QuestionContext";

const Question = () => {
  const { question, loading, error, fetchNewQuestion } =
    useContext(QuestionContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{question.country}</h1>
      <button onClick={fetchNewQuestion}>Next Question</button>
    </div>
  );
};

export default Question;
