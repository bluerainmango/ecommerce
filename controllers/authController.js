const User = require("../models/userModel");
const catchAsync = require("../util/catchAsync");
const ErrorFactory = require("../util/ErrorFactory");
const bcrypt = require("bcryptjs");

exports.signup = catchAsync(async (req, res, next) => {
  //   console.log(req.body);
  const { username, email, role, password, passwordConfirm } = req.body;

  const newUser = await User.create({
    username,
    email,
    role,
    password,
    passwordConfirm,
  });

  newUser.password = undefined;

  res.status(200).json({
    status: "success",
    data: newUser,
  });
});

exports.signin = catchAsync(async (req, res, next) => {
  const { password, username } = req.body;

  if (!password || !username)
    next(new ErrorFactory(400, "Please provide password and username"));

  const user = await User.findOne({ username }).select("+password");

  if (!user || (await bcrypt.compare(password, user.password)))
    next(new ErrorFactory(401, "Username or password is incorrect!"));

  res.status(200).json({
    status: "success",
  });
});
