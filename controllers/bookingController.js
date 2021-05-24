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
  // console.log("🐰 req:", req.body.payload);
  // console.log("🐌 user before session:", req.user);

  const {
    planet,
    starship,
    totalPrice,
    numOfPerson,
    departureDate,
  } = req.body.payload;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: req.user.email,
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: planet.title,
            images: [
              `${req.protocol}://${req.get("host")}/${planet.collectionThumb}`,
            ],
          },
          unit_amount: planet.price * 100,
        },
        quantity: numOfPerson,
      },
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: starship.title,
            images: [
              `${req.protocol}://${req.get("host")}/${
                starship.collectionThumb
              }`,
            ],
          },
          unit_amount: starship.price * 100,
        },
        quantity: numOfPerson,
      },
    ],
    success_url: `http://localhost:3000/checkout/?planet=${planet._id}&starship=${starship._id}&user=${req.user._id}&price=${totalPrice}&success=true`,
    cancel_url: `http://localhost:3000?canceled=true`,
    // success_url: `${req.protocol}://${req.get("host")}/checkout/?planet=${
    //   planet._id
    // }&starship=${starship._id}&user=${
    //   req.user._id
    // }&price=${totalPrice}&success=true`,
    // cancel_url: `${req.protocol}://${req.get("host")}?canceled=true`,
  });

  // console.log("🐬 create checkout: req, session", req, session);

  res.status(200).json({
    status: "success",
    id: session.id,
    session: session,
  });
});
