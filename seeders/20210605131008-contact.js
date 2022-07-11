'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contacts', [
      {
        address1: '123 Main Street',
        address2: 'No. 4',
        city: 'Springfield',
        state: 'OR',
        zipcode: '97403',
        mobilephone: '541-555-1212',
        email: 'andrea@email.com',
        firstName: 'Andrea',
        lastName: 'Anderson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address1: '456 First Avenue',
        address2: 'No. 7',
        city: 'Fargo',
        state: 'ND',
        zipcode: '58102',
        mobilephone: '701-555-1212',
        email: 'billy@email.com',
        firstName: 'Billy',
        lastName: 'Bragg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address1: '789 Running Springs Way',
        address2: '',
        city: 'Macon',
        state: 'GA',
        zipcode: '31201',
        mobilephone: '478-555-1212',
        email: 'carlos@email.com',
        firstName: 'Carlos',
        lastName: 'Cunningham',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
