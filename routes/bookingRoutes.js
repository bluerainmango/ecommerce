const express = require("express");

const router = express.Router();

const bookingController = require("../controllers/bookingController");
const authController = require("../controllers/authController");

router
  .route("/")
  .get(authController.protect, bookingController.getAllBookings)
  .post(authController.protect, bookingController.createBooking);

router.post(
  "/create-checkout-session",
  authController.protect,
  bookingController.createCheckout
);

module.exports = router;
