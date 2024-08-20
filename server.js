// server.js
const express = require('express');
const connectDB = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
