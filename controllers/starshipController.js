const Starship = require("../models/starshipModel");
const catchAsync = require("../util/catchAsync");

exports.getAllStarships = catchAsync(async (req, res, next) => {
  const starships = await Starship.find();

  res.status(200).json({
    status: "success",
    result: starships.length,
    data: starships,
  });
});
