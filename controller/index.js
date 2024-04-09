const authController = require('./authController');
const userController = require('./userController');
const ketegoriController = require('./kategoriController');
const produkController = require('./produkController')
module.exports = {
    auth: authController,
    userController,
    ketegoriController,
    produkController
};