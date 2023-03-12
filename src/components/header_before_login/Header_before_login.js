import React, { Component } from 'react';

import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import api from "../services/api";
import $ from "jquery";


class Header_no_login extends Component {
    state = {
        ranking: "",
        home: "",
        admin: false,
        changePassword: "",
        changeNewPassword: ""
    };

    async componentWillMount() {

        this.setState({ admin: true });
        $("#admin").removeClass("invisible");
    }

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


    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default withRouter(Header_no_login);