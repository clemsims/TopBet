/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import $ from "jquery";
import api from "../../services/api";

import "./styles.css";

export default class registration extends Component {
  componentWillMount() {
    if (sessionStorage.getItem("username")) this.props.history.push("/main");
  } // This will redirect the user to the main page if he is already logged in

  state = {
    name: "",
    username: "",
    password: "",
    email: ""
  };

  handleLogin = () => {
    this.props.history.push("/login"); // Redirect to login page when the user clicks on the login button
  };

  handleOnChange = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleRegisterUser = async e => {
    e.preventDefault();
    const { name, username, password, email } = this.state;
    if (!username) {
      $("#user").css("border-color", "red");
      setTimeout(function() {
        $("#user").css("border-color", "");
      }, 3000);
    }

    if (username.length > 20) {
      $("#user").css("border-color", "red");
      setTimeout(function() {
        $("#user").css("border-color", "");
      }, 3000);
    }

    if (!name) {
      $("#name").css("border-color", "red");
      setTimeout(function() {
        $("#name").css("border-color", "");
      }, 3000);
    }

    if (!password) {
      $("#password").css("border-color", "red");
      setTimeout(function() {
        $("#password").css("border-color", "");
      }, 3000);
    }

    if (password.length < 6) {
      $("#password").css("border-color", "red");
      setTimeout(function() {
        $("#password").css("border-color", "");
      }, 3000);
    }

    if (!email) {
      $("#email").css("border-color", "red");
      setTimeout(function() {
        $("#email").css("border-color", "");
      }, 3000);
    }

    if (!username || !name || !password || !email) return;
    $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

    // let verifyEmail = await api.get(`users/email/${email}`); // Verify if the email is already in use
    // let verifyUser = await api.get(`users/username/${username}`);

    let verifyEmail = false; // TODO: use API validation instead of some front-end validation bullshit
    let verifyUser = false;

    // /usrs/email/:email returns a 404 if the email is not in use and a JSON with user data if the email is in use
    // /usrs/username/:username returns a 404 if the username is not in use and a JSON with user data if the username is in use

    if (verifyEmail.data && verifyUser.data) {
      $("#alert-register")
        .addClass("alert alert-danger")
        .text("The username and email entered are already in use!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function() {
        $("#alert-register").removeClass("alert alert-danger");
      }, 5000);
    } else if (verifyUser.data) {
      $("#alert-register")
        .addClass("alert alert-danger")
        .text("The username is already in use!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function() {
        $("#alert-register").removeClass("alert alert-danger");
      }, 5000);
    } else if (verifyEmail.data) {
      $("#alert-register")
        .addClass("alert alert-danger")
        .text("The email is already in use!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function() {
        $("#alert-register").removeClass("alert alert-danger");
      }, 5000);
    } else if (password.length < 6) {
      $("#alert-register")
        .addClass("alert alert-danger")
        .text("The password has less than 6 characters!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function() {
        $("#alert-register").removeClass("alert alert-danger");
      }, 5000);
    } else if (username.length > 20) {
      $("#alert-register")
        .addClass("alert alert-danger")
        .text("The username can not exceed 20 characters!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function() {
        $("#alert-register").removeClass("alert alert-danger");
      }, 5000);
    } else {
      // Here is the FAST API Pydantic model:
      // class UserRegister(BaseModel):
      //     username: str
      //     email: str
      //     password: str
      // TODO: Add name to the model
      let response = await api.post("register", {
        username: username,
        email: email,
        password: password
      });
      $("#alert-register")
        .addClass("alert alert-success")
        .text("Registration successfully completed. Redirecting to login ...");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");

      let props = this.props;
      setTimeout(function() {
        props.history.push("/login");
      }, 3000);
    }
  };

  render() {
    return (
      <div className="div-panel">
        <div className="wrapper fadeInDown">
          <div class="" role="alert" id="alert-register" data-dismiss="alert" />
          <div id="formContent">
            <div id="formHeader">
              <h2
                className="h2-login inactive underlineHover"
                id="loginButton"
                onClick={this.handleLogin}
              >
                Login
              </h2>

              <h2 className="h2-login active">Register</h2>
            </div>

            <div className="form-padding">
              <form>
                <input
                  type="text"
                  id="name"
                  className="fadeIn second"
                  placeholder="Full Name"
                  name="name"
                  onChange={event => this.handleOnChange(event)}
                />
                <input
                  type="text"
                  id="user"
                  className="fadeIn third"
                  placeholder="Username"
                  name="username"
                  onChange={event => this.handleOnChange(event)}
                />
                <input
                  type="email"
                  id="email"
                  className="fadeIn fourth"
                  placeholder="E-mail"
                  name="email"
                  onChange={event => this.handleOnChange(event)}
                />
                <input
                  type="password"
                  id="password"
                  className="fadeIn five"
                  placeholder="Password"
                  name="password"
                  onChange={event => this.handleOnChange(event)}
                />
                <button
                  type="submit"
                  className="fadeIn six btn-register"
                  value="Register"
                  id="btn-cadastrar"
                  onClick={this.handleRegisterUser}
                >
                  Register &nbsp;<i className="" id="icon-loading" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
