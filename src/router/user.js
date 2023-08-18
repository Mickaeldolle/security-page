const express = require("express");
const router = express.Router();
const ctrlUser = require("../controllers/user");

router.post("/login", ctrlUser.login);

module.exports = router;
