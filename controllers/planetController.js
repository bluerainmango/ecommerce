const Planet = require("../models/planetModel");
const catchAsync = require("../util/catchAsync");

exports.getAllPlanets = catchAsync(async (req, res, next) => {
  const planets = await Planet.find();

  res.status(200).json({
    status: "success",
    result: planets.length,
    data: planets,
  });
});
