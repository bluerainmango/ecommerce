import React from "react";

import Collection from "../../components/collection/collection.component";

import { connect } from "react-redux";

import { useRouteMatch, Switch, Route } from "react-router-dom";

const StarshipsCollection = ({ starships }) => {
  const match = useRouteMatch();
  console.log("🍑 starship:", starships);
  return (
    <div>
      <Switch>
        <Route path={`${match.path}`}>
          <Collection props={starships} title={"Starship"} />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  starships: state.starships.starships,
});

export default connect(mapStateToProps)(StarshipsCollection);
