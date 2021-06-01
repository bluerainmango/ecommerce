import React from "react";

import { Link, useRouteMatch, useParams, useLocation } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "../../assets/icons/person-sharp.svg";
import { ReactComponent as BookingIcon } from "../../assets/icons/bookmark-sharp.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/settings-sharp.svg";

import Profile from "../../components/profile/profile.component";
import Booking from "../../components/booking/booking.component";
import Setting from "../../components/setting/setting.component";

import "./account.styles.scss";

const Account = () => {
  const route = useRouteMatch();
  const params = useParams();
  const { hash } = useLocation();

  return (
    <div className="account">
      <div className="account__container">
        <div className="account__menu">
          <ul>
            <Link to={`${route.path}#profile`}>
              <li>
                <ProfileIcon />
                Profile
              </li>
            </Link>
            {/* {console.log(route, params)} */}

            <Link to={`${route.path}#booking`}>
              <li>
                <BookingIcon />
                Booking
              </li>
            </Link>

            <Link to={`${route.path}#setting`}>
              <li>
                <SettingIcon />
                Setting
              </li>
            </Link>
          </ul>
        </div>
        <div className="account__content">
          {console.log("hash", hash)}
          {hash === "#profile" ? (
            <Profile />
          ) : hash === "#booking" ? (
            <Booking />
          ) : (
            <Setting />
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
