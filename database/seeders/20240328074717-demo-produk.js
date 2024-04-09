'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produks', [
      { nama_produk: 'Produk 1', id_kategori: '1', harga: 100, deskripsi: 'Deskripsi produk 1', foto: 'gambar1.jpg', stok: 50, },
      { nama_produk: 'Produk 2', id_kategori: '2', harga: 150, deskripsi: 'Deskripsi produk 2', foto: 'gambar2.jpg', stok: 30, },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produks', null, {});
  }
};