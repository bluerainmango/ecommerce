import React from "react";

import Planet from "../products/planets.page";

import { useRouteMatch, useParams, Switch, Route } from "react-router-dom";

const PlanetsCollection = () => {
  let match = useRouteMatch();
  console.log("🍉 match:", match, match.url);

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:planetID`}>
          <Planet />
        </Route>
        <Route path={match.path}>
          <h1>here is planet index page</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default PlanetsCollection;
