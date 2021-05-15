import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.page";
import Planets from "./pages/collections/planetsCollection.page";
import Starships from "./pages/collections/starshipsCollection.page";
import Login from "./pages/login/login.page";
import NavBar from "./components/navbar/navbar.component";
// import AlertBar from "./components/alertBar/alertBar.component";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <AlertBar /> */}
      <NavBar />
      <Switch>
        <Route path="/planets" component={Planets} />
        <Route path="/starships" component={Starships} />
        <Route path="/users/signup" component={Login} />
        <Route path="/users/forgotpassword" component={Login} />
        <Route path="/users" component={Login} />
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/planets" component={}/> */}
      </Switch>
    </div>
  );
}

export default App;
