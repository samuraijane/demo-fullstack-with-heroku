const router = require('express').Router();
const Sequelize = require('sequelize');
const { Contact } = require('../models');


// -----------------------------------------------------------------------------
//                                     DELETE
// -----------------------------------------------------------------------------
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id == 1) {
    res.json({ message: 'Andrea cannot be deleted. She is your best friend.', success: false});
  } else {
    await Contact.destroy({
        where: {
            id
        }
    })
    .catch(err => res.json({ ERR: err }));
    res.json({
      success: true
    });
  }
});


// -----------------------------------------------------------------------------
//                                     GET
// -----------------------------------------------------------------------------
router.get('/', async (req, res) => {
  const contacts = await Contact.findAll().catch(err => res.json({ERR: err}));
  res.json(contacts);
});


// -----------------------------------------------------------------------------
//                                     POST
// -----------------------------------------------------------------------------
router.post("/add", async (req, res) => {
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


// -----------------------------------------------------------------------------
//                                     PUT
// -----------------------------------------------------------------------------
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  if (id == 1) {
    res.json({ message: 'Andrea cannot be changed. She is perfect just the way she is.', success: false});
  } else {
    await Contact.update(req.body, {
      where: {
          id
      }
    })
    .catch(err => res.json({ERR: err}));
    res.json({
      success: true
    });
  }
});


module.exports = router;