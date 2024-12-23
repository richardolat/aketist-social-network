require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`AKETIST Social Network is running on http://localhost:${port}`);
});