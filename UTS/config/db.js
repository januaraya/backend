const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toko', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

// Cek koneksi ke database
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;
