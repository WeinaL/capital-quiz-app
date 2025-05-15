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
    <div className="mb-6 sm:mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter capital"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-lg border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
          autoFocus
          required
          disabled={isCorrect !== null}
        />
        <button
          type="submit"
          disabled={isCorrect !== null}
          className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
        >
          Submit
        </button>
      </form>
      {isCorrect !== null && (
        <div className="mt-4">
          {isCorrect ? (
            <p className="text-success font-semibold text-lg">Correct!</p>
          ) : (
            <div>
              <p className="text-error font-semibold text-lg">Incorrect</p>
              <p className="mt-2 text-text">The capital is: {question?.capital}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Answer;
