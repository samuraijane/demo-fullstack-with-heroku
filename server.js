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

// DELETE
app.delete('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  await Contact.destroy({
      where: {
          id
      }
  })
  .catch(err => res.json({ERR: err}));
  res.json({
    success: true
  });
});

// GET
app.get('/contacts', async (req, res) => {
  const contacts = await Contact.findAll().catch(err => res.json({ERR: err}));
  res.json(contacts);
});

// POST
app.post("/contacts/add", async (req, res) => {
  const {
    address1,
    address2,
    city,
    email,
    firstName,
    lastName,
    mobilephone,
    state,
    zipcode
  } = req.body;
  if (!firstName || !lastName || !mobilephone) {
    res.json({error: "firstName, lastName, and mobilephone are required."})
  } else {
    saveContact(req.body)
    .then(message => res.json({message}))
    .catch(err => res.json({ERROR: `The following error has occurred: ${err}`}));
  }

  async function saveContact(data, id) {
    await Contact.create({
      address1,
      address2,
      city,
      email,
      firstName,
      lastName,
      mobilephone,
      state,
      zipcode
    });
    return `${firstName} ${lastName} has been added to your contact list.`;
  }
});

// PUT
app.put('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  await Contact.update(req.body, {
      where: {
          id
      }
  })
  .catch(err => res.json({ERR: err}));
  res.json({
    success: true
  });
});

app.listen(process.env.PORT, () => {
  console.log(`The server is listening on port ${process.env.PORT}`);
});



// exports.update = (req, res) => {
//   const id = req.params.id;
//   Tutorial.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + id
//       });
//     });
// };