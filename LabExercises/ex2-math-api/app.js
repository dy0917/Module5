import express from 'express';
const app = express();

// 'add' route
app.get('/add', (req, res) => {
  const { a, b } = req.query;  // Accepts a and b as query parameters
  if (a && b) {
    const result = Number(a) + Number(b);
    res.json({ result });
  } else {
    res.status(400).send('Please provide both a and b parameters.');
  }
});

// 'subtract' route
app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  if (a && b) {
    const result = Number(a) - Number(b);
    res.json({ result });
  } else {
    res.status(400).send('Please provide both a and b parameters.');
  }
});

// 'multiply' route
app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  if (a && b) {
    const result = Number(a) * Number(b);
    res.json({ result });
  } else {
    res.status(400).send('Please provide both a and b parameters.');
  }
});

// 'divide' route
app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (a && b) {
    if (Number(b) === 0) {
      res.status(400).send('Cannot divide by zero.');
    } else {
      const result = Number(a) / Number(b);
      res.json({ result });
    }
  } else {
    res.status(400).send('Please provide both a and b parameters.');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
