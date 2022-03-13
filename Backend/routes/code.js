const express = require("express");
const { uploadCode } = require("../controllers/code");
const router = express.Router();

router.post("/uploadCode",uploadCode);

module.exports = router;