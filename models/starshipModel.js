const mongoose = require("mongoose");

const StarshipSchema = new mongoose.Schema({
  name: String,
});

const Starship = mongoose.model("Starship", StarshipSchema);

module.exports = Starship;
