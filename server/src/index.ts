import express from "express";
import capitals from "../data/capitals.json";

let quiz: any[] = [];

try {
  quiz = capitals;
  console.log("capitals.json file successfully loaded");
} catch (err) {
  console.error("Error loading capitals.json:", err);
}

const app = express();

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/getAllQuestions", (req, res) => {
  res.json(quiz);
});

app.get("/getQuestion", async (req, res) => {
  let question = await nextQuestion();
  res.json(question);
});

const PORT = process.env.PORT || 3001;

let server: any;

if (process.env.NODE_ENV !== 'test') {
  server = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

async function nextQuestion(): Promise<any> {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  return randomCountry;
}

export { app, server };
