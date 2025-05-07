import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/getQuestion");
      const data = await res.json();
      console.log(data)
      setQuestion(data);
    };
    fetchData();
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!question ? "Loading question..." : question.country}</p>
      </header>
    </div>
  );
}

export default App;
