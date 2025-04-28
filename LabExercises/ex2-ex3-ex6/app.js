import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.static('public')); // Serve static files

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/calculator.html');
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) + Number(b);
  res.json({ result });
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) - Number(b);
  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) * Number(b);
  res.json({ result });
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (Number(b) === 0) return res.status(400).json({ error: "Cannot divide by zero" });
  const result = Number(a) / Number(b);
  res.json({ result });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
