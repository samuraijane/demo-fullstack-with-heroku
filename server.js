require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');

const { contacts } = require('./routes');
const ensureAuth = require('./middleware/ensureAuth');
const { landing } = require('./views');

const app = express();
app.use(express.json());

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});


app.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});

app.get('/', (req, res) => {
  res.send(landing);
});

app.use('/contacts', ensureAuth, contacts);

app.listen(process.env.PORT, () => {
  console.log(`The server is listening on port ${process.env.PORT}`);
});
