const express = require('express');
const axios = require('axios');

const config = require('./config.json');

const app = express();
const api = axios.create();

const PORT = process.env.PORT || 3001;

app.get('/api/current', function (req, res) {
  console.log('api/current GET');
  api.get(`http://api.weatherstack.com/current?access_key=${config.api_key}&query=London`)
    .then(data => {
      console.log(data.data);
      res.send(data.data);
    });
});

app.listen(PORT, () => {
  console.info('Server is listening on port 3001.');
});

module.exports = app;

