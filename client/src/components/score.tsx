import React from "react";

interface ScoreProps {
  total?: number;
  correct?: number;
}

const Score: React.FC<ScoreProps> = ({ total = 0, correct = 0 }) => {
  return (
    <div>
      <h2>Score</h2>
      {total > 0 && (
        <p>
          You got {correct} correct answers out of {total} questions.
        </p>
      )}
    </div>
  );
};

export default Score;
