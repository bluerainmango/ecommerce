const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide your username"],
    unique: true,
    lowercase: true,
    maxlength: "15",
    trim: true,
    validate: [
      validator.isAlphanumeric,
      "Username can contain only alphabets and numbers",
    ],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minlength: 3,
    maxlength: 15,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    minlength: 3,
    maxlength: 15,
    validate: {
      validator: function (input) {
        return input === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  booking: [{ type: mongoose.Schema.ObjectId, ref: "Booking" }],
});

//! Hash password
UserSchema.pre("save", async function (next) {
  // if the request is not for changing pwd, just return.
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

//! Instance method : check if entered pwd is correct.
// used for login, changing pwd, resetting pwd...
UserSchema.methods.isCorrectPassword = async (enteredPwd, userPwd) =>
  await bcrypt.compare(enteredPwd, userPwd);

//! Instance method : create reset password token
UserSchema.methods.createPasswordResetToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  const encryptedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //   console.log("🤖 reset pwd token:", encryptedResetToken);

  this.passwordResetToken = encryptedResetToken;
  this.passwordResetExpires = Date.now() + 15 * 60 * 1000; // Reset expires in 15 min

  await this.save({ validateBeforeSave: false }); // Save to DB

  return resetToken;
};

// UserSchema.methods.resetPassword = async function () {};

const User = mongoose.model("User", UserSchema);

module.exports = User;
