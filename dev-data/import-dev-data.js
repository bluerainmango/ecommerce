const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Planet = require("../models/planetModel");
const Starship = require("../models/starshipModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("📡 DB connection suceeded");
  });

const planets = JSON.parse(
  fs.readFileSync(`${__dirname}/data/planets.data.json`, "utf-8")
);
const starships = JSON.parse(
  fs.readFileSync(`${__dirname}/data/starships.data.json`, "utf-8")
);

const importData = async () => {
  try {
    await Planet.create(planets);
    await Starship.create(starships);
  } catch (err) {
    console.error(err);
  }

  process.exit();
};

const deleteData = async () => {
  try {
    await Planet.deleteMany();
    await Starship.deleteMany();
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
}
if (process.argv[2] === "--delete") {
  deleteData();
}
