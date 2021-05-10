const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const catchAsync = require("../util/catchAsync");
const ErrorFactory = require("../util/ErrorFactory");

//! used for sign in, sign up
const createAndSendToken = (user, req, res, statusCode) => {
  // 1) create token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  };

  user.password = undefined;

  // 2) send token via cookie
  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const { username, email, role, password, passwordConfirm } = req.body;

  const newUser = await User.create({
    username,
    email,
    role,
    password,
    passwordConfirm,
  });

  createAndSendToken(newUser, req, res, 201);
});

exports.signin = catchAsync(async (req, res, next) => {
  const { password, username } = req.body;

  if (!password || !username)
    next(new ErrorFactory(400, "Please provide password and username"));

  const user = await User.findOne({ username }).select("+password");

  if (!user || !(await user.isCorrectPassword(password, user.password)))
    next(new ErrorFactory(401, "Username or password is incorrect!"));

  createAndSendToken(user, req, res, 200);
});
