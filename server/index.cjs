const express = require('express');
const fs = require("fs") ;
const path = require("path");
const csv = require("csv-parser");

//import pg from "pg";
// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "world",
//   password: "admin",
//   port: 5432,
// });
// db.connect();
// let quiz = [];
// db.query("SELECT * FROM capitals", (err, res) => {
//   if (err) {
//     console.error("Error executing query", err.stack);
//   } else {
//     quiz = res.rows;
//   }
//   db.end();
// });

const csvFilePath = path.join(__dirname, "capitals.csv");
let quiz = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (row) => {
    quiz.push(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/getQuestion", async (req, res) => {
  let question = await nextQuestion();
  res.json(question);
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  return randomCountry;
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});