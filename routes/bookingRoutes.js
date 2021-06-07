const express = require("express");

const router = express.Router();

const bookingController = require("../controllers/bookingController");
const authController = require("../controllers/authController");

router
  .route("/")
  .get(bookingController.getAllBookings)
  .post(authController.protect, bookingController.createBooking);

router.route("/me").get(authController.protect, bookingController.getMyBooking);
router.route("/:bookingId").get(bookingController.getOneBooking);

router.post(
  "/create-checkout-session",
  authController.protect,
  bookingController.createCheckout
);

module.exports = router;
