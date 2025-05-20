import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import capitals from "../data/capitals.json";

let quiz: any[] = [];

try {
  quiz = capitals;
  console.log("capitals.json file successfully loaded");
} catch (err) {
  console.error("Error loading capitals.json:", err);
}

const app = express();

// Enable CORS with specific configuration
app.use(cors({
  origin: [
    'https://world-capital-quiz.onrender.com',
    'http://localhost:3000'
  ],
  methods: ['GET'],
  credentials: true
}));

// Health check endpoint for Render
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

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

async function nextQuestion(): Promise<any> {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  return randomCountry;
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

export default app;
