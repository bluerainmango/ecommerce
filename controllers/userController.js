const { validate } = require("../models/userModel");
const User = require("../models/userModel");
const catchAsync = require("../util/catchAsync");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    result: users,
  });
});

exports.getMe = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    status: "success",
    data: user,
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // const { username, email } = req.body;

  console.log("🐷 req.body: ", req.body);

  const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    runValidators: true,
  });

  console.log("🐷 updated User: ", updatedUser);

  res.status(200).json({
    status: "success",
    data: { user: updatedUser, message: "Successfully updated profile." },
  });
});
