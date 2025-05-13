import React, { useState } from "react";
import "./App.css";
import { QuestionProvider } from "./QuestionContext";
import Question from "./components/question";
import Answer from "./components/answer";
import Score from "./components/score";

function App() {
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);

  const handleScore = (isCorrect) => {
    setTotal((total) => {
      const newTotal = total + 1;

      return newTotal;
    });

    setCorrect((correct) => {
      const newCorrect = isCorrect ? correct + 1 : correct;

      return newCorrect;
    });
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
}

export default App;
