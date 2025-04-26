/*import express from 'express';
import friendsRoute from './routes/friends.js'; // note the .js extension

const app = express();
app.use(express.json());

app.use('/friends', friendsRoute);

app.get('/', (_req, res) => {
  res.send('It works!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});*/


import express from 'express';
import friendsRoute from './routes/friends.js';

const app = express();
const PORT = 3000;

app.use(express.json()); // to parse JSON body
app.use('/friends', friendsRoute);

app.get('/', (req, res) => {
  res.send('It works!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
