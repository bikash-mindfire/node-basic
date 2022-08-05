const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    res.status(200).json({
        message: 'Welcome to the beginning of nothingness.'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})