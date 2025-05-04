const express = require("express");
const cors = require('cors');
const mahasiswaroutes = require('./routes/toko_routes'); // Pastikan path dan nama sudah benar

const app = express();
const port = 3000;

// Middleware untuk CORS
app.use(cors());

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk log request body
app.use((req, res, next) => {
    console.log('Request Body:', req.body);  // Debugging request body
    next();
});

// Routing untuk API Supplier
app.use('/api/supplier', mahasiswaroutes);

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
