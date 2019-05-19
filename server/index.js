const express = require('express');
const app = express();
const db = require('./db/controller.js');
const bodyPraser = require('body-parser');
const PORT = 3030;

app.use(express.static('client/dist/'));
app.use(bodyPraser.json());

app.get('/client', (req, res) => {
    res.send('Welcome to the client hacker!');
});

app.get('/reviews', (req, res) => {
    db.getAll((err, data) => {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.status(200);
            res.send(data);
        }
    })
})

app.listen(PORT, () => {
    console.log('server is listening on port: ', PORT);
});