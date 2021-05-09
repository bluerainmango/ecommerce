const path = require("path");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const planetRouter = require("./routes/planetRoutes");
const starshipRouter = require("./routes/starshipRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.join(__dirname, "public", "assets")));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/v1/planets", planetRouter);
app.use("/api/v1/starships", starshipRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
