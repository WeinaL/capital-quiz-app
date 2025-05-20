import express from "express";
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

// Enable CORS for all origins during development and testing
app.use(cors());

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

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

// Export for Vercel
export default app;
