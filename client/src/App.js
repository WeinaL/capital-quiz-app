import React, { useEffect, useState } from "react";
import Question from "./components/question"; 
import "./App.css";

function App() {
  const [question, setQuestion] = useState(null);

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

  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Question question={question} nextQuestion= {handleNextQuestion}></Question>
        </main>
      </header>
    </div>
  );
}

export default App;
