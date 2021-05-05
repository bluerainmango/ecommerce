import React from "react";

import Planet from "../products/planet.page";
import Collection from "../../components/collection/collection.component";

import { connect } from "react-redux";

import { useRouteMatch, Switch, Route } from "react-router-dom";

const PlanetsCollection = ({ planets }) => {
  let match = useRouteMatch();
  // console.log("🍉 match:", match, match.url);

  return (
    <div>
      <Switch>
        {/* nested pages: /planets/id 페이지 */}
        <Route path={`${match.path}/:planetSlug`}>
          <Planet />
        </Route>
        {/* index page: /planets */}
        <Route exact path={match.path}>
          <Collection props={planets} title={"Planet"} />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  planets: state.planets.planets,
});

export default connect(mapStateToProps)(PlanetsCollection);
