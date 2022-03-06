const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.HOST;

app.get('/', (req, res) => {
  return res.send('Its alive! 🧟');
});

app.listen(PORT, () => {
  return console.log(`Server running at http://localhost:${PORT} 🚀`);
});
