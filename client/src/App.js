import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import Homepage from "./pages/homepage/homepage.page";
import Planets from "./pages/collections/planetsCollection.page";
import Starships from "./pages/collections/starshipsCollection.page";
import Login from "./pages/login/login.page";
import NavBar from "./components/navbar/navbar.component";
import Checkout from "./pages/checkout/checkout.page";
import ErrorBoundary from "./components/errorBoundary/errorBoundary.component";

// import AlertBar from "./components/alertBar/alertBar.component";

import "./App.css";

function App({ currentUser }) {
  return (
    <div className="app">
      {/* <AlertBar /> */}
      <NavBar />
      <Switch>
        <ErrorBoundary>
          <Route path="/planets" component={Planets} />
          <Route path="/starships" component={Starships} />
          {/* <Route path="/starships">
            <Starships />
          </Route> */}
          <Route
            path="/users/signup"
            render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
          />
          <Route
            path="/users/forgotpassword"
            render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
          />
          <Route
            exact
            path="/users"
            render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
          />
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/" component={Homepage} />
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps)(App);
