import React from "react";

interface ScoreProps {
  total?: number;
  correct?: number;
}

const Score: React.FC<ScoreProps> = ({ total = 0, correct = 0 }) => {
  return (
    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
      <h2 className="text-xl sm:text-2xl font-bold text-text mb-3 sm:mb-4">Score</h2>
      {total > 0 && (
        <p className="text-base sm:text-lg">
          You got <span className="font-semibold text-success">{correct}</span>{" "}
          correct answers out of{" "}
          <span className="font-semibold text-primary">{total}</span> questions.
        </p>
      )}
    </div>
  );
};

export default Score;
