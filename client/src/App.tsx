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
      <div className="App">
        <header>Welcome to Capital Quiz!</header>
        <main>
          <Question />
          <Answer handleScore={handleScore} />
          <Score correct={correct} total={total} />
        </main>
      </div>
    </QuestionProvider>
  );
};

export default App;
