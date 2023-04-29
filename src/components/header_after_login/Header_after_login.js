import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import "./styles.css";

class Header_logged extends Component {

    handleBestRates = () => {
        this.props.history.push("/admin/create_round");
    };


    handlehome = () => {
        this.props.history.push("/");
    };

    handlerank = () => {
        this.props.history.push("/ranking");
    };

    handlebet = () => {
        this.props.history.push("/admin/create_round");
    };


    handleaccount_infos = () => {
        this.props.history.push("/admin/account_infos");
    };

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <button className="nav-item-betnow" type="button" onClick={this.handlehome}
                    >
                        TopBet
                    </button>
                    <ul className="navbar-nav ml-auto">
                        <li className="button-wrapper">
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
                        <li>
                            <button
                                type="button"
                                className="nav-item-bestrates"
                                onClick={this.handlerank} >
                                Ranking
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="nav-item-bestrates"
                                onClick={this.handlebet}
                            >
                                Bet Now
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="nav-item-bestrates"
                                onClick={this.handleaccount_infos}
                            >
                                Account
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header_logged);