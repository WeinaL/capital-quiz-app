import express from 'express';


import capitals from "../data/capitals.json";

let quiz: any[] = [];

try {
  quiz = capitals;
  console.log('capitals.json file successfully loaded');
} catch (err) {
  console.error('Error loading capitals.json:', err);
}

const app = express();


app.get('/api', (req, res) => {
  res.send('Hello World!');   });

app.get('/getQuestion', async (req, res) => {
  let question = await nextQuestion();
  res.json(question);
});

async function nextQuestion(): Promise<any> {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  return randomCountry;
}

export default app;
