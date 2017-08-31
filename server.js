var express = require('express');
var moment = require('moment');
var app = express();

app.get("/", function (request, response) {
  const date = moment()
  response.send(date);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
