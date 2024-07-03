const express = require('express');
const connectDB = require('./config/db');
// const errorMiddleware = require('./middlewares/errorMiddleware');
// const routes = require('./routes'); 
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Use Routes
// app.use('/api', routes);

// Error Handling Middleware
// app.use(errorMiddleware);

module.exports = app;
