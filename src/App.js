import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import Registro from "./pages/registro/Registro";
import Main from "./pages/main/Main";
import Error404 from "./pages/error_404/Error";
import Ranking from "./pages/ranking/Ranking";
import AdminRaisingRotation from "./pages/admin/AdminRaisingRotation";
import AdminEncerrarRodada from "./pages/admin/AdminEncerrarRodada";
import AdminEditarUsuario from "./pages/admin/AdminEditarUsuario";
import JogarRodada from "./pages/jogar_rodada/JogarRodada";
import BestRates from "./pages/bestrates/BestRates";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/login" exact component={Login} />
          <Route path="/registro" exact component={Registro} />
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
            component={AdminEncerrarRodada}
          />
          <Route
            path="/admin/editar_usuario" // in english: edit_user
            exact
            component={AdminEditarUsuario}
          />
          <Route
            path="/rodada/jogar_rodada" // in english: play_round
            exact
            component={JogarRodada}
          />
          <Route path="/bestrates" exact component={BestRates} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}
