const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide your username"],
    lowercase: true,
    maxlength: "10",
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
    required: [true, "Please confrim your password"],
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
});

UserSchema.pre("save", function (next) {
  console.log(this);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
