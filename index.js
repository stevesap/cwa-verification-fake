'use strict';

const validTans = [
  "b69ab69f-9823-4549-8961-c41sa74b2f36"
];

const server_port = process.env.PORT || 8004;
const server_host = process.env.IP || '0.0.0.0';

const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post('/version/v1/tan/verify', function (req, res) {
  console.log(req.body);
  if (validTans.includes(req.body.tan)) {
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

app.listen(server_port, server_host, function () {
    console.log( "Listening on " + server_host + ", port " + server_port )
});
