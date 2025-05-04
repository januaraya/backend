const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const supplierRoutes = require('./routes/toko_routes'); // Fix path dan nama

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Menggunakan express.json() untuk parsing JSON body secara otomatis
app.use('/api/supplier', supplierRoutes); // Menggunakan route yang sudah dibuat

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
