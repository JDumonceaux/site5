const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/api', (req, res) => {
  res.json({ "users" : ["userOne", "userTwo", "userThree"]});
});

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
