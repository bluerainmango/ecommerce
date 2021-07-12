// const { validate } = require("../models/userModel");
// const fs = require("fs");
const multer = require("multer");
const sharp = require("sharp");

//! AWS credentials
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const User = require("../models/userModel");
const catchAsync = require("../util/catchAsync");
const ErrorFactory = require("../util/ErrorFactory");

// Make image to buffer to resize by Sharp
const multerStorage = multer.memoryStorage();

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

  const filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  req.file.filename = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${filename}`;

  // req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  // req.file.filename = `user-${req.user.id}.jpeg`;

  const resizedImgBuffer = await sharp(req.file.buffer)
    .resize(300, 300)
    .toFormat("jpeg")
    .jpeg({ quality: 70 })
    .toBuffer();

  await sharp(req.file.buffer)
    .resize(300, 300)
    .toFormat("jpeg")
    .jpeg({ quality: 70 })
    .toFile(`public/assets/users/${filename}`);

  // const resizedImg = rawImg.toBuffer();

  // rawImg.toFile(`public/assets/users/${filename}`);

  const params = {
    Bucket: "ecommerce-spacey", // s3 bucket name
    Key: filename, // key: file name
    //Body: fs.createReadStream(`public/assets/users/${req.file.filename}`),
    Body: resizedImgBuffer, // image to upload
    ACL: "public-read", // to allow to be publicly readable
    // ContentType: "image/jpeg", // url starts download as file without it
  };

  //! Save photo to AWS S3
  const s3 = new AWS.S3();

  s3.upload(params, (err, data) => {
    if (err) console.log("😦 img upload err: ", err);
    else console.log("🥵 img upload success: ", data);
  });

  // s3.getObject(params, (err, data) => {
  //   if (err) console.log(err, err.stack);
  //   else console.log(data);
  // });

  next();
});

// exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
//   if (!req.file) return next();

//   req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

//   await sharp(req.file.buffer)
//     .resize(300, 300)
//     .toFormat("jpeg")
//     .jpeg({ quality: 90 })
//     .toFile(`public/assets/users/${req.file.filename}`);

//   next();
// });

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
