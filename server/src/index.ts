import express, { Request, Response } from "express";
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
    'https://capital-quiz-client-l51j8lwrh-weina-lius-projects.vercel.appp',
    'http://localhost:3000'
  ],
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept'],
  credentials: true
}));

// Health check endpoint for Render
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/getAllQuestions", (req: Request, res: Response) => {
  res.json(quiz);
});

app.get("/getQuestion", async (req: Request, res: Response) => {
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
