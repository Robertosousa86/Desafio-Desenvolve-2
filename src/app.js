const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  return res.send('Its alive! 🧟');
});

app.listen(PORT, () => {
  return console.log(`Server running at http://localhost:${PORT} 🚀`);
});
