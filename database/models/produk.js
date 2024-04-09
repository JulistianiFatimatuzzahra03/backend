'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    
    static associate(models) {
      Produk.belongsTo(models.Kategori, { foreignKey: 'id_kategori' });
    }
  }
  Produk.init({
    nama_produk: DataTypes.STRING,
    id_kategori: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    deskripsi: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};