// routes/calculator.js
import express from 'express';

const router = express.Router();

// Addition
router.get('/add', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const result = a + b;
    res.json({ result });
});

// Subtraction
router.get('/subtract', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const result = a - b;
    res.json({ result });
});

// Multiplication
router.get('/multiply', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const result = a * b;
    res.json({ result });
});

// Division
router.get('/divide', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    
    if (b === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }

    const result = a / b;
    res.json({ result });
});

export default router;
