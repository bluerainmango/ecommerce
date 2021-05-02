const express = require("express");

const starshipController = require("../controllers/starshipController");

const router = express.Router();

router.route("/").get(starshipController.getAllStarships);

module.exports = router;
