var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Test');
});

app.listen(7777, function() {
  console.log('Started up server');
});
