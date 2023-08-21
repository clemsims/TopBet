import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Customize from "./pages/customize/Customize";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Error404 from "./pages/error_404/Error";
import Ranking from "./pages/ranking/Ranking";
import AdminRaisingRotation from "./pages/admin/AdminRaisingRotation";
import AdminLockRound from "./pages/admin/AdminLockRound";
import AdminEditUser from "./pages/admin/AdminEditUser";
import PlayRound from "./pages/play_round/PlayRound";
import BestRates from "./pages/rates/BestRates";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/customize" exact component={Customize} />
          <Route path="/home" exact component={Home} />
          <Route path="/main" exact component={Main} />
          <Route path="/ranking" exact component={Ranking} />
          <Route
            path="/admin/create_round"
            exact
            component={AdminRaisingRotation}
          />
          <Route
            path="/admin/close_round"
            exact
            component={AdminLockRound}
          />
          <Route
            path="/admin/edit_user"
            exact
            component={AdminEditUser}
          />
          <Route
            path="/round/play_round"
            exact
            component={PlayRound}
          />
          <Route path="/bestrates" exact component={BestRates} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}
