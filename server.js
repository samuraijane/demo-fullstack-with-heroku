require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');
const { Contact } = require('./models');

const app = express();
app.use(express.json());

app.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});

app.get('/contacts', async (req, res) => {
  const contacts = await Contact.findAll();
  res.json(contacts);
});

app.listen(process.env.PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});