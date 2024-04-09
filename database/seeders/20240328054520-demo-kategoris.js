'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kategoris', [
      { jenis_kategori: 'kerudung'},
      { jenis_kategori: 'abaya' },
      // tambahkan kategori lainnya
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategoris', null, {});
  }
};