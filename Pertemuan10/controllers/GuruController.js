const Guru = require("../models/guru");

const get = async (req, res) => {
  try {
    if (req.params.id) {
      const guru = await Guru.findByPk(req.params.id);
      if (guru) {
        res.json(guru);
      } else {
        res.status(404).json({ message: "guru not found" });
      }
    } else {
      const guruList = await Guru.findAll();
      res.json(guruList);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const post = async (req, res) => {
  try {
    const { nama, nip, alamat } = req.body;
    const newGuru = await Guru.create({ nama, nip, alamat });
    res.status(201).json(newGuru);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const put = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, nip, alamat } = req.body;
    const update = await Guru.update({ nama, nip, alamat }, { where: { id } });
    res.json({ message: "guru updated", update });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await Guru.destroy({ where: { id } });
    res.json({ message: "guru deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  get,
  post,
  put,
  delete: del,
};
