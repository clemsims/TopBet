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

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand h4 mb-0" href="#">
            <img src={logo} alt="TopBet Logo" className="img-fluid logo" style={{maxWidth: "80px"}} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-side"
            aria-controls="navbar-side"
            aria-expanded="false"
            aria-label="Abrir navegação"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbar-side">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link link-pointer" onClick={console.log("test")}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-pointer "
                  onClick={console.log("test")}
                >
                  Equipe
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.handleLogin}
                >
                  Bet now (Login)
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          </ol>
          <div id="carouselExampleIndicators" class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block img-fluid w-100 mx-auto"
                src={img1}
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block img-fluid w-100 mx-auto"
                src={img3}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Anterior</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Próximo</span>
          </a>
        </div>

        <div className="container mt-5" id="equipe">
          <div className="row">
            
            <div className="col-4 center">
              <div className="card">
                <img
                  class="card-img-top img-fluid mx-auto d-block"
                  src="https://media.tenor.com/M1KPEboSVCEAAAAM/yasincengiz38-skibididop.gif"
                />

                <div className="card-body text-center">
                  <h5 class="card-title">A sample user: Walid. E</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
