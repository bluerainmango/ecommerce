import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartPopup } from "../../redux/cart/cart.action";

import CartPopupItem from "../cartPopupItem/cartPopupItem.component";
import Button from "../button/button.component";

// import Planet from "../../assets/planet-1_800_trans.png";
// import Starship from "../../assets/starship1.png";
import "./cartPopup.styles.scss";

const CartPopup = ({ cart, toggleCartPopup }) => {
  return (
    <div className="cartPopup">
      <h3>PLANET</h3>

      {!cart.planet ? (
        <div className="item__block--empty">No planet added</div>
      ) : (
        <CartPopupItem>
          <Link to={`/planets/${cart.planet.slug}`}>
            <div className="item__block--start">
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/${cart.planet.collectionThumb}`}
                alt={`cart item ${cart.planet.title}`}
              />
            </div>
          </Link>
          <div className="item__block--middle">
            <h4>{cart.planet.title}</h4>
            <span> ${cart.planet.price}</span>
          </div>
        </CartPopupItem>
      )}

      <h3>STARSHIP</h3>
      {!cart.starship ? (
        <div className="item__block--empty">No starship added</div>
      ) : (
        <CartPopupItem>
          <Link to={`/starships/${cart.starship.slug}`}>
            <div className="item__block--start">
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/${cart.starship.collectionThumb}`}
                alt={`cart item ${cart.starship.title}`}
              />
            </div>
          </Link>
          <div className="item__block--middle">
            <h4>{cart.starship.title}</h4>
            <span>${cart.starship.price}</span>
          </div>
        </CartPopupItem>
      )}

      <h3>DATE & TRAVLERS</h3>
      {/* <Link to="/checkout"> */}
      <CartPopupItem>
        <div className="item__block--solo">
          <h4>Depareture</h4>
          <span>{cart.departureDate}</span>
        </div>
        <div className="item__block--solo">
          <h4>Travlers</h4>
          <span>{cart.numOfPerson}</span>
        </div>
      </CartPopupItem>
      {/* </Link> */}
      <Button
        content={[
          { text: "finalize jorney", type: "link", linkTo: "/checkout" },
        ]}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartPopup: () => dispatch(toggleCartPopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
