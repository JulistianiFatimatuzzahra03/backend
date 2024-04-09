'use strict';
const passwordHash = require('password-hash');
const user = require('../models/user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    user = [];
    let salt = bcrypt.genSaltSync(10);
      users.push({
        name: 'admin',
        email: 'kalla@gmail.com',
        password: bcrypt.hashSync('apa', salt),
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return queryInterface.bulkInsert('Users', users, {});
    },
  
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {
      truncate: true

    });
  },
}