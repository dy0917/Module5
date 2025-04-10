const express = require('express');

// Server 1 - Port 3000
const app1 = express();
app1.get('/', (req, res) => {
  res.send('Hello from Server 1 on port 3000!');
});
app1.listen(3000, () => {
  console.log('Server 1 running at http://localhost:3000');
});

// Server 2 - Port 4000
const app2 = express();
app2.get('/', (req, res) => {
  res.send('Hello from Server 2 on port 4000!');
});
app2.listen(4000, () => {
  console.log('Server 2 running at http://localhost:4000');
});

// Server 3 - Port 5000
const app3 = express();
app3.get('/', (req, res) => {
  res.send('Hello from Server 3 on port 5000!');
});
app3.listen(5000, () => {
  console.log('Server 3 running at http://localhost:5000');
});
