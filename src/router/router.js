const express = require("express");
const router = express.Router();
const ctrlViews = require("../controllers/views");
const access = require("../middlewares/authorization");

router.get("/", ctrlViews.homePage);
router.get("/connexion", ctrlViews.connexionPage);
router.get("/admin", access.isAdmin, ctrlViews.adminPage);

module.exports = router;
