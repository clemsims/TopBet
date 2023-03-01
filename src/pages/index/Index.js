/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import $ from "jquery";

import "./styles.css";

import img1 from "./images/img-1.png";
import img3 from "./images/img-3.jpg";
import logo from '../index/images/TOPBET.png';


export default class Index extends Component {

  handleLogin = () => {
    if (sessionStorage.getItem("username")) this.props.history.push("/main");
    this.props.history.push("/login");
  };

  handleBestRates = () => {
    this.props.history.push("/best-rates");
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand h4 mb-0" href="#">
            <img
              src={logo}
              alt="TopBet Logo"
              className="img-fluid logo"
              style={{ maxWidth: "80px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-side"
            aria-controls="navbar-side"
            aria-expanded="false"
            aria-label="Open navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbar-side">
            <ul className="navbar-nav ml-auto">
              <li className="button-wrapper">
                <button type="button" className="nav-item-home" onClick={console.log("test")}>
                  Home
                </button>
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

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block img-fluid w-100 mx-auto" src={img1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid w-100 mx-auto" src={img3} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
        </div>

        <div className="buttom-text">
          At Top Bet, we're committed to promoting responsible and ethical sports betting practices. <br />
          That's why we offer rewards for watching ads, rather than requiring users to bet money.<br />
          This ensures that users can enjoy the thrill of sports betting without taking unnecessary risks <br />
          or engaging in behavior that is harmful to themselves or others.<br />
          Our rewards program is designed to be fair, transparent, and easy to use. <br />
          Simply watch ads and earn rewards that you can use to place bets on your favorite sports teams and events.<br />
          We provide clear and upfront information on the terms and conditions of our rewards program,<br />
          so you can make informed decisions about your betting and avoid any potential risks or issues.
        </div>
      </div>
    );
  }
}
