const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/add', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 + num2 });
});

app.post('/api/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 - num2 });
});

app.post('/api/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 * num2 });
});

app.post('/api/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    res.status(400).send('Cannot divide by zero');
  } else {
    res.json({ result: num1 / num2 });
  }
});

module.exports = app;
