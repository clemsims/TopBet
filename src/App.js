import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import registration from "./pages/registration/registration";
import Main from "./pages/main/Main";
import Error404 from "./pages/error_404/Error";
import Ranking from "./pages/ranking/Ranking";
import AdminRaisingRotation from "./pages/admin/AdminRaisingRotation";
import AdminLockRound from "./pages/admin/AdminLockRound";
import AdminEditUser from "./pages/admin/AdminEditUser";
import PlayRound from "./pages/play_round/PlayRound";
import BestRates from "./pages/rates/BestRates";
import AccountInfosFigma from "./pages/account_infos/AccountInfosFigma";
import AccountInfos from "./pages/account_infos/AccountInfos";
import AccountInfosFigmaV0 from "./pages/account_infos/AccountInfosFigmaV0";
import BetPlaced from "./pages/bet_placed/BetPlaced";
import PlaceBet from "./pages/place_bet/PlaceBet";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={registration} />
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
          <Route path="/admin/account_infos" exact component={AccountInfos} />
          <Route path="/admin/account_infos_figma" exact component={AccountInfosFigma} />
          <Route path="/admin/account_infos_figma_V0" exact component={AccountInfosFigmaV0} />
          <Route path="/admin/bet_placed" exact component={BetPlaced} />
          <Route path="/admin/place_bet" exact component={PlaceBet} />
          <Route path="/bestrates" exact component={BestRates} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}
