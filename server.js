const express = require('express');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');
const applicantRoutes = require('./routes/applicantRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
require('dotenv').config();

const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', jobRoutes);
app.use('/api', applicantRoutes);
app.use('/api', interviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
