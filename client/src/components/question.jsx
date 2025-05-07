import React, { useState, useRef } from "react";

export default function Question({ question, nextQuestion, handleResult }) {

  const inputRef = useRef(null);
  const [correct, setCorrect] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      const userInput = inputRef.current.value;
      if (userInput === question.capital) {
        setCorrect(true);
      } else {
        setCorrect(false);
      }
    }
    handleResult(correct);
  };



  return (
    <>
      <p>{!question ? "Loading question..." : question.country}</p>
      <button onClick={() => nextQuestion()}>Next Question</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your answer"
          ref={inputRef}
        />
        <button type="submit">Submit</button>
      </form>
      {correct === true && <p>Correct!</p>}
      {correct === false && <p>Incorrect!</p>}
    </>
  );
}
