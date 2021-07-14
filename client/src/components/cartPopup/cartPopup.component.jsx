import React, { useEffect, createRef } from "react";

import { connect } from "react-redux";
import {
  toggleCartPopup,
  refreshCartPopupPlanet,
  refreshCartPopupStarship,
} from "../../redux/cart/cart.action";

import CartPopupItem from "../cartPopupItem/cartPopupItem.component";
import Button from "../button/button.component";
import CartPopupItemContent from "../CartPopupItemContent/CartPopupItemContent.component";

import "./cartPopup.styles.scss";

const CartPopup = ({
  cart,
  // toggleCartPopup,
  refreshCartPopupPlanet,
  refreshCartPopupStarship,
}) => {
  const planetRef = createRef();
  const starshipRef = createRef();

  useEffect(() => {
    if (!cart.refreshCartPopupPlanet || !planetRef.current) return;
    // console.log("🐶 planet ref", planetRef.current);

    planetRef.current?.classList.add("anim--added");

    setTimeout(() => {
      planetRef.current?.classList.remove("anim--added");
      refreshCartPopupPlanet();
    }, 600);
  }, [cart.refreshCartPopupPlanet, planetRef, refreshCartPopupPlanet]);

  useEffect(() => {
    if (!cart.refreshCartPopupStarship || !starshipRef.current) return;
    // console.log("🐹 starship ref", starshipRef.current);

    starshipRef.current?.classList.add("anim--added");

    setTimeout(() => {
      starshipRef.current?.classList.remove("anim--added");
      refreshCartPopupStarship();
    }, 600);
  }, [cart.refreshCartPopupStarship, starshipRef, refreshCartPopupStarship]);

  return (
    <div className="cartPopup">
      <h3>PLANET</h3>

      {!cart.planet ? (
        <div className="item__block--empty">No planet added</div>
      ) : (
        <CartPopupItem ref={planetRef}>
          <CartPopupItemContent props={cart.planet} />
        </CartPopupItem>
      )}

      <h3>STARSHIP</h3>
      {!cart.starship ? (
        <div className="item__block--empty">No starship added</div>
      ) : (
        <CartPopupItem ref={starshipRef}>
          <CartPopupItemContent props={cart.starship} />
        </CartPopupItem>
      )}

      <h3>DATE & TRAVLERS</h3>
      <CartPopupItem>
        <div className="item__block--solo">
          <h4>Depareture</h4>
          <span className="cartPopup__depareture">
            {cart.departureDate || "-"}
          </span>
        </div>
        <div className="item__block--solo">
          <h4>Travlers</h4>
          <span>{cart.numOfPerson}</span>
        </div>
      </CartPopupItem>
      <Button
        content={[
          { type: "link", text: "finalize journey", linkTo: "/checkout" },
        ]}
        closeCartPopup
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartPopup: () => dispatch(toggleCartPopup()),
  refreshCartPopupPlanet: () => dispatch(refreshCartPopupPlanet()),
  refreshCartPopupStarship: () => dispatch(refreshCartPopupStarship()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
