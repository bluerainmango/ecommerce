const fs = require("fs");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config({ path: "./config.env" });

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
  fs.readFileSync(`${__dirname}/planets.data.json`, "utf-8")
);

const importData = () => {};
const deleteData = () => {};

if (process.argv[2] === "--import") {
  importData();
}
if (process.argv[2] === "--delete") {
  deleteData();
}
