const express = require('express');
const pool = require('./config/db'); // This pulls in your pgAdmin connection settings

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// A simple test route to make sure the server is alive
app.get('/', (req, res) => {
    res.send('🚀 Extrinsic Backend Server is running smoothly!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});