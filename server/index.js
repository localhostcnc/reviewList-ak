/* eslint-disable func-names */
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/controller.js');

const port = process.env.PORT || 3030;

// enabling CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.use(express.static('client/dist/'));
//  app.use(express.static(path.resolve(__dirname , '../../client/dist')));
app.use(express.static('client/dist/'));

app.use(bodyParser.json());


app.get('/client', (req, res) => {
  res.send('Welcome to the client hacker!');
});

app.get('/reviews', (req, res) => {
  db.getReviewItems((err, data) => {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      let result = data;
      if (req.query.n) {
        result = result.slice(0, req.query.n);
      }
      res.send(result);
    }
  });
});


app.get('/attributesrating/:attribute?', (req, res) => {
  db.getRatingAttributes((err, data) => {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      let result;
      if (req.params.attribute) {
        result = data.filter(obj => obj.attribute_name.toLowerCase() === req.params.attribute);
      } else {
        result = data;
      }
      res.send(result);
    }
  });
});

app.get('/reviews/summary/reviewcount', (req, res) => {
  db.getReviewsCount((err, data) => {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.send(data[0]);
    }
  });
});

app.get('/reviews/summary/averagerating', (req, res) => {
  db.getAverageRating((err, data) => {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.send(data[0]);
    }
  });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
