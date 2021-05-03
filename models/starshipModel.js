const mongoose = require("mongoose");

const StarshipSchema = new mongoose.Schema({
  id: String,
  title: String,
});

const Starship = mongoose.model("Starship", StarshipSchema);

module.exports = Starship;
