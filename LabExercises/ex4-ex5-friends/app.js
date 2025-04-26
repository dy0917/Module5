import express from 'express';
import friendsRoute from './routes/friends.js';

const app = express();
const PORT = 3000;

app.use(express.json()); // to parse JSON body
app.use('/friends', friendsRoute);

app.get('/', (_req, res) => {
  res.send('It works!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
