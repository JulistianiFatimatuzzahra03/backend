'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_produk: {
        type: Sequelize.STRING
      },
      id_kategori: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kategoris',
          key: 'id_kategori'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      harga: {
        type: Sequelize.INTEGER
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produks');
  }
};