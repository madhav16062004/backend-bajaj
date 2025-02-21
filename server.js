const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Ensure this line is present to parse JSON bodies

app.post('/bfhl', (req, res) => {
  const { data } = req.body; // Destructure data from the request body
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});