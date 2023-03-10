import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import api from "../../services/api"

import img from "../index/images/img-1.png";

import { openBets, accountInfo } from "../index/constant";
import "./styles.css";

export default class Main extends Component {
    state = {
        loading: false,
        card: []
    }

    handleGoPage(e) {
        this.props.history.push(e.target.name);
    }

    async componentWillMount() {
        if (!sessionStorage.getItem("username")) this.props.history.push("/login");
        else if (sessionStorage.getItem("loading")) {
            this.setState({ loading: true });
            let response = await api.get("/round"); // Get all rounds

            const { card } = this.state;

            if (response.data.length === 0) {
                card.push(
                    <div class="card">
                        <img class="card-img-top img-fluid" src={img} alt="discordpy.png" />
                        <div class="card-body">
                            <h5 class="card-title text-center">No round available</h5> //
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary w-100" disabled>Unavailable</button>
                        </div>
                    </div>
                );
            }

            for (const i of response.data) {
                if (i.active) {
                    card.push(
                        <div class="card">
                            <img class="card-img-top img-fluid" src={img} alt="discordpy.png" />
                            <div class="card-body">
                                <h5 class="card-title text-center">{i.nameRound}</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block" name="/round/play_round" onClick={(event) => {
                                    sessionStorage.setItem("nameRound", i.nameRound);
                                    this.handleGoPage(event);
                                }
                                }>Play</button>
                            </div>
                        </div>
                    );
                }
            }
        }
        else if (!sessionStorage.getItem("loading")) {
            let response = await api.get("/round");

            const { card } = this.state;

            if (response.data.length === 0) {
                card.push(
                    <div class="card">
                        <img class="card-img-top img-fluid" src={img} alt="discordpy.png" />
                        <div class="card-body">
                            <h5 class="card-title text-center">No round available</h5>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary btn-block" disabled>Unavailable</button>
                        </div>
                    </div>
                );
            }

            for (const i of response.data) {
                if (i.active) {
                    card.push(
                        <div class="card">
                            <img class="card-img-top img-fluid" src={img} alt="discordpy.png" />
                            <div class="card-body">
                                <h5 class="card-title text-center">{i.nameRound}</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block" name="/round/play_round" onClick={(event) => {
                                    sessionStorage.setItem("nameRound", i.nameRound);
                                    this.handleGoPage(event);
                                }
                                }>Play</button>
                            </div>
                        </div>
                    );
                }
            }

            if (card.length === 0) {
                card.push(
                    <div class="card">
                        <img class="card-img-top img-thumbnail img-fluid" src={img} alt="discordpy.png" />
                        <div class="card-body">
                            <h5 class="card-title text-center">No round available</h5>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary btn-block" disabled>Unavailable</button>
                        </div>
                    </div>
                );
            }
            this.setState({ loading: false })
        };
    }

    closeLoading = () => {
        setTimeout(() => {
            this.setState({ loading: false })
            sessionStorage.removeItem("loading");
        }, 4000);
    }

    componentDidMount() {
        this.closeLoading();
    }


    /* render account info and open bets*/

    renderOpenBets() {
        return (
            <div className="open-bets">
                <h2>Open Bets</h2>
                <ul>
                    {openBets.map(bet => (
                        <li kexy={bet.id}>
                            {bet.team} ({bet.odds}) - ${bet.stake}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    renderAccountInfo() {
        return (
            <div className="account-info">
                <h2>Account Information</h2>
                <p>Username: {sessionStorage.getItem("username")}</p>
                <p>
                    Balance: {accountInfo.balance} {accountInfo.currency}
                </p>
            </div>
        );
    }



    render() {

        return (
            <div>
                <LoadingScreen
                    loading={this.state.loading}
                    bgColor='#1E1E1E'
                    spinnerColor='#318E58'
                    textColor='white'
                    text={`Welcome ${sessionStorage.getItem("username")}`}
                >
                    <Header />
                    <main role="main" className="container-fluid w-100">
                        <div class="row jumbotron jumbotron">
                            <div class="container-fluid">
                                <h1 class="display-3">Football Betting</h1>
                                <p className="lead"> Below are some rounds available to play, to start your bets, choose one of them and press "play".</p>
                            </div>
                        </div>
                        {/* Looping com as rounds */}
                        <div class="card-deck">
                            {this.state.card.map((key, i) => key)}
                        </div>
                    </main>
                    <Footer />
                </LoadingScreen>
            </div>
        );
    }
}
