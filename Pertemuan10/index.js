const express = require("express");
const { sequelize } = require("./configs/db");
const SiswaRoutes = require("./routes/SiswaRoute");
const GuruRoutes = require("./routes/GuruRoute");

const app = express();
app.use(express.json());

app.use("/api/siswa", SiswaRoutes);
app.use("/api/guru", GuruRoutes);

sequelize.sync().then(() => console.log("Database synced"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));