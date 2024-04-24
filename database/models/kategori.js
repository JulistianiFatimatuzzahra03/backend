'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {

    static associate(models) {
      Kategori.belongsTo(models.Produk, { foreignKey: 'id' });
    }
  }
  Kategori.init({
    jenis_kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kategori',
  });
  return Kategori;
};