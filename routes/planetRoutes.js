const express = require("express");

const planetController = require("../controllers/planetController");

const router = express.Router();

router.route("/").get(planetController.getAllPlanets);

module.exports = router;
