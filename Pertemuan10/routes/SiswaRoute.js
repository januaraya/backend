const express = require("express");
const router = express.Router();
const s = require("../controllers/SiswaController");

router.get("/", s.get);
router.get("/:id", s.get);
router.post("/", s.post);
router.put("/:id", s.put);
router.delete("/:id", s.delete); // Sesuai dengan export di controller

module.exports = router;
