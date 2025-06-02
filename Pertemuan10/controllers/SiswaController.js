const Siswa = require("../models/siswa");

const get = async (req, res) => {
  try {
    if (req.params.id) {
      const siswa = await Siswa.findByPk(req.params.id);
      if (siswa) {
        res.json(siswa);
      } else {
        res.status(404).json({ message: "siswa not found" });
      }
    } else {
      const siswa = await Siswa.findAll();
      res.json(siswa);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const post = async (req, res) => {
  try {
    const { nama, nisn, alamat } = req.body;
    const newsiswa = await Siswa.create({ nama, nisn, alamat });
    res.status(201).json(newsiswa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const put = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, nisn, alamat } = req.body;
    const update = await Siswa.update(
      { nama, nisn, alamat },
      { where: { id } }
    );
    res.json({ message: "siswa updated", update });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await siswa.destroy({ where: { id } });
    res.json({ message: "siswa deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  get,
  post,
  put,
  delete: del, // karena "delete" keyword di JS, kita alias-kan ke "del"
};
