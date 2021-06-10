const express = require("express");

const router = express.Router();

const bookingController = require("../controllers/bookingController");
const authController = require("../controllers/authController");

router
  .route("/")
  .get(bookingController.getAllBookings)
  .post(authController.protect, bookingController.createBooking);

//! Protect the following routers(logged in users only accessible)
router.use(authController.protect);

router.route("/me").get(bookingController.getMyBooking);

router.post("/create-checkout-session", bookingController.createCheckout);

router
  .route("/:bookingId")
  .get(bookingController.getOneBooking)
  .delete(bookingController.deleteOneBooking);

module.exports = router;
