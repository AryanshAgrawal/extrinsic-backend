const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

// Database configuration
const poolConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'extrinsic',
  password: 'exmotive', 
  port: 5432,
};
console.log('🔵 CREATING POOL WITH CONFIG:', JSON.stringify(poolConfig, null, 2));
const db = new Pool(poolConfig);

// Explicit error listener to catch connection issues
db.on('error', (err) => {
    console.error('❌ Unexpected error on idle database client:', err.message);
});

// 1. Test Route
router.get('/test', (req, res) => {
    res.json({ message: "Authentication endpoint is working!" });
});

// 2. Registration Route
router.post('/register', async (req, res) => {
    console.log('🟢 POST /register called');
    try {
        const { username, password } = req.body;
        console.log('🟡 Received credentials:', { username });
        
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        console.log('🟣 About to INSERT into users table with db:', db);
        const newUser = await db.query(
            "INSERT INTO users (name, password_hash) VALUES ($1, $2) RETURNING id, name",
            [username, hashedPassword]
        );

        res.status(201).json({
            message: "User registered successfully!",
            user: newUser.rows[0]
        });

    } catch (err) {
        console.error("🔴 DATABASE CRASH LOG:", err.message); // <-- This prints the exact SQL error to your terminal
        res.status(500).json({ error: `Server database error: ${err.message}` });
    }
});

module.exports = router;