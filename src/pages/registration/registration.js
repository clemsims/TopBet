/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import $ from "jquery";
import api from "../../services/api";
import "./styles.css";
import backgroundImage from '/project/TopBet/src/pages/registration/images/Backgr.jpg';

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
  /* ajout de Mark */
  handlehome = () => {
    this.props.history.push("/");
  };
  renderlogin() {
    return (
      <div className="container">
        <img src={backgroundImage} alt='background image' />
        <h1 className="topbet-title"><span>Top</span><span className="red">Bet</span></h1> 
        <h1 className="moto">The highest odds in the market</h1>
        <div id="formContent">
            <div id="formHeader">

              <h2 className="h2-login active">Register</h2>
            </div>

            
          </div>
      </div>
    );
  }
  render() {
    return (
      <div className="div-panel">
        
        <div className="overlay"></div>
        <div className="headertext aboveOverlay">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand h4 mb-0" href="#">
              <div className="logo" onClick={this.handlehome}>TopBet</div>
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
          </nav>
        </div>
        
        <div className="wrapper fadeInDown">
          <div class="" role="alert" id="alert-register" data-dismiss="alert" />
          <div className="background">{this.renderlogin()}</div>
          
        </div>
      </div>
    );
  }
}
