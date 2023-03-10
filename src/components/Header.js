/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import api from "../services/api";
import $ from "jquery";

class Header extends Component {
  state = {
    ranking: "",
    home: "",
    admin: false,
    changePassword: "",
    changeNewPassword: ""
  };

  async componentWillMount() {
    // let response = await api.get(`users/username/${sessionStorage.getItem("username")}`);
    // sessionStorage.setItem("admin", response.data.admin);
    // if (response.data.admin) {
    //     this.setState({ admin: true });
    //     $("#admin").removeClass("invisible");
    // } // TODO: REMOVE THIS AND CREATE OUR OWN ADMIN PANEL

    // TMP : EVERYONE IS ADMIN
    this.setState({ admin: true });
    $("#admin").removeClass("invisible");
  }

  handleGoPage(e) {
    this.props.history.push(e.target.name);
  }

  handleLogout = (e) => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    $(".modal-backdrop").remove();
    // TODO: send some request to the server to invalidate the token!!!!!
    this.props.history.push("/");
  };

  handleDeleteAccount = async (e) => {
    e.preventDefault();
    const { changePassword } = this.state;
    const response = await api.get(`users/username/${sessionStorage.getItem("username")}`);

    $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

    if (changePassword === response.data.password) {
      const responseDelete = await api.delete(`users/delete/${sessionStorage.getItem("username")}`);
      $("#alert-excluir-conta").addClass("alert alert-success").text("Conta excluída com sucesso! Redirecionando ..");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(() => {
        $("#alert-excluir-conta").removeClass("alert alert-success").text("");
        $("#inputPasswordChange").css("border-color", "");
        this.handleLogout();
      }, 3000);
    } else {
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      $("#inputPasswordChange").css("border-color", "red");
      $("#alert-excluir-conta").addClass("alert alert-danger").text("As senhas não são iguais!");
      $("#inputPasswordChange").text("");
      setTimeout(function () {
        $("#alert-excluir-conta").removeClass("alert alert-danger").text("");
        $("#inputPasswordChange").css("border-color", "");
      }, 3000);
    }

  }

  handleChangePassword = async (e) => {
    e.preventDefault();
    const { changePassword, changeNewPassword } = this.state;
    const response = await api.get(`users/username/${sessionStorage.getItem("username")}`);

    $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

    if (changePassword === response.data.password && changeNewPassword.length >= 6 && changeNewPassword !== response.data.password) {
      const responseUpdate = await api.post(`alterar/senha/${sessionStorage.getItem("username")}/${changeNewPassword}`);
      $("#alert-alterar-senha").addClass("alert alert-success").text("Senha alterada com sucesso! Redirecionando ..");
      setTimeout(() => {
        $("#alert-alterar-senha").removeClass("alert alert-success").text("");
        this.handleLogout();
      }, 3000);
    } else if (changeNewPassword.length < 6) {
      $("#inputNewPasswordChangeAlterar").css("border-color", "red");
      $("#alert-alterar-senha").addClass("alert alert-danger").text("A senha não pode possuir menos que 6 caracteres!");
      $("#inputPasswordChange").text("");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function () {
        $("#alert-alterar-senha").removeClass("alert alert-danger").text("");
        $("#inputPasswordChangeAlterar").css("border-color", "");
      }, 3000);
    } else if (changePassword !== response.data.password) {
      $("#inputPasswordChangeAlterar").css("border-color", "red");
      $("#alert-alterar-senha").addClass("alert alert-danger").text("A senha informada não é igual a anterior!");
      $("#inputPasswordChange").text("");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function () {
        $("#alert-alterar-senha").removeClass("alert alert-danger").text("");
        $("#inputPasswordChangeAlterar").css("border-color", "");
      }, 3000);
    } else if (response.data.password === changeNewPassword) {
      $("#inputPasswordChangeAlterar").css("border-color", "red");
      $("#alert-alterar-senha").addClass("alert alert-danger").text("A nova senha não pode ser a mesma que a senha atual!");
      $("#inputPasswordChange").text("");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function () {
        $("#alert-alterar-senha").removeClass("alert alert-danger").text("");
        $("#inputPasswordChangeAlterar").css("border-color", "");
      }, 3000);
    }
  }

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value)

    this.setState({
      [name]: value
    });
  }

  handleClearState = (e) => {
    this.setState({
      changeNewPassword: ""
    });

    this.setState({
      changePassword: ""
    });
  }

  handleResetRanking = async (e) => {
    $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");
    try {
      let ranking = await api.get("ranking");
      if (ranking.data.length === 0) {
        $("#alert-reset-ranking").addClass("alert alert-danger").text("Ainda não há usuários rankeados, não é possível resetar o ranking!");
        $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
        setTimeout(() => {
          $("#alert-reset-ranking").removeClass("alert alert-danger").text("");
        }, 3000);
        return;
      }
      let response = await api.delete(`ranking/reset`);
      $("#alert-reset-ranking").addClass("alert alert-success").text("O ranking foi resetado com sucesso!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(() => {
        $("#alert-reset-ranking").removeClass("alert alert-success").text("");
      }, 3000);
    } catch (error) {
      console.error(error);
      $("#alert-reset-ranking").addClass("alert alert-danger").text("Ocorreu um erro na sua requisição!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(() => {
        $("#alert-reset-ranking").removeClass("alert alert-danger").text("");
      }, 3000);
    }
  }

  render() {
    return (
      <header className="header-area">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Trivia Rates
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ranking">
                    Ranking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/best_Rates">
                    Here are the top Rates
                  </Link>
                </li>
                {this.state.admin ? (
                  <li className="nav-item" id="admin">
                    <Link className="nav-link" to="/admin/create_round">
                      Admin
                    </Link>
                  </li>
                ) : null}
                {sessionStorage.getItem("username") !== null ? (
                  <>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm mt-2"
                        data-toggle="modal"
                        data-target="#modal-excluir-conta"
                      >
                        Exclude account
                      </button>
                    </li>
                    <li className="nav-item ml-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm mt-2"
                        data-toggle="modal"
                        data-target="#modal-alterar-senha"
                      >
                        Change Password
                      </button>
                    </li>
                    <li className="nav-item ml-2">
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm mt-2"
                        onClick={this.handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item ml-2">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item ml-2">
                      <Link className="nav-link" to="/registration">
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);