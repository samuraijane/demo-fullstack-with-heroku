'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contacts', [{
      address1: '123 Main Street',
      address2: 'No. 2',
      city: 'Springfield',
      state: 'OR',
      zipcode: '97403',
      mobilephone: '541-555-1212',
      email: 'anna@email.com',
      firstName: 'Anna',
      lastName: 'Anderson',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
