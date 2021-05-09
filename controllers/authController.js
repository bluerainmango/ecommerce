const User = require("../models/userModel");
const catchAsync = require("../util/catchAsync");

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
  newUser.passwordConfirm = undefined;

  res.status(200).json({
    status: "success",
    data: newUser,
  });
});
