const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // allow React to communicate
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: "Message is returned by express.js" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
