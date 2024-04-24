const authController = require('./authController');
const userController = require('./userController');
const ketegoriController = require('./kategoriController');
const produkController = require('./produkController')
module.exports = {
    auth: authController,
    user: userController,
    kategori: ketegoriController,
    produk: produkController
};