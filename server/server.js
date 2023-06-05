const express = require('express');
const app = express();
const port = 5000;

// Define your routes and middleware here

app.get('/', (req, res) => {
    const data = {
        message: 'Hello, World!',
        timestamp: new Date()
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


