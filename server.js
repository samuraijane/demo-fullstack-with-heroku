require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');
const { contacts } = require('./routes');

const app = express();
app.use(express.json());

app.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});

app.use('/contacts', contacts);

app.listen(process.env.PORT, () => {
  console.log(`The server is listening on port ${process.env.PORT}`);
});
