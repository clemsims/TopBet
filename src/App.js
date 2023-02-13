import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import Registro from "./pages/registro/Registro";
import Main from "./pages/main/Main";
import Error404 from "./pages/error_404/Error";
import Ranking from "./pages/ranking/Ranking";
import AdminCriarRodada from "./pages/admin/AdminCriarRodada";
import AdminEncerrarRodada from "./pages/admin/AdminEncerrarRodada";
import AdminEditarUsuario from "./pages/admin/AdminEditarUsuario";
import JogarRodada from "./pages/jogar_rodada/JogarRodada";

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
            path="/admin/criar_rodada"
            exact
            component={AdminCriarRodada}
          />
          <Route
            path="/admin/encerrar_rodada"
            exact
            component={AdminEncerrarRodada}
          />
          <Route
            path="/admin/editar_usuario"
            exact
            component={AdminEditarUsuario}
          />
          <Route path="/rodada/jogar_rodada" exact component={JogarRodada} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}
