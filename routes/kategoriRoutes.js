// kategoriRoute.js
// Mengimpor modul express dan membuat router
const express = require('express');
const router = express.Router(); 

// Mengimpor controller kategori
const kategoriController = require('../controller/kategoriController');

// Mengimpor middleware untuk verifikasi token
const { verifyToken } = require('../middlewares/auth');

// Definisi rute-rute CRUD untuk kategori dengan memerlukan token verifikasi
router.get('/api/v1/kategori', kategoriController.index); // Mendapatkan daftar kategori
router.get('/api/v1/kategori/:id', kategoriController.show); // Mendapatkan detail kategori berdasarkan ID
router.post('/api/v1/kategori', verifyToken, kategoriController.store); // Menyimpan kategori baru
router.put('/api/v1/kategori/:id', verifyToken, kategoriController.update); // Memperbarui data kategori berdasarkan ID
router.delete('/api/v1/kategori/:id', verifyToken, kategoriController.destroy); // Menghapus kategori berdasarkan ID

// Mengekspor router untuk digunakan di modul lain
module.exports = router;