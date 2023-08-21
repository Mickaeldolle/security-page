const express = require("express");
const router = express.Router();
const ctrlViews = require("../controllers/views");
const ctrlUser = require("../controllers/user");
const access = require("../middlewares/authorization");

router.get("/", ctrlViews.homePage);
router.get("/connexion", ctrlViews.connexionPage);
router.get("/admin", access.isAdmin, ctrlViews.adminPage);
router.get("/myaccount", access.isConnected, ctrlViews.myAccountPage);
router.post("/login", ctrlUser.login);

module.exports = router;
