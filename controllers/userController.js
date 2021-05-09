const User = require("../models/userModel");
const catchAsync = require("../util/catchAsync");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    result: users,
  });
});
