const express = require('express');
const app = express();
const db = require('./db/controller.js');
const bodyPraser = require('body-parser');
const PORT = 3030;

app.use(express.static('client/dist/'));
app.use(bodyPraser.json());

app.get('/reviews/summary/reviewcount', (req, res) => {
    res.send('Welcome to the server hacker!');
});

app.listen(PORT, () => {
    console.log('server is listening on port: ', PORT);
});