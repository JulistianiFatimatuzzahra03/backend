// Mengimpor modul express dan membuat router
const express = require('express');
const router = express.Router();

// Mengimpor controller produk
const produkController = require('../controller/produkController');

// Mengimpor middleware untuk verifikasi token
const { verifyToken } = require('../middlewares/auth');

// Definisi rute-rute CRUD untuk produk dengan memerlukan token verifikasi
router.get('/api/v1/produk', produkController.index); // Mendapatkan daftar produk
router.get('/api/v1/produk/:id', produkController.findOne); // Mendapatkan detail produk berdasarkan ID
router.post('/api/v1/produk', verifyToken, produkController.store); // Menyimpan produk baru
router.put('/api/v1/produk/:id', verifyToken, produkController.update); // Memperbarui data produk berdasarkan ID
router.delete('/api/v1/produk/:id', verifyToken, produkController.destroy); // Menghapus produk berdasarkan ID

// Mengekspor router untuk digunakan di modul lain
module.exports = router;