const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

exports.createCheckout = catchAsync(async (req, res, next) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: req.planet.title,
            images: [
              `${req.protocol}://${req.get("host")}/${
                req.planet.collectionThumb
              }`,
            ],
          },
          unit_amount: req.planet.price * 100,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: req.starship.title,
            images: [
              `${req.protocol}://${req.get("host")}/${
                req.starship.collectionThumb
              }`,
            ],
          },
          unit_amount: req.starship.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${req.protocol}://${req.get("host")}/checkout/?planet=${
      req.planet._id
    }&starship=${req.starship._id}&user=${req.user.id}&price=${req.totalPrice}`,
    cancel_url: `${req.protocol}://${req.get("host")}`,
  });

  console.log("🐬 create checkout: req, session", req, session);

  res.status(200).json({
    status: "success",
    id: session.id,
    session: session,
  });
});
