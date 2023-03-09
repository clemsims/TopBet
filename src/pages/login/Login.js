import React, { Component } from "react";
import api from "../../services/api";
import $ from "jquery";
import "./styles.css";

export default class Login extends Component {

  // Redirects to the right pages for the header buttons

  handleLogin = () => {
    if (sessionStorage.getItem("username")) this.props.history.push("/main");
    this.props.history.push("/login");
  };

  handleBestRates = () => {
    this.props.history.push("/bestrates");
  };

  handlehome = () => {
    this.props.history.push("/");
  };

  // Defines the initial state for this component

  state = {
    user: "",
    password: "",
    changeEmail: ""
  };

  // Lifecycle method that gets called before the component is mounted ("mounted" refers to the point at which a component is initialized and added to the UI.)
  componentWillMount() {
    if (sessionStorage.getItem("username")) this.props.history.push("/main");
  }

  handleregistration = () => {
    this.props.history.push("/registration");
  };

  handleLogin = async e => {
    e.preventDefault();
    const { user, password } = this.state;

    let test = await api.get(`/db`);
    console.log(test);

    if (!user) {
      $("#input-login").css("border-color", "blue");
      setTimeout(function () {
        $("#input-login").css("border-color", "");
      }, 3000);
    }

    if (!password) {
      $("#input-password").css("border-color", "blue");
      setTimeout(function () {
        $("#input-password").css("border-color", "");
      }, 3000);
    }

    if (!user || !password) return;
    $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

    try {
      let retriveUsername = await api.get(`/users/username/${user}`);

      if (!retriveUsername.data) {
        // $("#alert-login").addClass("alert alert-danger").text("The username entered is invalid!");
        $("#icon-loading").removeClass(
          "fas fa-sync-alt loading-refresh-animate"
        );
        setTimeout(function () {
          $("#alert-login").removeClass("alert alert-danger");
        }, 5000);
      } else if (password !== retriveUsername.data.password) {
        // $("#alert-login").addClass("alert alert-danger").text("The password entered is incorrect!");
        $("#icon-loading").removeClass(
          "fas fa-sync-alt loading-refresh-animate"
        );
        setTimeout(function () {
          $("#alert-login").removeClass("alert alert-danger");
        }, 5000);
      } else {
        sessionStorage.setItem("name", retriveUsername.data.name);
        sessionStorage.setItem("email", retriveUsername.data.email);
        sessionStorage.setItem("username", retriveUsername.data.username);
        sessionStorage.setItem("admin", retriveUsername.data.admin);
        sessionStorage.setItem("loading", true);
        this.props.history.push("/main");
      }
    } catch (error) {
      $("#alert-login")
        .addClass("alert alert-danger")
        .text("An error occurred while requesting your request!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
    }
  };

  handleOnChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);

    this.setState({
      [name]: value
    });
  };

  handleClearEmail = e => {
    this.setState({ changeEmail: "" });
  };

  handleRecuperarSenha = async e => {
    e.preventDefault();

    let response = await api.get(`/users/email/${this.state.changeEmail}`);

    $("#icon-loading-confirmar").addClass(
      "fas fa-sync-alt loading-refresh-animate"
    );

    if (!response.data.email) {
      $("#inputEmailChange").css("border-color", "blue");
      $("#alert-recuperar-senha")
        .addClass("alert alert-danger")
        .text("O e-mail informado não existe!");
      $("#icon-loading-confirmar").removeClass(
        "fas fa-sync-alt loading-refresh-animate"
      );
      setTimeout(function () {
        $("#alert-recuperar-senha")
          .removeClass("alert alert-danger")
          .text("");
        $("#inputEmailChange").css("border-color", "");
      }, 3000);
    } else {
      let retrivePassword = await api.post(
        `/recuperar/senha/${this.state.changeEmail}`
      );

      let sendEmail = await api.get(
        `/enviar/email/${this.state.changeEmail}/${retrivePassword.data.password
        }`
      );
      $("#alert-recuperar-senha")
        .addClass("alert alert-success")
        .text("The password has been successfully reset, check your email!");
      $("#icon-loading-confirmar").removeClass(
        "fas fa-sync-alt loading-refresh-animate"
      );
      this.setState({ changeEmail: "" });
      $("#inputEmailChange").val(this.state.changeEmail);
      setTimeout(() => {
        $("#alert-recuperar-senha")
          .removeClass("alert alert-sucess")
          .text("");
        $("#inputEmailChange").text("");
      }, 3000);
    }
  };

  render() {
    return (
      <div className="div-panel">
        <div className="headertext">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand h4 mb-0" href="#">
              <button className="logo" type="button" onClick={this.handlehome}
              >TopBet





              </button>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-side"
              aria-controls="navbar-side"
              aria-expanded="false"
              aria-label="Open navigation"
            />

            <div className="collapse navbar-collapse" id="navbar-side">
              <ul className="navbar-nav ml-auto">
                <li className="button-wrapper">
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-item-betnow"
                    onClick={this.handleLogin}
                  >
                    Bet now (Login)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-item-bestrates"
                    onClick={this.handleBestRates}
                  >
                    Best Rates
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        // sections of the page:
        <div className="wrapper fadeInDown">
          <div class="" role="alert" id="alert-login" data-dismiss="alert" />
          <div id="formContent">
            <div id="formHeader">
              <h2 className="h2-login active">Login</h2>

              <h2
                className="h2-login inactive underlineHover"
                onClick={this.handleregistration}
              >
                Register
              </h2>
            </div>

            <div className="form-padding">
              <form>
                <input
                  type="text"
                  id="input-login"
                  className="fadeIn second"
                  placeholder="Login"
                  name="user"
                  onChange={event => this.handleOnChange(event)}
                  required={true}
                />
                <input
                  type="password"
                  id="input-password"
                  className="fadeIn third"
                  placeholder="Password"
                  name="password"
                  onChange={event => this.handleOnChange(event)}
                  required
                />
                <button
                  type="submit"
                  className="fadeIn fourth btn-login"
                  value="Enter"
                  onClick={this.handleLogin}
                >
                  Enter &nbsp;
                  <i className="" id="icon-loading" />
                </button>
              </form>
            </div>

            <div id="formFooter">
              <a
                className="underlineHover link-pointer"
                data-toggle="modal"
                data-target="#modalRecuperarSenha"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="modalRecuperarSenha"
          role="dialog"
          aria-labelledby="modalRecuperarSenhaLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalRecuperarSenhaLabel">
                  Enter your email and password below
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div
                    class=""
                    role="alert"
                    id="alert-recuperar-senha"
                    data-dismiss="alert"
                  />
                  <input
                    id="inputEmailChange"
                    class="w-100 mx-auto"
                    type="email"
                    placeholder="E-mail"
                    name="changeEmail"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={this.handleClearEmail}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    id="btn-confimarRecuperar"
                    onClick={this.handleRecuperarSenha}
                  >
                    Confirm &nbsp;
                    <i className="" id="icon-loading-confirmar" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
