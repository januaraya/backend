const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js'); // Pastikan path ke db.js benar

const Supplier = sequelize.define('supplier', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    namaSupplier: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Perusahaan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Barang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kuota: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hari: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
}, {
    tableName: 'supplier',
    timestamps: false, // Tidak menggunakan createdAt/updatedAt
});

module.exports = Supplier;
