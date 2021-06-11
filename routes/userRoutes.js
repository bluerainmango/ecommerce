const express = require("express");

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.get("/logout", authController.logout);
router.post("/forgotpassword", authController.forgotPassword);
router.get("/resetpassword/:token", authController.resetPassword);
router.patch(
  "/updatepassword",
  authController.protect,
  authController.updatePassword
);

router
  .route("/me")
  .get(authController.protect, userController.getMe)
  .patch(authController.protect, userController.updateMe);

router
  .route("/mybooking")
  .patch(authController.protect, userController.addOneToMyBooking);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(authController.protect, authController.checkPassword)
  .delete(authController.protect, authController.deleteOneUser);

module.exports = router;
