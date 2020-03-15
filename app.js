const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

dotenv.config();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', (req, res) => {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => console.log(data))
    .catch((err) => console.error(err));
});

app.get('/party/:id', (req, res) => {
  res.render('party', { title: 'Page événement' });
});

app.listen(process.env.PORT, () =>
  console.log(`Front app listening on port ${process.env.PORT}!`),
);
