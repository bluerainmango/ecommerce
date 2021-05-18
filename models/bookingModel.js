const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  planet: {
    type: mongoose.Schema.ObjectId,
    ref: "Planet",
    required: [true, "Booking must belong to a planet."],
  },
  starship: {
    type: mongoose.Schema.ObjectId,
    ref: "Starship",
    required: [true, "Booking must belong to a starship."],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Booking must belong to a user."],
  },
  departureDate: {
    type: Date,
    required: true,
  },
  numOfPerson: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
    max: 10,
  },
  price: {
    type: Number,
  },
  createdAt: { type: Date, default: Date.now() },
  paid: {
    type: Boolean,
    default: true,
  },
});

const Book = mongoose.model("Book", bookingSchema);

module.export = Book;
