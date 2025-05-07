import React, { useEffect, useState } from "react";
import Question from "./components/question"; 
import "./App.css";

function App() {
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/getQuestion");
      const data = await res.json();
      setQuestion(data);
    };
    fetchData();
  }, []);

  const handleNextQuestion = async () => {
    console.log("hell0")
    const res = await fetch("/getQuestion");
    const data = await res.json();
    setQuestion(data);
  }
  const handleResult = (correct) => {
    if (correct) {
      setScore(score + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <main>
          <title>Captial Quiz</title>
          <h1>Capital Quiz</h1>
          <p>scores: {score}</p>
          <Question question={question} nextQuestion= {handleNextQuestion} handleResult={handleResult}></Question>
        </main>
      </header>
    </div>
  );
}

export default App;
