const path = require("path");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const planetRouter = require("./routes/planetRoutes");
const starshipRouter = require("./routes/starshipRoutes");
const userRouter = require("./routes/userRoutes");

const ErrorFactory = require("./util/ErrorFactory");
const errorController = require("./controllers/errorController");

const app = express();

const whitelist = ["http://localhost:3000", "http://localhost:4000"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;

  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true, credentials: true };
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two params: err and options
};

app.enable("trust proxy");
// Apply CORS to all responses
app.use(cors(corsOptionsDelegate));
// CORS pre-flight
app.options("*", cors(corsOptionsDelegate));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.join(__dirname, "public", "assets")));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(cookieParser());

app.use("/api/v1/planets", planetRouter);
app.use("/api/v1/starships", starshipRouter);
app.use("/api/v1/users", userRouter);

//! ERROR Handlers
app.all("*", (req, res, next) => {
  next(
    new ErrorFactory(404, `💥 Cannot find ${req.originalUrl} on this server!`)
  );
});
app.use(errorController);

module.exports = app;
