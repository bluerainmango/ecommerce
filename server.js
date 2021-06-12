const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION! 🚧  Shutting down...");
  console.log(err.name, err.message);

  process.exit(1);
});

const app = require("./app");

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
    console.log("📡 DB connection suceeded", new Date(), Date.now());
  });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(
    `🔌 App running on port ${port}. Node_ENV: ${process.env.NODE_ENV}}`
  );
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION! 🚧  Shutting down...");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
