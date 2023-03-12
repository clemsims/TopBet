import React, { Component } from 'react';
import { withRouter } from "react-router";
import "./styles.css";

class Header_no_login extends Component {

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
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <button className="logo" type="button" onClick={this.handlehome}
                    >TopBet
                    </button>
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
        );
    }
}

export default withRouter(Header_no_login);