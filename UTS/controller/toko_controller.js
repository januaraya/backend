const Supplier = require('../models/supplier'); // Mengimpor model Supplier

// GET semua atau satu Supplier
const get = async (req, res) => {
    try {
        if (req.params.id) {
            const supplier = await Supplier.findByPk(req.params.id);
            if (supplier) {
                res.json(supplier); // Menampilkan satu supplier berdasarkan ID
            } else {
                res.status(404).json({ message: 'Supplier not found' });
            }
        } else {
            const suppliers = await Supplier.findAll();
            res.json(suppliers); // Menampilkan semua supplier
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST - buat Supplier baru
const post = async (req, res) => {
    const { namaSupplier, Perusahaan, Barang, kuota, hari } = req.body;

    // Validasi input sebelum menyimpan data ke DB
    if (!namaSupplier || !Perusahaan || !Barang || !kuota || !hari) {
        return res.status(400).json({ error: "Semua field harus diisi" });
    }

    try {
        const supplier = await Supplier.create({ namaSupplier, Perusahaan, Barang, kuota, hari });
        res.status(201).json(supplier); // Menampilkan supplier yang baru dibuat
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// PUT - update Supplier berdasarkan ID
const put = async (req, res) => {
    const { id } = req.params;
    const { namaSupplier, Perusahaan, Barang, kuota, hari } = req.body;

    try {
        const updated = await Supplier.update(
            { namaSupplier, Perusahaan, Barang, kuota, hari },
            { where: { id } }
        );
        if (updated[0] > 0) {
            res.json({ message: 'Supplier updated successfully' });
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE - hapus Supplier berdasarkan ID
const del = async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (supplier) {
            await supplier.destroy();
            res.json({ message: 'Supplier deleted successfully' });
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { get, post, put, del };
