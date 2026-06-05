require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', require(path.join(__dirname, 'routes', 'auth')));
//app.use('/api/goals',    require('./routes/goals'));
//app.use('/api/missions', require('./routes/missions'));
//app.use('/api/streaks',  require('./routes/streaks'));
//app.use('/api/rewards',  require('./routes/rewards'));

const PORT = 5001;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on port ${PORT}`);
});