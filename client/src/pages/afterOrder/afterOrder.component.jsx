import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { createBookingStart } from "../../redux/booking/booking.action";

import "./afterOrder.styles.scss";

const AfterOder = () => {
  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    console.log("😝 search", search);

    if (!search) return;
    createBookingStart(search);
  }, [location]);

  return (
    <div className="afterOrder">
      <div className="afterOrder__container">
        <h1>Successfully completed your booking!</h1>
        <h2>
          Thank you for your reservation. You can check your booking anytime{" "}
          <Link to="/account#booking">here</Link>
        </h2>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBookingStart: (queryLink) => dispatch(createBookingStart(queryLink)),
});

export default connect(null, mapDispatchToProps)(AfterOder);
