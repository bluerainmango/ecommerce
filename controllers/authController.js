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

  res.status(200).json({
    status: "success",
    data: newUser,
  });
});

exports.signin = catchAsync(async (req, res, next) => {
  const { password, username } = req.body;

  //   if (!password || !username)

  const user = await User.find({ username });

  const isCorrect = await bcrypt.compare(password, user.password);

  // check if pwd is correct
  res.status(200).json({
    status: "success",
  });
});
