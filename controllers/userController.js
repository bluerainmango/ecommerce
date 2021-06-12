// const { validate } = require("../models/userModel");
const User = require("../models/userModel");
const catchAsync = require("../util/catchAsync");
const ErrorFactory = require("../util/ErrorFactory");

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

  // console.log("🐷 req.body: ", req.body);

  const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    runValidators: true,
  });

  console.log("🐷 updated User: ", updatedUser);

  res.status(200).json({
    status: "success",
    message: "Successfully updated profile.",
    data: { user: updatedUser },
  });
});

//* Add new given booking Id to user
exports.addOneToMyBooking = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!req.body.booking)
    return new ErrorFactory(400, "There is no booking to add.");

  user.booking.unshift(req.body.booking); // push(): mongoose's method
  await user.save({ validateBeforeSave: false });

  console.log("🐴 new booking added!", user);

  res.status(200).json({
    status: "success",
    message: "Successfully added new booking to your profile.",
    data: { user },
  });
});
