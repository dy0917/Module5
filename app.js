const express = require('express')
const app = express()
const port = 3000

// map all routes to the express app
const calculatorRoutes =
require('./Routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);

// export the app
module.exports = app;