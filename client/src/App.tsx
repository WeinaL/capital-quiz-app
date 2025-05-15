import React, { useState } from "react";
import { QuestionProvider } from "./QuestionContext";
import Question from "./components/question";
import Answer from "./components/answer";
import Score from "./components/score";

const App: React.FC = () => {
  const [correct, setCorrect] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const handleScore = (isCorrect: boolean) => {
    setTotal((total) => total + 1);
    setCorrect((correct) => (isCorrect ? correct + 1 : correct));
  };

  return (
    <QuestionProvider>
      <div className="min-h-screen bg-slate-50 px-4 py-6 sm:p-8 md:p-12">
        <header className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8 text-center">
          Welcome to Capital Quiz!
        </header>
        <main className="max-w-sm sm:max-w-xl md:max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <Question />
          <Answer handleScore={handleScore} />
          {total > 0 && <Score correct={correct} total={total} />}
        </main>
      </div>
    </QuestionProvider>
  );
};

export default App;
