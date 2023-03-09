import React, { Component } from "react";
import api from "../../services/api";
import $ from "jquery";
import "./styles.css";


// Here is the /login endpoint in the Fast API Backend:
// @app.post("/login", tags=["Authentication"], summary="Create access and refresh tokens for user")
// async def login(form_data: OAuth2PasswordRequestForm = Depends()):
//     user = get_user(form_data.username, form_data.password)
//     if not user:
//         raise HTTPException(status_code=400, detailF="Invalid credentials")

//     email = user[2]
//     access_token = create_token(email, JWT_SECRET_KEY, timedelta(
//         minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
//     refresh_token = create_token(email, JWT_REFRESH_SECRET_KEY, timedelta(
//         minutes=REFRESH_TOKEN_EXPIRE_MINUTES))

//     return {"access_token": access_token, "refresh_token": refresh_token}

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
    username: "",
    password: "",
    changeEmail: "" // This is the state for the email change
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
    const { username, password } = this.state;

    if (!username) {
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

    if (!username || !password) return;
    $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

    try {
      const requestBody = new URLSearchParams();
      requestBody.append('username', username);
      requestBody.append('password', password);
      requestBody.append('grant_type', 'password');
      requestBody.append('client_id', 'client');

      let retriveUser = await api.post("/login", requestBody, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      if (retriveUser.data === "Invalid credentials") {
        $("#alert-login")
          .addClass("alert alert-danger")
          .text("Invalid credentials");
        $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
        setTimeout(function () {
          $("#alert-login")
            .removeClass("alert alert-danger")
            .text("");
        }
          , 3000);
      } else {
        let access_token = retriveUser.data.access_token;
        let refresh_token = retriveUser.data.refresh_token;
        sessionStorage.setItem("token", access_token); // This is the access token that will be used to authenticate the user in the API calls.
        sessionStorage.setItem("refresh_token", refresh_token); // This is the refresh token that will be used to get a new access token when the current one expires

        let retriveUserInfo = await api.get("/me", {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        });

        // Here we are storing the user info in the sessionStorage so that we can use it in the main page
        sessionStorage.setItem("username", retriveUserInfo.data.username);
        sessionStorage.setItem("email", retriveUserInfo.data.email);

        // Redirects to the main page
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

    this.setState({
      [name]: value
    });
  };

  handleClearEmail = e => {
    this.setState({ changeEmail: "" });
  };

  handlePasswordRecovery = async e => {
    e.preventDefault();

    let response = await api.get(`/users/email/${this.state.changeEmail}`); // TODO

    $("#icon-loading-confirmar").addClass(
      "fas fa-sync-alt loading-refresh-animate"
    );

    if (!response.data.email) {
      $("#inputEmailChange").css("border-color", "blue");
      $("#alert-recuperar-senha")
        .addClass("alert alert-danger")
        .text("Email not found!");
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
        `/recover/password/${this.state.changeEmail}`
      ); // TODO

      let sendEmail = await api.get(
        `/send/email/${this.state.changeEmail}/${retrivePassword.data.password}`
      ); // TODO
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
                  name="username"
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
                    onClick={this.handlePasswordRecovery}
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
