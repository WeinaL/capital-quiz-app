import React, { useContext, useState, useEffect } from "react";
import { QuestionContext } from "../QuestionContext";

interface AnswerProps {
  handleScore: (isCorrect: boolean) => void;
}

const Answer: React.FC<AnswerProps> = ({ handleScore }) => {
  const context = useContext(QuestionContext);
  const question = context?.question;
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question) return;
    const isCorrect = userAnswer.trim().toLowerCase() === question.capital.toLowerCase();
    setIsCorrect(isCorrect);
    handleScore(isCorrect);
  };

  useEffect(() => {
    setIsCorrect(null);
    setUserAnswer("");
  }, [question]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter capital"
          autoFocus
          required
          disabled={isCorrect !== null}
        />
        <button type="submit" disabled={isCorrect !== null}>
          Submit
        </button>
      </form>
      {isCorrect !== null && (
        <div>
          {isCorrect ? (
            <p style={{ color: "green" }}>Correct!</p>
          ) : (
            <>
              <p style={{ color: "red" }}>Incorrect</p>
              <p>{question?.capital}</p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Answer;
