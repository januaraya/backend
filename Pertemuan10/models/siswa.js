const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/db");

const Siswa = sequelize.define("Siswa", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nisn: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Siswa;
