const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/db");

const Guru = sequelize.define("Guru", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
},
nip: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
},
alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Guru;
