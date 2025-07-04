const express = require('express');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');
const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
dbConfig();

// Routes
app.use('/api/data', dataRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});