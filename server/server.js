const express = require('express');
const app = express();
const cors = require('cors');
const hostname = 'localhost';
const port = 4000;
const url = require('url');
const helpers = require('./helpers');

app.use(cors());

app.get('/quest', function (req, res) {
  const parsedQueryString = url.parse(req.url, true);
  const moves = parsedQueryString.query.moves.split('');
  let result = helpers.makeMoves(moves);
  res.send(result);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
