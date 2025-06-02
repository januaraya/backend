const express = require("express");
const router = express.Router();
const g = require("../controllers/GuruController");

router.get("/", g.get);
router.get("/:id", g.get);
router.post("/", g.post);
router.put("/:id", g.put);
router.delete("/:id", g.delete); // Sesuai dengan export di controller

module.exports = router;
