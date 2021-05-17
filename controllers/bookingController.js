const catchAsync = require("../util/catchAsync");

const Booking = require("../models/bookingModel");
const ErrorFactory = require("../util/ErrorFactory");

exports.getAllBookings = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find();

  if (!bookings) next(new ErrorFactory(404, "There is no existing bookings."));

  res.status(200).json({
    status: "success",
    result: bookings.length,
    data: bookings,
  });
});

exports.createBooking = catchAsync(async (req, res, next) => {
  const {
    planet,
    starship,
    user,
    departureDate,
    numOfPerson,
    price,
  } = req.body;

  const newBooking = await Booking.createOne({
    planet,
    starship,
    user,
    departureDate,
    numOfPerson,
    price,
  });

  res.status(200).json({
    status: "success",
    data: newBooking,
  });
});
