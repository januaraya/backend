const express = require('express');
const router = express.Router();
const supplierController = require('../controller/toko_controller'); // Pastikan path controller benar

// Routes untuk API Supplier
router.get('/', supplierController.get); // Mengambil semua supplier
router.get('/:id', supplierController.get); // Mengambil supplier berdasarkan ID
router.post('/', supplierController.post); // Membuat supplier baru
router.put('/:id', supplierController.put); // Update supplier berdasarkan ID
router.delete('/:id', supplierController.del); // Hapus supplier berdasarkan ID

module.exports = router;
