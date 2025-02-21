// api/server.js

const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ error: 'Data is required' });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];

  res.json({
    is_success: true,
    user_id: "22BCS15140",
    email: "22BCS15140@cuchd.in",
    roll_number: "22BCS15140",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

module.exports = app;

