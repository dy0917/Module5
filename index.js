// import all user routes (up top in index.js)
const userRoutes = require('./routes/userRoutes.js');
// map the user routes to our app
app.use('/users', userRoutes);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})


// import all calculator routes (up the top)
import calculatorRoutes from './Routes/calculatorRoutes.js';


// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);