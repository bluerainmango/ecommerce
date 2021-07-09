// const { validate } = require("../models/userModel");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const sharp = require("sharp");

const User = require("../models/userModel");
const catchAsync = require("../util/catchAsync");
const ErrorFactory = require("../util/ErrorFactory");

const multerStorage = multer.memoryStorage();

//! aws S3
const s3 = new aws.S3();
const s3Storage = multerS3({
  s3: s3,
  bucket: "ecommerce-spacey",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, Date.now().toString());
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      new ErrorFactory(400, "Not an image! Please upload only images."),
      false
    );
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadUserPhoto = upload.single("photo");

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(300, 300)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/assets/users/${req.file.filename}`);

  next();
});

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

  const dataToUpdate = { ...req.body };
  if (req.file) dataToUpdate.photo = req.file.filename;

  const updatedUser = await User.findByIdAndUpdate(req.user._id, dataToUpdate, {
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
