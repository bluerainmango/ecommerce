import axios from "axios";
import { takeLatest, call, all, put } from "redux-saga/effects";

import CartTypes from "./cart.types";
import { checkoutSessionSuccess, checkoutSessionFail } from "./cart.action";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
function* checkoutSessionAsync(checkoutInfo) {
  const stripe = yield stripePromise;

  try {
    const res = yield axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/bookings/create-checkout-session`,
      checkoutInfo,
      { withCredentials: true }
    );

    const session = res.data;
    console.log("🦊 res", res);

    yield put(checkoutSessionSuccess(session));

    //* Redirect customer to Stripe's checkout page
    const result = yield stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log("💥 result.error from Stripe: ", result.error.message);
      yield put(checkoutSessionFail(result.error));
    }
  } catch (err) {
    yield put(checkoutSessionFail(err));
  }
}

function* onCheckoutSessionStart() {
  yield takeLatest(CartTypes.CHECKOUT_SESSION_START, checkoutSessionAsync);
}

export default function* cartSaga() {
  yield all([call(onCheckoutSessionStart)]);
}
