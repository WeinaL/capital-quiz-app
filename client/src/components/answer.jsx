import React, { useContext, useState, useEffect } from "react";
import { QuestionContext } from "../QuestionContext";

const Answer = ({ handleScore }) => {
  const { question } = useContext(QuestionContext);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect =
      userAnswer.trim().toLowerCase() === question.capital.toLowerCase();
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
              <p>{question.capital}</p>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default Answer;
