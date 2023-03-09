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
import PlayRolled from "./pages/play_rolled/PlayRolled";
import BestRates from "./pages/rates/BestRates";

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
            path="/admin/criar_rodada" // in english: create_round
            exact
            component={AdminRaisingRotation}
          />
          <Route
            path="/admin/encerrar_rodada" // in english: close_round
            exact
            component={AdminLockRound}
          />
          <Route
            path="/admin/editar_usuario" // in english: edit_user
            exact
            component={AdminEditUser}
          />
          <Route
            path="/rodada/play_rolled" // in english: play_round
            exact
            component={PlayRolled}
          />
          <Route path="/bestrates" exact component={BestRates} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}
